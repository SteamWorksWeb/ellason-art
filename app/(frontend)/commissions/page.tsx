import Image from 'next/image';
import { Metadata } from 'next';
import InquiryForm from './InquiryForm';

export const metadata: Metadata = {
  title: 'Commissions | Ellason Art',
  description: 'Collaborate on a bespoke coastal painting tailored to your space.',
};

// ─── Service Hero ─────────────────────────────────────────────────────────────
function ServiceHeroSection() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[70vh] border-b border-neutral-200">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-24 order-2 lg:order-1 bg-[#faf8f5]">
        <h2 className="text-base md:text-lg tracking-[0.25em] uppercase text-neutral-500 mb-6 font-semibold">Bespoke Services</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1f1e1c] leading-[1.1] mb-8 tracking-tight whitespace-pre-line">
          Commission an{"\n"} Original Piece
        </h1>
        <p className="text-lg text-[#1f1e1c]/80 font-light leading-relaxed mb-10 max-w-lg">
          Collaborate closely to bring your unique vision to life. Each commission is an intimate journey, tailored specifically to the dimensions, palette, and emotional resonance of your space.
        </p>
        <div>
          <span className="text-xs tracking-widest uppercase text-[#1f1e1c] font-bold border-b border-[#1f1e1c]/40 pb-1">
            Custom works begin at $1,500
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full order-1 lg:order-2 bg-neutral-200">
        <Image src="/images/2.jpeg" alt="Commission artwork — coastal painting" fill className="object-cover object-center" priority />
      </div>
    </section>
  );
}

// ─── Process Timeline ─────────────────────────────────────────────────────────
const STEPS = [
  { num: '01', title: 'Inquiry',      desc: 'Reach out with your vision, dimensions, and preferred color palette.' },
  { num: '02', title: 'Concept',      desc: 'We collaborate on sketches and tone to finalize the direction.' },
  { num: '03', title: '50% Deposit',  desc: 'A deposit secures your spot in the studio queue.' },
  { num: '04', title: 'Creation',     desc: 'The painting begins. I will share updates as texture and layers emerge.' },
  { num: '05', title: 'Delivery',     desc: 'The final piece is varnished, framed (if desired), and safely shipped.' },
];

function ProcessTimelineSection() {
  return (
    <section className="bg-[#faf8f5] py-24 px-6 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-base tracking-[0.2em] uppercase text-neutral-500 text-center mb-16 font-semibold">The Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12">
          {STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col relative group">
              <div className="text-4xl font-serif text-[#1f1e1c]/40 mb-4 transition-colors font-medium">{step.num}</div>
              <div className="hidden md:block absolute top-6 left-12 right-0 h-[1px] bg-[#1f1e1c]/10 w-[80%] group-last:hidden"></div>
              <h4 className="text-[11px] tracking-widest uppercase text-[#1f1e1c] mb-3 font-bold">{step.title}</h4>
              <p className="text-sm font-light text-[#1f1e1c]/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Past Commissions Gallery ─────────────────────────────────────────────────
const GALLERY = [
  { src: '/images/10.jpg',  alt: 'Commission — landscape painting', span: 'lg:row-span-2' },
  { src: '/images/1.jpeg',  alt: 'Commission — coastal artwork',    span: '' },
  { src: '/images/3.jpeg',  alt: 'Commission — textured piece',     span: '' },
  { src: '/images/11.jpg',  alt: 'Commission — studio interior',    span: 'md:col-span-2 lg:col-span-2 hidden md:block' },
];

function PastCommissionsGallerySection() {
  return (
    <section className="bg-[#faf8f5] py-32 px-6 border-t border-neutral-200">
      <div className="max-w-[1536px] mx-auto">
        <h3 className="text-base tracking-[0.2em] uppercase text-neutral-700 text-center mb-16 font-bold">Past Commissions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {GALLERY.map((img, i) => (
            <div key={i} className={`relative w-full h-full bg-neutral-200 overflow-hidden group ${img.span}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-[3000ms] group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CommissionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ServiceHeroSection />
      <ProcessTimelineSection />
      <InquiryForm />
      <PastCommissionsGallerySection />
    </div>
  );
}
