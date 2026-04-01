import Image from 'next/image';
import Link from 'next/link';
import { getPayload } from 'payload';
import configPromise from '../../../payload.config';
import React from 'react';

// Extract text helper
function extractLexicalText(node: any): string {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (node.text) return node.text;
  let text = '';
  if (node.children && Array.isArray(node.children)) {
    text = node.children.map((child: any) => extractLexicalText(child)).join('');
  }
  if (node.type === 'paragraph') text += '\n';
  if (node.root) return extractLexicalText(node.root);
  return text;
}

const BioHeroSection = (props: any) => {
  const kicker = props.kicker || 'About the Artist';
  const headline = props.headline ? extractLexicalText(props.headline).trim() : 'The Artist Behind \n the Canvas';
  const desc = props.description || 'Drawing profound inspiration from the unyielding beauty of the coastline, my work is a study in texture, serene light, and organic form. I believe that an original piece of art should do more than fill an empty wall—it should anchor a room, elevate its essence, and provide a moment of daily quietude.';
  const imgDoc = props.imageSrc;
  const imgSrc = typeof imgDoc === 'string' ? imgDoc : (imgDoc?.url || '/images/ellason profile 1.jpg');

  return (
    <section className="flex flex-col lg:flex-row min-h-[85vh] border-b border-cream-200">
      <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full bg-neutral-200 order-1 lg:order-1">
        <Image src={imgSrc} alt={kicker} fill className="object-cover object-center grayscale-[20%]" priority />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-24 bg-cream-50 order-2 lg:order-2">
        <h2 className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-neutral-600 mb-6 font-semibold">
          {kicker}
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1] mb-8 tracking-tight whitespace-pre-line">
          {headline}
        </h1>
        <p className="text-lg text-neutral-800 font-light leading-relaxed max-w-lg mb-10">
          {desc}
        </p>
        <div className="w-16 border-b-[1.5px] border-brandYellow"></div>
      </div>
    </section>
  );
};

const StoryProseSection = (props: any) => {
  const sections = props.sections && props.sections.length > 0 ? props.sections : [
    { title: 'Artistic Style & Inspiration', paragraphs: [{ text: 'Every stroke and layer on the canvas is an homage to the elemental world—the salt air, the undulating tides, and the soft, diffused light of twilight. My palette relies heavily on warm creams, deep sands, and muted blues to reflect the world outside my studio window.' }, { text: 'Using specialized trowels, raw pigments, and thick impasto mediums, I prioritize physical texture as much as color. These subtle ridges and valleys interact with the shifting natural light in your home, breathing a quiet, evolving life into the painting throughout the day.' }] },
    { title: 'The Mission', paragraphs: [{ text: 'The foundation of Ellason Art is rooted in the belief that luxury should feel deeply personal and grounded. I aim to create heirlooms—bespoke pieces of fine art designed specifically to compliment high-end interiors and modern spaces.' }, { text: 'Whether you are selecting a piece from a curated collection or collaborating with me on a deeply personal commission, my mission is to seamlessly connect organic coastal serenity with your everyday environment.' }] }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <article className="max-w-3xl mx-auto flex flex-col space-y-24">
        {sections.map((sec: any, idx: number) => (
          <div key={idx}>
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-neutral-900 mb-8 pb-4 inline-block">
              {sec.title}
            </h2>
            <div className="space-y-8 text-neutral-700 font-light leading-loose text-lg">
              {sec.paragraphs.map((p: any, i: number) => (
                <p key={i}>{p.text}</p>
              ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

const StudioGallerySection = (props: any) => {
  const kicker = props.kicker || 'Studio Fragments';
  const img1Doc = props.image1Src;
  const img1 = typeof img1Doc === 'string' ? img1Doc : (img1Doc?.url || '/images/art 1.jpg');
  const img2Doc = props.image2Src;
  const img2 = typeof img2Doc === 'string' ? img2Doc : (img2Doc?.url || '/images/art 2.jpg');

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto w-full mb-32 border-t border-cream-200">
      <h3 className="text-xs tracking-[0.2em] uppercase text-neutral-500 text-center mb-16 pt-16 font-semibold">{kicker}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="relative w-full aspect-square md:aspect-[4/5] bg-neutral-200 overflow-hidden shadow-sm group">
          <Image src={img1} alt="Studio details" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center transition-transform duration-[3000ms] group-hover:scale-105" />
        </div>
        <div className="relative w-full aspect-square md:aspect-[3/4] bg-neutral-200 overflow-hidden shadow-sm md:mt-32 group">
          <Image src={img2} alt="Studio space" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center transition-transform duration-[3000ms] group-hover:scale-105" />
        </div>
      </div>
    </section>
  );
};

const BottomCTASection = (props: any) => {
  const headline = props.headline || 'Bring the Coast into Your Home';
  const desc = props.description || 'Explore the available curated works, or reach out to collaborate on a custom dimension and palette tailored to your unique space.';
  const btn1 = props.primaryButtonText || 'Shop Collection';
  const btn1L = props.primaryButtonLink || '/shop';
  const btn2 = props.secondaryButtonText || 'Start a Commission';
  const btn2L = props.secondaryButtonLink || '/commissions';

  return (
    <section className="bg-sand-light/10 py-32 px-6 text-center border-t border-brandYellow/10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl lg:text-4xl font-serif font-light text-neutral-900 mb-6 tracking-tight">
          {headline}
        </h2>
        <p className="text-lg text-neutral-600 font-light leading-relaxed mb-12 max-w-lg mx-auto">
          {desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href={btn1L} className="w-full sm:w-auto px-10 py-4 bg-brandYellow hover:bg-brandYellow-dark text-white font-semibold text-xs tracking-[0.15em] uppercase transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandYellow">
            {btn1}
          </Link>
          <Link href={btn2L} className="w-full sm:w-auto px-10 py-4 border border-brandYellow text-brandYellow font-bold bg-white/50 hover:bg-brandYellow hover:text-white text-xs tracking-[0.15em] uppercase transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandYellow">
            {btn2}
          </Link>
        </div>
      </div>
    </section>
  );
};

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const payload = await getPayload({ config: configPromise });
  const pagesQuery = await payload.find({ collection: 'pages', where: { title: { equals: 'About' } } });
  const pageDoc = pagesQuery.docs[0];
  const layoutArray = pageDoc?.layout || [];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {layoutArray.length === 0 ? (
        <>
          <BioHeroSection />
          <StoryProseSection />
          <StudioGallerySection />
          <BottomCTASection />
        </>
      ) : (
        layoutArray.map((block: any, index: number) => {
          switch (block.blockType) {
            case 'bioHeroBlock': return <BioHeroSection key={block.id || index} {...block} />;
            case 'storyProseBlock': return <StoryProseSection key={block.id || index} {...block} />;
            case 'studioGalleryBlock': return <StudioGallerySection key={block.id || index} {...block} />;
            case 'bottomCTABlock': return <BottomCTASection key={block.id || index} {...block} />;
            default: return null;
          }
        })
      )}
    </div>
  );
}
