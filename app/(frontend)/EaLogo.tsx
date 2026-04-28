'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * EA secondary logo with graceful fallback to text monogram.
 * Isolated as a Client Component so the onError handler stays
 * out of the Server Component layout.
 */
export default function EaLogo() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="flex items-center gap-4">
      {!imgFailed && (
        <Image
          src="/images/Logo-ea2-white.png"
          alt="Ellason Art Secondary Logo"
          width={80}
          height={80}
          className="object-contain opacity-80"
          onError={() => setImgFailed(true)}
        />
      )}
      {/* Text monogram — always visible when image fails */}
      <span
        className={`text-3xl font-serif italic tracking-tight text-butter-yellow select-none${
          imgFailed ? '' : ' hidden'
        }`}
      >
        EA
      </span>
    </div>
  );
}
