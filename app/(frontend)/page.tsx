import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Ellason Art | Coastal-Inspired Art for Elevated Spaces',
  description: 'Original coastal fine art, textured paintings, and custom commissions.',
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-sand-light flex items-center justify-center overflow-hidden">
      <Image
        src="/images/Hero 1.png"
        alt="Hero Background"
        fill
        className="object-cover object-center w-full h-full opacity-60"
        priority
      />
      <div
        className="z-10 text-center px-6 py-24 w-full max-w-5xl mx-auto flex flex-col items-center"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.4) 0%, transparent 65%)' }}
      >
        <span className="text-base md:text-lg tracking-[0.25em] uppercase text-cream-50 mb-6 font-semibold drop-shadow-md">
          Ellason Fine Art
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white leading-[1.25] tracking-wide mb-8 max-w-4xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_40%)]">
          Original Coastal-Inspired Art for Elevated Spaces
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <Link href="/shop" className="px-8 py-3.5 bg-transparent border border-white text-white hover:bg-white hover:text-[#0e5492] rounded-md font-medium uppercase tracking-wide text-sm transition-colors">
            Shop Collection
          </Link>
          <Link href="/commissions" className={`px-8 py-3.5 ${buttonVariants()}`}>
            Request a Commission
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Brand Statement ──────────────────────────────────────────────────────────
function BrandStatementSection() {
  return (
    <section className="bg-cream-100 py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-snug text-neutral-800 mb-8 px-4 font-light">
          &ldquo;Art that breathes life into a room—drawing from the raw, undulating textures of the coast and the serenity of natural light.&rdquo;
        </h2>
        <p className="text-neutral-500 font-light tracking-wide text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Every piece is created to bridge the gap between organic coastal beauty and modern, refined interiors. Utilizing specialized texturing techniques and a muted, airy palette, we craft statement pieces that anchor your space.
        </p>
      </div>
    </section>
  );
}

// ─── Featured Works ───────────────────────────────────────────────────────────
const WORKS = [
  { id: '1', title: 'Tideland Study I',  size: '36" x 48"', imageSrc: '/images/art 1.jpg' },
  { id: '2', title: 'Oasis in Sand',     size: '48" x 60"', imageSrc: '/images/art 2.jpg' },
  { id: '3', title: 'Whispering Dune',   size: '30" x 40"', imageSrc: '/images/art 3.jpg' },
];

function FeaturedWorksSection() {
  return (
    <section className="bg-background py-24 px-6 lg:px-12">
      <div className="max-w-[1536px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-cream-300 pb-6">
          <h2 className="text-base tracking-[0.2em] uppercase text-neutral-500 mb-4 md:mb-0">Curated Collection</h2>
          <Link href="/shop" className="text-[10px] tracking-widest uppercase text-neutral-800 hover:text-sand-dark transition-colors font-semibold">
            View All Works &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {WORKS.map((work) => (
            <div key={work.id} className="group block">
              <div className="relative aspect-[4/5] bg-neutral-100 mb-6 overflow-hidden">
                <Image
                  src={work.imageSrc}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-[2000ms] ease-out"
                />
              </div>
              <h3 className="text-2xl font-serif font-light text-neutral-800 mb-2">{work.title}</h3>
              <p className="text-neutral-400 text-[10px] tracking-[0.2em] uppercase">{work.size}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Preview ────────────────────────────────────────────────────────────
function AboutPreviewSection() {
  return (
    <section className="bg-cream-50 flex flex-col-reverse lg:flex-row overflow-hidden border-t border-cream-200">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-16 lg:p-24 xl:p-32 bg-sand-light/10">
        <div className="max-w-lg">
          <h2 className="text-base tracking-[0.25em] uppercase text-neutral-400 mb-8 border-b inline-block border-neutral-300 pb-2">
            The Artist
          </h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-light mb-8 text-neutral-800 leading-tight whitespace-pre-line">
            Crafting Serenity {"\n"} through Texture
          </h3>
          <p className="text-neutral-600 mb-12 leading-relaxed font-light">
            Based on the coastline, the studio is a sanctuary of light and raw materials. Every stroke and application of texture is an exploration of the elements—earth, wind, and water—translated into timeless statement pieces for your home.
          </p>
          <Link href="/about" className={`px-8 py-3.5 ${buttonVariants()}`}>
            Read the Full Story
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[500px] xl:min-h-[700px]">
        <Image src="/images/ellason profile 1.jpg" alt="The Artist" fill className="object-cover object-center" />
      </div>
    </section>
  );
}

// ─── Commissions CTA ──────────────────────────────────────────────────────────
function CommissionsSection() {
  return (
    <section className="bg-brand-blue py-32 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-serif font-light text-cream-100 mb-8">
          Bespoke Commissions
        </h2>
        <p className="text-lg text-blue-100/80 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
          Looking for a specific dimension or a palette tailored exclusively to your space? We collaborate closely with clients and interior designers to create custom artwork that perfectly anchors a room.
        </p>
        <Link href="/commissions" className={`px-10 py-4 inline-block ${buttonVariants()}`}>
          Begin the Process
        </Link>
      </div>
    </section>
  );
}

// ─── Trust Elements ───────────────────────────────────────────────────────────
const TRUST = [
  { id: '1', letter: 'O', title: 'Original Designs',      desc: 'One-of-a-kind artworks, authenticated and signed.' },
  { id: '2', letter: 'C', title: 'Custom Commissions',    desc: 'Tailored to fit your unique vision and dimensions.' },
  { id: '3', letter: 'L', title: 'Large-Scale Interiors', desc: 'Statement pieces crafted for luxury spaces and designers.' },
];

function TrustElementsSection() {
  return (
    <section className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-cream-300">
        {TRUST.map((el) => (
          <div key={el.id} className="pt-8 md:pt-0 pb-8 md:pb-0 px-6 flex flex-col items-center">
            <div className="w-12 h-12 mb-6 text-mutedBlue-dark flex items-center justify-center border border-mutedBlue rounded-full shadow-sm">
              <span className="font-serif italic text-xl opacity-80">{el.letter}</span>
            </div>
            <h4 className="text-[11px] tracking-widest uppercase text-neutral-800 mb-3 font-medium">{el.title}</h4>
            <p className="text-sm text-neutral-500 font-light max-w-[240px]">{el.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <BrandStatementSection />
      <FeaturedWorksSection />
      <AboutPreviewSection />
      <CommissionsSection />
      <TrustElementsSection />
    </div>
  );
}
