"use client";

import Link from "next/link";
import { useState } from "react";
import { DemoContactPopup } from "@/components/DemoContactPopup";
import { navLinks } from "@/lib/site-content";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 shadow-[0_0_30px_rgba(202,253,0,0.1)] backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-8">
          <Link
            href="/"
            className="text-2xl font-black italic tracking-tighter text-white"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            Nova Sync
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  index === 0
                    ? "border-b-2 border-lime-400 pb-1 font-bold text-lime-400 transition-all duration-300 hover:text-lime-400 active:scale-95"
                    : "font-medium text-zinc-400 transition-all duration-300 hover:text-lime-400 active:scale-95"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsDemoPopupOpen(true)}
            className="hidden rounded-DEFAULT bg-primary-container px-6 py-2 text-sm font-bold uppercase tracking-wider text-on-primary-container transition-all duration-300 hover:bg-primary-fixed hover:shadow-[0_0_15px_rgba(195,244,0,0.5)] active:scale-95 md:block"
          >
            Get Started
          </button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant/40 text-white transition-colors hover:border-primary-fixed hover:text-primary-fixed md:hidden"
          >
            <span className="material-symbols-outlined text-xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-200 md:hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 px-6 pb-4 pt-2">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`py-2 ${
                  index === 0
                    ? "font-bold text-lime-400"
                    : "text-zinc-400 hover:text-lime-400"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="py-2 text-zinc-400 hover:text-lime-400"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <DemoContactPopup
        isOpen={isDemoPopupOpen}
        onClose={() => setIsDemoPopupOpen(false)}
      />
    </>
  );
}
