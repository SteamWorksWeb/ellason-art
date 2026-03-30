import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

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
        <header className="w-full border-b border-cream-300 bg-cream-50/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-[1536px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
            
            {/* Logo area */}
            <Link href="/" className="text-2xl font-serif tracking-widest uppercase text-foreground">
              Ellason
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.15em] uppercase text-neutral-600">
              <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
              <Link href="/commissions" className="hover:text-foreground transition-colors">Commissions</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center">
              <Link 
                href="/commissions#start" 
                className="hidden sm:inline-block px-7 py-3 bg-brandYellow text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-brandYellow-dark hover:shadow-lg transition-all duration-300 rounded-sm"
              >
                Start a Commission
              </Link>
              {/* Mobile menu icon placeholder */}
              <button className="md:hidden ml-6 text-foreground">
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
        <footer className="bg-foreground text-cream-100 py-16 mt-auto">
          <div className="max-w-[1536px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-serif tracking-widest uppercase mb-4">Ellason Art</h3>
              <p className="text-sm font-light tracking-wide text-sand opacity-80 max-w-sm">
                Creating coastal, airy, and elevated fine art that brings the serenity of the shoreline into your space.
              </p>
            </div>
            <div className="flex gap-8 text-xs tracking-[0.2em] uppercase text-sand-dark">
              <Link href="/shop" className="hover:text-cream-50 transition-colors">Shop</Link>
              <Link href="/commissions" className="hover:text-cream-50 transition-colors">Commissions</Link>
              <Link href="/contact" className="hover:text-cream-50 transition-colors">Contact</Link>
              <Link href="/instagram" className="hover:text-cream-50 transition-colors">Instagram</Link>
            </div>
          </div>
          <div className="mt-16 text-center text-[10px] tracking-widest uppercase text-sand-dark opacity-50 border-t border-neutral-800 pt-8">
            &copy; {new Date().getFullYear()} Ellason Art. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
