import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const footerLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/20 bg-black px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4">
            <BrandLogo compact />
          </div>
          <p className="text-center text-sm text-zinc-500 md:text-left">
            © 2024 Nova Sync Marketing Agency. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
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
