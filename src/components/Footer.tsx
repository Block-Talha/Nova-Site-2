import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const footerLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Instagram" },
  { href: "https://www.linkedin.com/company/novasyncsolution/ ", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/20 bg-black py-10 sm:py-12">
      <div className="content-shell flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4">
            <BrandLogo compact />
          </div>
          <p className="text-center text-sm text-zinc-500 md:text-left">
            Copyright 2026 Nova Sync Marketing Agency. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
