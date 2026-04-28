import { Metadata } from "next";
import ShopifyEmbed from "@/components/ShopifyEmbed";

export const metadata: Metadata = {
  title: "Shop Collection | Ellason Art",
  description:
    "Browse and purchase original coastal fine art paintings by Ellason. Each piece is one-of-a-kind and ready to ship.",
};

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-cream-100 py-20 px-6 border-b border-cream-300">
        <div className="max-w-[1536px] mx-auto">
          <p className="text-[10px] tracking-widest uppercase text-neutral-400 mb-4">
            Ellason Fine Art
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-neutral-800 leading-tight">
            Shop Collection
          </h1>
        </div>
      </section>

      {/* Shopify Collection Embed */}
      <section className="bg-background flex-grow py-16 px-6 lg:px-12">
        <div className="max-w-[1536px] mx-auto">
          <ShopifyEmbed />
        </div>
      </section>
    </div>
  );
}
