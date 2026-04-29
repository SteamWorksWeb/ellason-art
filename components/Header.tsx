"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/",            label: "Home" },
  { href: "/commissions", label: "Commissions" },
  { href: "/about",       label: "About" },
  { href: "/gallery",     label: "Gallery" },
  { href: "/reviews",     label: "Reviews" },
  { href: "/contact",     label: "Contact" },
  { href: "/shop",        label: "Shop" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#333230] bg-[#1f1e1c] sticky top-0 z-50">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/Logo-ea2-white.png"
            alt="Ellason Art Secondary Logo"
            width={150}
            height={56}
            className="h-10 w-auto md:h-12 lg:h-14 object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.15em] uppercase text-[#faf8f5]/70">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center">
          <Link
            href="/commissions#start"
            className={`hidden sm:inline-block px-7 py-3 ${buttonVariants("outline")}`}
          >
            Start a Commission
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden ml-6 text-[#faf8f5] focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              /* X icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1f1e1c] border-t border-[#333230] z-50 w-full">
          <nav className="flex flex-col px-6 py-6 gap-6 text-sm tracking-[0.15em] uppercase text-[#faf8f5]/70">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/commissions#start"
              className={`mt-2 px-7 py-3 text-center ${buttonVariants("outline")}`}
              onClick={() => setIsOpen(false)}
            >
              Start a Commission
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
