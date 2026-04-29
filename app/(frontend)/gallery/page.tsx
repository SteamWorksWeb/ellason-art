import fs from 'fs';
import path from 'path';
import GalleryLightbox from '@/components/GalleryLightbox';

export const metadata = {
  title: 'Gallery | Ellason Art',
  description: "View the complete collection of Ellason's artwork.",
};

export default async function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  let images: { src: string; alt: string }[] = [];

  try {
    const files = fs.readdirSync(galleryDir);
    images = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp|heic)$/i.test(file))
      .map(file => ({
        src: `/images/gallery/${file}`,
        alt: `Ellason Art Gallery Piece - ${file}`,
      }));
  } catch (error) {
    console.error('Gallery directory not found or empty', error);
  }

  return (
    <div className="bg-[#faf8f5] min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#1f1e1c] mb-4">Gallery</h1>
          <p className="text-[#1f1e1c]/70 uppercase tracking-widest text-sm">A collection of original works</p>
        </div>

        {images.length > 0 ? (
          <GalleryLightbox images={images} />
        ) : (
          <p className="text-center text-[#1f1e1c]/60">Gallery images coming soon.</p>
        )}
      </div>
    </div>
  );
}
