import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/MaterialIcon";
import { heroImage } from "@/lib/site-content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 sm:pt-32"
    >
      <div className="bg-hero-radial absolute inset-0 z-0 opacity-90" />
      <div className="content-shell relative z-10 grid min-h-[calc(100svh-5rem)] items-center gap-10 pb-14 sm:pb-16 lg:grid-cols-2 lg:gap-14">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container-highest px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary-fixed sm:px-4 sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary-fixed" />
            Elite Salon Marketing
          </div>
          <h1 className="max-w-3xl font-headline text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-7xl">
            Manage &amp; Grow Your{" "}
            <span className="text-glow text-primary-fixed">Salon Business</span>{" "}
            With Nova Sync
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg lg:text-xl">
            Elevate your brand presence and streamline operations with our
            electric-precision marketing solutions designed for the modern
            grooming industry.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Link
              href="#pricing"
              className="w-full rounded-xl bg-primary-container px-8 py-4 text-center font-headline font-bold uppercase tracking-widest text-on-primary-container transition-all hover:shadow-[0_0_30px_rgba(202,253,0,0.4)] active:scale-95 sm:w-auto"
            >
              Claim Your Strategy
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-700 sm:rounded-3xl lg:rotate-2 lg:hover:rotate-0">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale-[0.2] transition-all duration-1000 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="mt-4 w-full max-w-[260px] rounded-2xl border border-outline-variant/10 bg-surface-container-highest p-5 shadow-2xl sm:max-w-[280px] sm:p-6 md:absolute md:-bottom-6 md:-left-6 md:mt-0">
            <p className="text-sm font-medium italic leading-relaxed text-white">
              &quot;The most precise growth partner we&apos;ve ever collaborated
              with.&quot;
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-fixed/20 text-primary-fixed">
                <MaterialIcon
                  name="star"
                  filled
                  className="text-sm text-primary-fixed"
                />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-tight text-on-surface-variant">
                Director of Aura Grooming
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
