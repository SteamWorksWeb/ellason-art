'use client';

import Script from 'next/script';

export default function EcommerceEmbed() {
  return (
    <div className="ecommerce-embed-wrapper w-full mt-10 mb-16 relative">
      <div 
        id="ecommerce-embed-container" 
        className="min-h-[450px] w-full border border-neutral-200 bg-neutral-50/50 flex flex-col items-center justify-center p-8 text-center"
      >
        {/* Placeholder styling to show where external widget will mount */}
        <span className="text-xs tracking-[0.2em] text-neutral-400 uppercase mb-2">
          Purchasing Options
        </span>
        <span className="text-sm text-neutral-500 font-light">
          Widget loading...
        </span>
      </div>

      <Script
        src="https://example-ecommerce-widget-script.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Additional initialization logic for the widget if needed
          console.log('Third-party ecommerce widget loaded.');
        }}
      />
    </div>
  );
}
