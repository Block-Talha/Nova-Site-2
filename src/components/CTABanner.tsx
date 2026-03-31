import Link from "next/link";

export function CTABanner() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      <div className="group relative z-10 mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary-fixed p-12 text-center lg:p-20">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/20 blur-3xl transition-all duration-700 group-hover:bg-white/30" />
        <h2 className="mb-8 font-headline text-4xl font-black leading-tight text-on-primary-fixed lg:text-6xl">
          Ready to boost your salon&apos;s revenue?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg font-medium text-on-primary-fixed/80">
          Join 16K+ beauty businesses that have transformed their digital
          presence with Nova Sync.
        </p>
        <Link
          href="#home"
          className="inline-flex rounded-2xl bg-on-primary-fixed px-12 py-5 text-lg font-black text-primary-fixed transition-all hover:shadow-2xl active:scale-95"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
