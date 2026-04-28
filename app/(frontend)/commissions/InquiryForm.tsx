'use client';

import { useState } from 'react';

export default function InquiryForm(props: any) {
  const faqHeadline = props.faqHeadline || 'Frequently Asked';
  const faqDescription = props.faqDescription || 'Every commission is unique, but the journey follows a shared rhythm. Here are a few details to review before submitting an inquiry.';
  const faqs = props.faqs && props.faqs.length > 0 ? props.faqs : [
    { q: 'How long does a custom commission usually take?', a: 'Timeline varies depending on the size and complexity of the piece, as well as current studio queue. Typically, expect 6–10 weeks from deposit to delivery.' },
    { q: 'Can I choose specific colors to match my interior?', a: 'Absolutely. A core part of the commission process involves matching swatches and discussing the specific lighting and tones of your space.' },
    { q: 'Do you ship international commissions?', a: 'Yes. We work with specialized art handlers and white-glove couriers to safely deliver pieces worldwide.' }
  ];
  const formHeadline = props.formHeadline || 'Start the Conversation';

  const [formData, setFormData] = useState({ name: '', email: '', size: '', budget: '', details: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Commission Inquiry Submitted:', formData);
    setIsSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1536px] mx-auto w-full flex flex-col lg:flex-row gap-20">
      <div className="w-full lg:w-5/12">
        <h3 className="text-3xl lg:text-4xl font-serif font-light text-neutral-900 mb-6">{faqHeadline}</h3>
        <p className="text-sm text-neutral-800 font-light mb-12 leading-relaxed max-w-sm">
          {faqDescription}
        </p>

        <div className="border-t border-neutral-300">
          {faqs.map((faq: any, idx: number) => (
            <div key={idx} className="border-b border-neutral-300">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full text-left py-6 flex justify-between items-center group focus:outline-none focus:ring-opacity-0"
              >
                <span className={`text-sm tracking-wide transition-colors ${openFaq === idx ? 'text-neutral-900 font-bold' : 'text-neutral-800 group-hover:text-neutral-900 font-semibold'}`}>
                  {faq.q}
                </span>
                <span className="text-neutral-700 font-medium text-xl">
                  {openFaq === idx ? '−' : '+'}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm text-neutral-800 font-medium leading-relaxed pl-4 border-l-2 border-brandYellow">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-7/12 bg-white/50 p-8 md:p-12 lg:p-16 border border-brandYellow/40 shadow-sm" id="start">
        <h3 className="text-xs tracking-[0.2em] uppercase text-neutral-700 mb-10 font-bold">{formHeadline}</h3>
        {isSubmitted ? (
          <div className="bg-sand-light/10 border border-brandYellow/50 p-12 text-center animate-fade-in flex flex-col items-center">
            <svg className="w-10 h-10 text-brandYellow mb-6 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7"></path></svg>
            <h4 className="font-serif text-3xl font-light text-neutral-900 mb-4">Request Received</h4>
            <p className="text-sm text-neutral-800 font-medium leading-relaxed max-w-sm mx-auto">
              Thank you for your interest in a bespoke piece. I've received your details and will be in touch via email within 48 hours to discuss the next steps in bringing your vision to life.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
              <div className="flex flex-col relative group">
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="peer w-full bg-transparent border-b border-neutral-400 py-3 text-sm text-neutral-900 font-medium focus:outline-none focus:border-brandYellow transition-colors placeholder-transparent" placeholder="Name" />
                <label htmlFor="name" className="absolute left-0 top-3 text-sm font-semibold text-neutral-600 cursor-text transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-neutral-800 peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-neutral-800">Full Name</label>
              </div>
              <div className="flex flex-col relative group">
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="peer w-full bg-transparent border-b border-neutral-400 py-3 text-sm text-neutral-900 font-medium focus:outline-none focus:border-brandYellow transition-colors placeholder-transparent" placeholder="Email" />
                <label htmlFor="email" className="absolute left-0 top-3 text-sm font-semibold text-neutral-600 cursor-text transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-neutral-800 peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-4 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-neutral-800">Email Address</label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
              <div className="flex flex-col relative cursor-pointer">
                <label htmlFor="size" className="absolute left-0 -top-4 text-[10px] uppercase tracking-widest text-neutral-800 font-bold">Desired Size</label>
                <select name="size" id="size" required value={formData.size} onChange={handleInputChange} className="peer w-full bg-transparent border-b border-neutral-400 py-3 text-sm text-neutral-900 font-medium focus:outline-none focus:border-brandYellow transition-colors appearance-none cursor-pointer">
                  <option value="" disabled hidden></option>
                  <option value="small">Small (up to 24" x 36")</option>
                  <option value="medium">Medium (up to 36" x 48")</option>
                  <option value="large">Large (up to 48" x 60")</option>
                  <option value="oversized">Oversized / Statement Piece</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none text-neutral-800"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></div>
              </div>

              <div className="flex flex-col relative cursor-pointer">
                <label htmlFor="budget" className="absolute left-0 -top-4 text-[10px] uppercase tracking-widest text-neutral-800 font-bold">Estimated Budget</label>
                <select name="budget" id="budget" required value={formData.budget} onChange={handleInputChange} className="peer w-full bg-transparent border-b border-neutral-400 py-3 text-sm text-neutral-900 font-medium focus:outline-none focus:border-brandYellow transition-colors appearance-none cursor-pointer">
                  <option value="" disabled hidden></option>
                  <option value="1500-2500">$1,500 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none text-neutral-800"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></div>
              </div>
            </div>

            <div className="flex flex-col relative pt-2 group">
              <textarea name="details" id="details" required rows={4} value={formData.details} onChange={handleInputChange} className="peer w-full bg-transparent border-b border-neutral-400 py-3 text-sm text-neutral-900 font-medium focus:outline-none focus:border-brandYellow transition-colors placeholder-transparent resize-none leading-relaxed" placeholder="Project Details" />
              <label htmlFor="details" className="absolute left-0 top-5 text-sm font-semibold text-neutral-600 cursor-text transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-neutral-800 peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-2 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-neutral-800">
                Project Details <span className="opacity-70 normal-case tracking-normal md:tracking-wide font-medium"> (Palette, dimensions, inspiration...)</span>
              </label>
            </div>

            <div className="pt-6">
              <button type="submit" className="w-full md:w-auto px-12 py-4 bg-brand-blue hover:bg-brand-blue-light text-cream-50 font-bold text-xs tracking-[0.15em] uppercase transition-all shadow-md focus:outline-none rounded-sm">
                Submit Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
