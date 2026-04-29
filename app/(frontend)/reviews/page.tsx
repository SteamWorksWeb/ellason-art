'use client';

import { useState } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { submitReview } from '@/app/actions/forms';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Review {
  id: string;
  name: string;
  review: string;
  rating: number;
  createdAt: string;
}

// ─── Seed Reviews ─────────────────────────────────────────────────────────────

const SEED_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Margaret T.',
    review: 'The commission process was seamless from start to finish. The piece arrived perfectly packaged and looks absolutely stunning above our fireplace. It has become the centrepiece of our entire living room.',
    rating: 5,
    createdAt: '2025-11-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'James & Claire Weston',
    review: 'We commissioned a large-format coastal piece for our beach house and could not be happier. The texture and tonal palette are exactly what we described, and the communication throughout was exceptional.',
    rating: 5,
    createdAt: '2025-12-15T00:00:00Z',
  },
  {
    id: '3',
    name: 'Sophia R.',
    review: 'Truly an artist at the top of her craft. The impasto texture catches the light throughout the day and constantly reveals new depth. Worth every penny — already considering a second piece.',
    rating: 5,
    createdAt: '2026-01-22T00:00:00Z',
  },
];

// ─── Star Rating ──────────────────────────────────────────────────────────────

function StarRating({ rating, interactive = false, onChange }: {
  rating: number;
  interactive?: boolean;
  onChange?: (r: number) => void;
}) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= (interactive ? (hovered || rating) : rating);
        return (
          <button
            key={star}
            type={interactive ? 'button' : undefined}
            onClick={interactive && onChange ? () => onChange(star) : undefined}
            onMouseEnter={interactive ? () => setHovered(star) : undefined}
            onMouseLeave={interactive ? () => setHovered(0) : undefined}
            className={`transition-colors duration-150 ${interactive ? 'cursor-pointer' : 'cursor-default pointer-events-none'}`}
            aria-label={interactive ? `Rate ${star} out of 5` : `${rating} out of 5 stars`}
          >
            <svg
              className={`w-5 h-5 ${filled ? 'text-[#1f1e1c]' : 'text-neutral-300'}`}
              fill={filled ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────────

function ReviewCard({ review }: { review: Review }) {
  const initials = review.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
  return (
    <article className="bg-[#faf8f5] border border-neutral-200 p-8 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm">
      <StarRating rating={review.rating} />
      <blockquote className="text-neutral-700 font-light leading-relaxed text-sm flex-grow">
        &ldquo;{review.review}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-cream-200">
        <div className="w-10 h-10 rounded-full bg-[#1f1e1c]/10 flex items-center justify-center flex-shrink-0 ring-2 ring-[#1f1e1c]/20">
          <span className="text-xs font-semibold text-neutral-700 tracking-wider">{initials}</span>
        </div>
        <div>
          <p className="text-xs font-semibold text-neutral-800 tracking-wide uppercase">{review.name}</p>
          <p className="text-[10px] text-neutral-400 tracking-widest mt-0.5">
            {new Date(review.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </article>
  );
}

// ─── Inner Page (needs reCAPTCHA hook) ────────────────────────────────────────

function ReviewsPageInner() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [form, setForm] = useState({ name: '', review: '', rating: 0 });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [reviews, setReviews] = useState<Review[]>(SEED_REVIEWS);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.rating === 0) {
      setErrorMsg('Please select a star rating.');
      setSubmitStatus('error');
      return;
    }
    setSubmitting(true);
    setErrorMsg('');

    if (!executeRecaptcha) {
      setErrorMsg('reCAPTCHA not ready. Please try again.');
      setSubmitStatus('error');
      setSubmitting(false);
      return;
    }

    // Capture form element synchronously before any await (event is pooled)
    const formEl = e.target as HTMLFormElement;
    const token = await executeRecaptcha('review_submit');
    const formData = new FormData(formEl);
    formData.append('rating', String(form.rating));
    formData.append('token', token);

    const res = await submitReview(formData);
    setSubmitting(false);

    if (res.error) {
      setErrorMsg(res.error);
      setSubmitStatus('error');
    } else {
      // Optimistically add review to local list
      const newReview: Review = {
        id: String(Date.now()),
        name: form.name,
        review: form.review,
        rating: form.rating,
        createdAt: new Date().toISOString(),
      };
      setReviews((prev) => [newReview, ...prev]);
      setSubmitStatus('success');
      setForm({ name: '', review: '', rating: 0 });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">

      {/* Page Header */}
      <section className="bg-[#faf8f5] border-b border-neutral-200 py-20 px-6 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 mb-4 font-semibold">Client Voices</p>
        <h1 className="text-4xl md:text-5xl font-serif text-neutral-800 font-light leading-snug mb-6">
          Reviews &amp; Testimonials
        </h1>
        <p className="text-sm text-neutral-500 font-light max-w-xl mx-auto leading-relaxed">
          Hear from collectors and interior designers who have brought an Ellason original into their space.
        </p>
      </section>

      {/* Submission Form */}
      <section className="bg-white border-b border-neutral-100 py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xs tracking-[0.2em] uppercase text-neutral-700 font-bold mb-10 text-center">
            Share Your Experience
          </h2>

          {submitStatus === 'success' ? (
            <div className="bg-[#faf8f5] border border-neutral-200 p-12 text-center rounded-sm shadow-sm">
              <svg className="w-10 h-10 text-[#1f1e1c] mx-auto mb-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="font-serif text-2xl font-light text-neutral-800 mb-3">Thank You!</h3>
              <p className="text-sm text-neutral-600 font-light">Your review has been submitted successfully.</p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="mt-6 text-[10px] tracking-[0.15em] uppercase text-[#1f1e1c] hover:text-[#333230] border-b border-[#1f1e1c] pb-0.5 font-bold transition-colors"
              >
                Submit Another Review
              </button>
            </div>
          ) : (
            <form id="reviews-form" onSubmit={handleSubmit} className="bg-[#faf8f5] border border-neutral-200 p-10 rounded-sm shadow-sm flex flex-col gap-8">
              {/* Name */}
              <div className="flex flex-col relative group">
                <input
                  id="review-name"
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Your Name"
                  className="peer w-full bg-transparent border-b border-neutral-300 py-3 text-sm text-[#1f1e1c] font-medium focus:outline-none focus:border-[#1f1e1c] transition-colors placeholder-transparent"
                />
                <label htmlFor="review-name" className="absolute left-0 top-3 text-sm font-semibold text-neutral-500 cursor-text transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-neutral-700 peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-neutral-700">
                  Full Name
                </label>
              </div>

              {/* Star Rating */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-700 font-bold mb-3">Your Rating</p>
                <StarRating rating={form.rating} interactive onChange={(r) => setForm((p) => ({ ...p, rating: r }))} />
              </div>

              {/* Review Text */}
              <div className="flex flex-col relative pt-4 group">
                <textarea
                  id="review-text"
                  name="review"
                  required
                  rows={5}
                  value={form.review}
                  onChange={(e) => setForm((p) => ({ ...p, review: e.target.value }))}
                  placeholder="Your review"
                  className="peer w-full bg-transparent border-b border-neutral-300 py-3 text-sm text-[#1f1e1c] font-medium focus:outline-none focus:border-[#1f1e1c] transition-colors placeholder-transparent resize-none leading-relaxed"
                />
                <label htmlFor="review-text" className="absolute left-0 top-7 text-sm font-semibold text-neutral-500 cursor-text transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-neutral-700 peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-2 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-neutral-700">
                  Your Review
                </label>
              </div>

              {submitStatus === 'error' && (
                <p className="text-xs text-red-500 font-medium">{errorMsg}</p>
              )}

              <div className="pt-2">
                <button
                  id="review-submit"
                  type="submit"
                  disabled={submitting}
                  className="w-full md:w-auto px-12 py-4 bg-[#1f1e1c] hover:bg-[#333230] text-[#faf8f5] font-medium text-sm tracking-wide uppercase transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
                >
                  {submitting ? 'Submitting…' : 'Submit Review'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 px-6 lg:px-12 flex-grow">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-12 border-b border-cream-300 pb-6">
            <h2 className="text-xs tracking-[0.2em] uppercase text-neutral-500">
              {reviews.length} Review{reviews.length !== 1 ? 's' : ''}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

// ─── Provider wrapper (default export) ────────────────────────────────────────

export default function ReviewsPage() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
      <ReviewsPageInner />
    </GoogleReCaptchaProvider>
  );
}
