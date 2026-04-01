import Image from 'next/image';
import { getPayload } from 'payload';
import configPromise from '../../../payload.config';
import React from 'react';
import InquiryForm from './InquiryForm';

const ServiceHeroSection = (props: any) => {
  const kicker = props.kicker || 'Bespoke Services';
  const headline = props.headline || 'Commission an\n Original Piece';
  const desc = props.description || 'Collaborate closely to bring your unique vision to life. Each commission is an intimate journey, tailored specifically to the dimensions, palette, and emotional resonance of your space.';
  const priceNote = props.priceNote || 'Custom works begin at $1,500';
  const imgDoc = props.imageSrc;
  const imgSrc = typeof imgDoc === 'string' ? imgDoc : (imgDoc?.url || '/images/Hero 1.png');

  return (
    <section className="flex flex-col lg:flex-row min-h-[70vh] border-b border-cream-200">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-24 order-2 lg:order-1 bg-cream-50">
        <h2 className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-neutral-600 mb-6 font-semibold">
          {kicker}
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1] mb-8 tracking-tight whitespace-pre-line">
          {headline}
        </h1>
        <p className="text-lg text-neutral-800 font-light leading-relaxed mb-10 max-w-lg">
          {desc}
        </p>
        <div>
          <span className="text-xs tracking-widest uppercase text-brandYellow font-bold border-b border-brandYellow pb-1">
            {priceNote}
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full order-1 lg:order-2 bg-neutral-200">
        <Image src={imgSrc} alt={kicker} fill className="object-cover object-center" priority />
      </div>
    </section>
  );
};

const ProcessTimelineSection = (props: any) => {
  const kicker = props.kicker || 'The Process';
  const steps = props.steps && props.steps.length > 0 ? props.steps : [
    { num: '01', title: 'Inquiry', desc: 'Reach out with your vision, dimensions, and preferred color palette.' },
    { num: '02', title: 'Concept', desc: 'We collaborate on sketches and tone to finalize the direction.' },
    { num: '03', title: '50% Deposit', desc: 'A deposit secures your spot in the studio queue.' },
    { num: '04', title: 'Creation', desc: 'The painting begins. I will share updates as texture and layers emerge.' },
    { num: '05', title: 'Delivery', desc: 'The final piece is varnished, framed (if desired), and safely shipped.' },
  ];

  return (
    <section className="bg-sand-light/10 py-24 px-6 border-b border-cream-200">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xs tracking-[0.2em] uppercase text-neutral-700 text-center mb-16 font-semibold">{kicker}</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12">
          {steps.map((step: any, idx: number) => (
            <div key={idx} className="flex flex-col relative group">
              <div className="text-4xl font-serif text-brandYellow mb-4 transition-colors font-medium">
                {step.num}
              </div>
              <div className="hidden md:block absolute top-6 left-12 right-0 h-[1px] bg-brandYellow/30 w-[80%] group-last:hidden"></div>
              <h4 className="text-[11px] tracking-widest uppercase text-neutral-900 mb-3 font-bold">{step.title}</h4>
              <p className="text-sm font-light text-neutral-800 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PastCommissionsGallerySection = (props: any) => {
  const kicker = props.kicker || 'Past Commissions';
  const images = props.images && props.images.length >= 4 ? props.images : [
    { src: 'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=800&auto=format&fit=crop', alt: 'Texture' },
    { src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop', alt: 'Landscape' },
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', alt: 'Abstract' },
    { src: '/images/ellason 3 wide Upscaled.jpg', alt: 'Interior' }
  ];

  return (
    <section className="bg-cream-100 py-32 px-6 border-t border-cream-200">
      <div className="max-w-[1536px] mx-auto">
        <h3 className="text-xs tracking-[0.2em] uppercase text-neutral-700 text-center mb-16 font-bold">{kicker}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {images[0] && (() => {
            const doc = images[0].src;
            const srcUrl = typeof doc === 'string' ? doc : (doc?.url || '');
            return srcUrl ? (
              <div className="relative w-full h-full lg:row-span-2 bg-neutral-200 overflow-hidden group">
                <Image src={srcUrl} alt={images[0].alt || 'Commission'} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center transition-transform duration-[3000ms] group-hover:scale-105" />
              </div>
            ) : null;
          })()}
          {images[1] && (() => {
            const doc = images[1].src;
            const srcUrl = typeof doc === 'string' ? doc : (doc?.url || '');
            return srcUrl ? (
              <div className="relative w-full h-full bg-neutral-200 overflow-hidden group">
                <Image src={srcUrl} alt={images[1].alt || 'Commission'} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center transition-transform duration-[3000ms] group-hover:scale-105" />
              </div>
            ) : null;
          })()}
          {images[2] && (() => {
            const doc = images[2].src;
            const srcUrl = typeof doc === 'string' ? doc : (doc?.url || '');
            return srcUrl ? (
              <div className="relative w-full h-full bg-neutral-200 overflow-hidden group">
                <Image src={srcUrl} alt={images[2].alt || 'Commission'} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center transition-transform duration-[3000ms] group-hover:scale-105" />
              </div>
            ) : null;
          })()}
          {images[3] && (() => {
            const doc = images[3].src;
            const srcUrl = typeof doc === 'string' ? doc : (doc?.url || '');
            return srcUrl ? (
              <div className="relative w-full h-full md:col-span-2 lg:col-span-2 bg-neutral-200 overflow-hidden group hidden md:block">
                <Image src={srcUrl} alt={images[3].alt || 'Commission'} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-center transition-transform duration-[3000ms] group-hover:scale-105" />
              </div>
            ) : null;
          })()}
        </div>
      </div>
    </section>
  );
}

export const dynamic = 'force-dynamic';

export default async function CommissionsPage() {
  const payload = await getPayload({ config: configPromise });
  const pagesQuery = await payload.find({ collection: 'pages', where: { title: { equals: 'Commissions' } } });
  const pageDoc = pagesQuery.docs[0];
  const layoutArray = pageDoc?.layout || [];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {layoutArray.length === 0 ? (
        <>
          <ServiceHeroSection />
          <ProcessTimelineSection />
          <InquiryForm />
          <PastCommissionsGallerySection />
        </>
      ) : (
        layoutArray.map((block: any, index: number) => {
          switch (block.blockType) {
            case 'serviceHeroBlock': return <ServiceHeroSection key={block.id || index} {...block} />;
            case 'processTimelineBlock': return <ProcessTimelineSection key={block.id || index} {...block} />;
            case 'inquiryFormBlock': return <InquiryForm key={block.id || index} {...block} />;
            case 'pastCommissionsGalleryBlock': return <PastCommissionsGallerySection key={block.id || index} {...block} />;
            default: return null;
          }
        })
      )}
    </div>
  );
}
