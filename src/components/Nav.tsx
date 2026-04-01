"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks } from "@/lib/site-content";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
      <div className="relative mx-auto w-full max-w-7xl rounded-2xl bg-zinc-900/75 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <BrandLogo />

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={
                  index === 0
                    ? "border-b-2 border-primary-fixed pb-1 font-headline font-bold tracking-tight text-white"
                    : "font-headline tracking-tight text-zinc-300 transition-colors hover:text-white"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="hidden rounded-xl bg-primary-container px-5 py-2.5 font-headline text-sm font-bold text-on-primary-container transition-all duration-300 hover:shadow-[0_0_20px_rgba(202,253,0,0.3)] active:scale-95 sm:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-outline-variant/40 px-3 py-2 text-white transition-colors hover:border-primary-fixed/60 hover:text-primary-fixed sm:hidden"
          >
            <span className="font-headline text-xs font-bold uppercase tracking-wide">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-200 sm:hidden ${
            isMenuOpen ? "mt-3 max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-2 rounded-xl border border-outline-variant/30 bg-surface-container-high p-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-lg px-2 py-2 text-center font-headline text-xs font-semibold tracking-tight transition-colors ${
                  index === 0
                    ? "bg-primary-container text-on-primary-container"
                    : "text-zinc-200 hover:bg-surface-container-highest"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
