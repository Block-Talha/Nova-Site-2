import Image from "next/image";
import { MaterialIcon } from "@/components/MaterialIcon";
import { testimonials } from "@/lib/site-content";

export function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center font-headline text-4xl font-extrabold text-white lg:text-5xl">
          Feedback By Our Client
        </h2>
        <p className="mb-16 text-center text-on-surface-variant">
          Success stories from salons that transformed their bookings with Nova
          Sync.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={
                testimonial.featured === true
                  ? "flex flex-col justify-between rounded-xl border-l-4 border-primary-fixed bg-surface-container-high p-8"
                  : "flex flex-col justify-between rounded-xl border border-outline-variant/10 bg-surface-container p-8"
              }
            >
              <div>
                <div className="mb-6 text-primary-fixed opacity-50">
                  <MaterialIcon name="format_quote" className="text-4xl" />
                </div>
                <p className="mb-8 text-lg italic leading-relaxed text-on-surface">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-primary-fixed object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed/70">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
