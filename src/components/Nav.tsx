import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks } from "@/lib/site-content";

export function Nav() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-[95%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-2xl bg-zinc-900/60 px-5 py-4 shadow-2xl shadow-black/40 backdrop-blur-xl md:px-8">
      <BrandLogo />
      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link, index) => (
          <Link
            key={link.label}
            href={link.href}
            className={
              index === 0
                ? "border-b-2 border-primary-fixed pb-1 font-headline font-bold tracking-tight text-white"
                : "font-headline tracking-tight text-zinc-400 transition-colors hover:text-white"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href="#contact"
        className="rounded-xl bg-primary-container px-6 py-2.5 font-headline text-sm font-bold text-on-primary-container transition-all duration-300 hover:shadow-[0_0_20px_rgba(202,253,0,0.3)] active:scale-90"
      >
        Get Started
      </Link>
    </nav>
  );
}
