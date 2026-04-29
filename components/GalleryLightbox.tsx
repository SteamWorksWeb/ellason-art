"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageSource {
  src: string;
  alt: string;
}

interface GalleryLightboxProps {
  images: ImageSource[];
}

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [index, setIndex] = useState(-1);

  const slides = images.map((img) => ({ src: img.src }));

  return (
    <>
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="break-inside-avoid relative overflow-hidden rounded-lg cursor-pointer group aspect-[4/5] min-h-[240px]"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Subtle hover overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm font-medium">View Full Size</span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}
