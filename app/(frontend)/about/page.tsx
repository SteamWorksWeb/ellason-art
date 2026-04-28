import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About | Ellason Art',
  description: 'The artist, the studio, and the coastal inspiration behind Ellason Art.',
};

// ─── Bio Hero ─────────────────────────────────────────────────────────────────
function BioHeroSection() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[85vh] border-b border-cream-200">
      <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full bg-neutral-200 order-1 lg:order-1">
        <Image src="/images/ellason profile 1.jpg" alt="About the Artist" fill className="object-cover object-center grayscale-[20%]" priority />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-24 bg-cream-50 order-2 lg:order-2">
        <h2 className="text-base md:text-lg tracking-[0.25em] uppercase text-neutral-600 mb-6 font-semibold">The Artist</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1] mb-8 tracking-tight whitespace-pre-line">
          Hi, I&rsquo;m Ellason.
        </h1>
        <p className="text-lg text-neutral-800 font-light leading-relaxed max-w-lg mb-10">
          I was born and raised in Tampa, Florida and am a 2026 graduate of Clemson University in Special Education. Art has always been something I have loved, but over time, it has become a way for me to create meaningful, personal pieces that others can connect with and cherish.
        </p>
        <div className="w-16 border-b-[1.5px] border-brandYellow"></div>
      </div>
    </section>
  );
}

// ─── Story Prose ──────────────────────────────────────────────────────────────
function StoryProseSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <article className="max-w-3xl mx-auto flex flex-col space-y-24">
        <div>
          <h2 className="text-3xl lg:text-4xl font-serif font-light text-neutral-900 mb-8 pb-4 inline-block">
            Faith &amp; Family
          </h2>
          <div className="space-y-8 text-neutral-700 font-light leading-loose text-lg">
            <p>My faith is a big part of who I am. As a Christian, I strive to create with intention, joy, and purpose, and I feel so grateful to use my creativity in a way that reflects that.</p>
            <p>My nine-person family has also played such an important role in supporting and encouraging me throughout this journey.</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-serif font-light text-neutral-900 mb-8 pb-4 inline-block">
            A Few Fun Things
          </h2>
          <div className="space-y-8 text-neutral-700 font-light leading-loose text-lg">
            <p>My favorite color is yellow, which you will definitely see throughout my work. I am completely obsessed with ice cream, and I love traveling and finding inspiration in new places.</p>
          </div>
        </div>
      </article>
    </section>
  );
}

// ─── Studio Gallery ───────────────────────────────────────────────────────────
function StudioGallerySection() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto w-full mb-32 border-t border-cream-200">
      <h3 className="text-base tracking-[0.2em] uppercase text-neutral-500 text-center mb-16 pt-16 font-semibold">Studio Fragments</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="relative w-full aspect-square md:aspect-[4/5] bg-neutral-200 overflow-hidden shadow-sm group">
          <Image src="/images/art 1.jpg" alt="Studio details" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center transition-transform duration-[3000ms] group-hover:scale-105" />
        </div>
        <div className="relative w-full aspect-square md:aspect-[3/4] bg-neutral-200 overflow-hidden shadow-sm md:mt-32 group">
          <Image src="/images/art 2.jpg" alt="Studio space" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center transition-transform duration-[3000ms] group-hover:scale-105" />
        </div>
      </div>
    </section>
  );
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────────
function BottomCTASection() {
  return (
    <section className="bg-brand-blue py-32 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl lg:text-4xl font-serif font-light text-cream-100 mb-6 tracking-tight">
          Art That Feels Personal.
        </h2>
        <p className="text-lg text-blue-100/80 font-light leading-relaxed mb-12 max-w-lg mx-auto">
          Ellason&rsquo;s Art is all about creating art that feels timeless, elegant, and personal. Whether you are purchasing a piece or commissioning something special, I hope my work brings joy and meaning into your space.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/shop" className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-[#0e5492] rounded-md font-medium uppercase tracking-wide text-sm transition-colors">
            Shop Collection
          </Link>
          <Link href="/commissions" className={`w-full sm:w-auto px-10 py-4 ${buttonVariants()}`}>
            Start a Commission
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <BioHeroSection />
      <StoryProseSection />
      <StudioGallerySection />
      <BottomCTASection />
    </div>
  );
}
