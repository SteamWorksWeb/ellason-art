import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import EaLogo from './EaLogo';
import { buttonVariants } from '@/components/ui/button';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ellason Art | Coastal Fine Art & Commissions',
  description: 'High-end coastal art and custom painting commissions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        
        {/* Minimal Global Navbar */}
        <header className="w-full border-b border-[#333230] bg-[#1f1e1c] sticky top-0 z-50">
          <div className="max-w-[1536px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            
            {/* Logo area */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo-ea2-white.png"
                alt="Ellason Art Secondary Logo"
                width={150}
                height={56}
                className="h-10 w-auto md:h-12 lg:h-14 object-contain"
                priority
              />
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.15em] uppercase text-[#faf8f5]/70">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/commissions" className="hover:text-white transition-colors">Commissions</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center">
              <Link 
                href="/commissions#start" 
                className={`hidden sm:inline-block px-7 py-3 ${buttonVariants('outline')}`}
              >
                Start a Commission
              </Link>
              {/* Mobile menu icon placeholder */}
              <button className="md:hidden ml-6 text-[#faf8f5]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M4 8h16M4 16h16"></path></svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>

        {/* Minimal Global Footer */}
        <footer className="bg-[#1f1e1c] text-[#faf8f5] py-16 mt-auto">
          <div className="max-w-[1536px] mx-auto px-6 lg:px-12">

            {/* Main footer row */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 text-center md:text-left">
              
              {/* Brand copy */}
              <div>
                <h3 className="text-xl font-serif tracking-widest uppercase mb-4 text-[#faf8f5]">Ellason Art</h3>
                <p className="text-sm font-light tracking-wide text-[#faf8f5]/60 max-w-sm">
                  Creating coastal, airy, and elevated fine art that brings the serenity of the shoreline into your space.
                </p>
              </div>

              {/* Navigation links */}
              <div className="flex gap-8 text-xs tracking-[0.2em] uppercase text-[#faf8f5]/60 md:mt-1">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
                <Link href="/commissions" className="hover:text-white transition-colors">Commissions</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                <Link href="/instagram" className="hover:text-white transition-colors">Instagram</Link>
              </div>

              {/* Contact info */}
              <div className="text-xs tracking-wide text-[#faf8f5]/60 space-y-2 md:text-right">
                <a href="tel:8139955223" className="block hover:text-white transition-colors">(813)-995-5223</a>
                <a href="mailto:info@ellason.art" className="block hover:text-white transition-colors">info@ellason.art</a>
              </div>
            </div>

            {/* Secondary EA branding row */}
            <div className="mt-12 pt-8 border-t border-[#333230] flex flex-col md:flex-row items-center justify-between gap-6">
              {/* EA Logo — Client Component owns the onError handler */}
              <EaLogo />

              <p className="text-[10px] tracking-widest uppercase text-[#faf8f5]/40">
                &copy; {new Date().getFullYear()} Ellason Art. All rights reserved.
              </p>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
