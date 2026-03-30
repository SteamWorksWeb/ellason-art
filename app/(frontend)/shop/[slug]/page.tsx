import Image from 'next/image';
import { Metadata } from 'next';
import EcommerceEmbed from './EcommerceEmbed';

export const metadata: Metadata = {
  title: 'High-End Artworks | Shop',
  description: 'Exclusive gallery and purchase options for fine art pieces.',
};

export default function ArtworkDynamicPage({ params }: { params: { slug: string } }) {
  // Static mock content for frontend development and editorial layout demonstration
  const artwork = {
    title: "Nocturne in Gold",
    artist: "Atelier Ellason",
    story: "A masterful exploration of light and texture, this piece was born from hours of observing twilight transition into the deep night. The interplay of raw, textured gradients with serene emptiness evokes a sense of both grandiosity and intimate quiet. It invites the beholder to look closer, discovering new nuances with every shift in ambient light.",
    images: [
      { src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1500&auto=format&fit=crop", alt: "Main Piece", id: "main" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1500&auto=format&fit=crop", alt: "Room Mockup", id: "room" },
      { src: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=1500&auto=format&fit=crop", alt: "Close-up Texture", id: "texture" },
      { src: "https://images.unsplash.com/photo-1582201942988-13e60cb38cb5?q=80&w=1500&auto=format&fit=crop", alt: "Size Comparison Graphic", id: "size" }
    ],
    details: [
      { label: "Medium", value: "Mixed media, archival pigment ink on cotton rag canvas" },
      { label: "Dimensions", value: "36\" x 48\" (unframed)" },
      { label: "Authentication", value: "Includes a Certificate of Authenticity signed by the artist" },
      { label: "Shipping", value: "Complimentary global white-glove shipping via Gelato fulfillment" },
      { label: "Frame", value: "Optional hand-finished exhibition float frame" }
    ]
  };

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-neutral-900 font-sans antialiased selection:bg-neutral-200 selection:text-neutral-900">
      <article className="max-w-[1536px] mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-24">
        
        {/* Discreetest of Breadcrumbs */}
        <nav className="mb-16">
          <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-400">
            <a href="/shop" className="hover:text-black transition-colors duration-300">Shop Gallery</a>
            <span className="mx-4 text-neutral-300">/</span>
            <span className="text-neutral-900 font-medium">{artwork.title}</span>
          </p>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-28 items-start">
          
          {/* Left Column: Sticky Image Gallery */}
          <section className="lg:col-span-7 space-y-10 lg:sticky lg:top-16">
            {artwork.images.map((img, idx) => (
              <figure 
                key={img.id} 
                className={`relative w-full bg-neutral-100 overflow-hidden ${
                  idx === 0 ? 'aspect-[4/5]' : 'aspect-square md:aspect-[4/3] lg:aspect-[4/5]'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={idx === 0}
                  className="object-cover transition-transform duration-[2000ms] hover:scale-105 ease-out"
                />
              </figure>
            ))}
          </section>

          {/* Right Column: Product Details, Embed, and Editorial Content */}
          <section className="lg:col-span-5 flex flex-col pt-8 lg:pt-0">
            
            {/* Elegant Serif Title */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-light leading-[1.1] tracking-tight mb-8">
                {artwork.title}
              </h1>
              <p className="text-sm uppercase tracking-[0.15em] text-neutral-500">
                {artwork.artist}
              </p>
            </header>

            {/* Dedicated Gelato Ecommerce Widget (Client Component) */}
            <EcommerceEmbed />

            {/* Elevated Copy: The Story Behind the Piece */}
            <div className="mt-12 lg:mt-20">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-8 border-b border-neutral-200 pb-4">
                The Story Behind the Piece
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-serif font-light text-neutral-700">
                {artwork.story}
              </p>
            </div>

            {/* Details & Materials: Clean Minimal List */}
            <div className="mt-20 lg:mt-24">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-8 border-b border-neutral-200 pb-4">
                Specifications & Provenance
              </h2>
              
              <ul className="flex flex-col space-y-6">
                {artwork.details.map((detail, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row sm:justify-between text-sm group">
                    <span className="text-neutral-400 mb-1 sm:mb-0 transition-colors group-hover:text-neutral-500">
                      {detail.label}
                    </span>
                    <span className="font-medium text-neutral-900 sm:text-right sm:max-w-[65%] leading-snug">
                      {detail.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </section>

        </div>
      </article>
    </main>
  );
}
