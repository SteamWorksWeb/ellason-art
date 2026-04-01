import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getPayload } from 'payload';
import configPromise from '../../payload.config';
import React from 'react';

// Helper to extract raw text from Payload's Lexical JSON editor state
function extractLexicalText(node: any): string {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (node.text) return node.text;
  
  let text = '';
  if (node.children && Array.isArray(node.children)) {
    text = node.children.map((child: any) => extractLexicalText(child)).join('');
  }
  
  if (node.type === 'paragraph') {
    text += '\n'; // Add line breaks for paragraphs
  }
  
  if (node.root) {
    return extractLexicalText(node.root);
  }
  
  return text;
}

export const metadata: Metadata = {
  title: 'Ellason Art | Coastal-Inspired Art for Elevated Spaces',
  description: 'Original coastal fine art, textured paintings, and custom commissions.',
};

// ========================
// BLOCK COMPONENTS
// ========================

const HeroSection = (props: any) => {
  const bgImgDoc = props.backgroundImage;
  const bgImage = typeof bgImgDoc === 'string' ? bgImgDoc : (bgImgDoc?.url || '/images/Hero 1.png');
  const kicker = props.kicker || 'Ellason Fine Art';
  const dynamicHeroText = extractLexicalText(props.headline).trim() || 'Original Coastal-Inspired Art for Elevated Spaces';
  const btn1Text = props.primaryButtonText || 'Shop Collection';
  const btn1Link = props.primaryButtonLink || '/shop';
  const btn2Text = props.secondaryButtonText || 'Request a Commission';
  const btn2Link = props.secondaryButtonLink || '/commissions';

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-sand-light flex items-center justify-center overflow-hidden">
      {/* Absolute Background Image */}
      <Image
        src={bgImage}
        alt="Hero Background"
        fill
        className="object-cover object-center w-full h-full opacity-60"
        priority
      />
      <div 
        className="z-10 text-center px-6 py-24 w-full max-w-5xl mx-auto flex flex-col items-center"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.4) 0%, transparent 65%)' }}
      >
        <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-cream-50 mb-6 font-semibold drop-shadow-md">
          {kicker}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white leading-[1.25] tracking-wide mb-8 max-w-4xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_40%)] whitespace-pre-line">
          {dynamicHeroText}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <Link href={btn1Link} className="px-8 py-3.5 bg-cream-50 text-neutral-900 text-xs tracking-widest uppercase hover:bg-white transition-colors shadow-lg">
            {btn1Text}
          </Link>
          <Link href={btn2Link} className="px-8 py-3.5 border border-cream-50/60 text-cream-50 backdrop-blur-md text-xs tracking-widest uppercase hover:bg-cream-50/30 transition-all shadow-lg">
            {btn2Text}
          </Link>
        </div>
      </div>
    </section>
  );
};

const BrandStatementSection = (props: any) => {
  const quote = props.quote || '"Art that breathes life into a room—drawing from the raw, undulating textures of the coast and the serenity of natural light."';
  const desc = props.description || 'Every piece is created to bridge the gap between organic coastal beauty and modern, refined interiors. Utilizing specialized texturing techniques and a muted, airy palette, we craft statement pieces that anchor your space.';
  
  return (
    <section className="bg-cream-100 py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-snug text-neutral-800 mb-8 px-4 font-light">
          {quote}
        </h2>
        <p className="text-neutral-500 font-light tracking-wide text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {desc}
        </p>
      </div>
    </section>
  );
};

const FeaturedWorksSection = (props: any) => {
  const kicker = props.kicker || 'Curated Collection';
  const link = props.viewAllLink || '/shop';
  const works = props.works && props.works.length > 0 ? props.works : [
    { id: '1', title: 'Tideland Study I', size: '36" x 48"', imageSrc: '/images/art 1.jpg' },
    { id: '2', title: 'Oasis in Sand', size: '48" x 60"', imageSrc: '/images/art 2.jpg' },
    { id: '3', title: 'Whispering Dune', size: '30" x 40"', imageSrc: '/images/art 3.jpg' },
  ];

  return (
    <section className="bg-background py-24 px-6 lg:px-12">
      <div className="max-w-[1536px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-cream-300 pb-6">
          <h2 className="text-xs tracking-[0.2em] uppercase text-neutral-500 mb-4 md:mb-0">
            {kicker}
          </h2>
          <Link href={link} className="text-[10px] tracking-widest uppercase text-neutral-800 hover:text-sand-dark transition-colors font-semibold">
            View All Works &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {works.map((work: any, idx: number) => {
            const safeTitle = work.title || `Work ${idx}`;
            const urlPath = `/shop/${safeTitle.toLowerCase().replace(/ /g, '-')}`;
            const imgDoc = work.imageSrc;
            const imgSrc = typeof imgDoc === 'string' ? imgDoc : (imgDoc?.url || '/images/default.jpg');
            return (
              <Link href={urlPath} key={work.id || idx} className="group block cursor-pointer">
                <div className="relative aspect-[4/5] bg-neutral-100 mb-6 overflow-hidden">
                  <Image 
                    src={imgSrc} 
                    alt={safeTitle} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-[2000ms] group-hover:scale-105 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif font-light text-neutral-800 mb-2">{safeTitle}</h3>
                <p className="text-neutral-400 text-[10px] tracking-[0.2em] uppercase">{work.size}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};

const AboutPreviewSection = (props: any) => {
  const kicker = props.kicker || 'The Artist';
  const headline = props.headline || 'Crafting Serenity \n through Texture';
  const desc = props.description || 'Based on the coastline, the studio is a sanctuary of light and raw materials. Every stroke and application of texture is an exploration of the elements—earth, wind, and water—translated into timeless statement pieces for your home.';
  const btnText = props.buttonText || 'Read the Full Story';
  const btnLink = props.buttonLink || '/about';
  const imgDoc = props.imageSrc;
  const imgSrc = typeof imgDoc === 'string' ? imgDoc : (imgDoc?.url || '/images/ellason profile 1.jpg');

  return (
    <section className="bg-cream-50 flex flex-col-reverse lg:flex-row overflow-hidden border-t border-cream-200">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-16 lg:p-24 xl:p-32 bg-sand-light/10">
        <div className="max-w-lg">
          <h2 className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 mb-8 border-b inline-block border-neutral-300 pb-2">
            {kicker}
          </h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-light mb-8 text-neutral-800 leading-tight whitespace-pre-line">
            {headline}
          </h3>
          <p className="text-neutral-600 mb-12 leading-relaxed font-light">
            {desc}
          </p>
            <Link href={btnLink} className="inline-block border border-neutral-800 px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:bg-neutral-800 hover:text-cream-50 transition-colors">
            {btnText}
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[500px] xl:min-h-[700px]">
        <Image src={imgSrc} alt={kicker} fill className="object-cover object-center" />
      </div>
    </section>
  );
};

const CommissionsSection = (props: any) => {
  const headline = props.headline || 'Bespoke Commissions';
  const desc = props.description || 'Looking for a specific dimension or a palette tailored exclusively to your space? We collaborate closely with clients and interior designers to create custom artwork that perfectly anchors a room.';
  const btnText = props.buttonText || 'Begin the Process';
  const btnLink = props.buttonLink || '/commissions';

  return (
    <section className="bg-brandYellow-light/30 py-32 px-6 text-center border-y border-brandYellow/20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-serif font-light text-neutral-800 mb-8">
          {headline}
        </h2>
        <p className="text-lg text-neutral-600 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
          {desc}
        </p>
        <Link href={btnLink} className="px-10 py-4 bg-brandYellow hover:bg-brandYellow-dark text-white text-xs tracking-[0.15em] uppercase transition-all shadow-sm">
          {btnText}
        </Link>
      </div>
    </section>
  );
};

const TrustElementsSection = (props: any) => {
  const elements = props.elements && props.elements.length > 0 ? props.elements : [
    { id: '1', iconLetter: 'O', title: 'Original Designs', description: 'One-of-a-kind artworks, authenticated and signed.' },
    { id: '2', iconLetter: 'C', title: 'Custom Commissions', description: 'Tailored to fit your unique vision and dimensions.' },
    { id: '3', iconLetter: 'L', title: 'Large-Scale Interiors', description: 'Statement pieces crafted for luxury spaces and designers.' },
  ];

  return (
    <section className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-cream-300">
        {elements.map((el: any) => (
          <div key={el.id || el.title} className="pt-8 md:pt-0 pb-8 md:pb-0 px-6 flex flex-col items-center">
            <div className="w-12 h-12 mb-6 text-mutedBlue-dark flex items-center justify-center border border-mutedBlue rounded-full shadow-sm">
              <span className="font-serif italic text-xl opacity-80">{el.iconLetter ? el.iconLetter[0] : 'O'}</span>
            </div>
            <h4 className="text-[11px] tracking-widest uppercase text-neutral-800 mb-3 font-medium">{el.title}</h4>
            <p className="text-sm text-neutral-500 font-light max-w-[240px]">{el.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ========================
// PAGE COMPONENT
// ========================

export const dynamic = 'force-dynamic';

export default async function Home() {
  const payload = await getPayload({ config: configPromise });
  
  const pagesQuery = await payload.find({
    collection: 'pages',
    where: {
      title: { equals: 'Homepage' },
    },
  });

  const homepage = pagesQuery.docs[0];
  const layoutArray = homepage?.layout || [];

  return (
    <div className="flex flex-col min-h-screen">
      {layoutArray.length === 0 ? (
        // Render default fallback blocks if nothing is set up in CMS yet
        <>
          <HeroSection />
          <BrandStatementSection />
          <FeaturedWorksSection />
          <AboutPreviewSection />
          <CommissionsSection />
          <TrustElementsSection />
        </>
      ) : (
        layoutArray.map((block: any, index: number) => {
          switch (block.blockType) {
            case 'heroBlock':
              return <HeroSection key={block.id || index} {...block} />;
            case 'brandStatementBlock':
              return <BrandStatementSection key={block.id || index} {...block} />;
            case 'featuredWorksBlock':
              return <FeaturedWorksSection key={block.id || index} {...block} />;
            case 'aboutPreviewBlock':
              return <AboutPreviewSection key={block.id || index} {...block} />;
            case 'commissionsBlock':
              return <CommissionsSection key={block.id || index} {...block} />;
            case 'trustElementsBlock':
              return <TrustElementsSection key={block.id || index} {...block} />;
            default:
              return null;
          }
        })
      )}
    </div>
  );
}
