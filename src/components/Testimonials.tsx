import Image from "next/image";
import { testimonials } from "@/lib/site-content";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-space overflow-hidden">
      <div className="content-shell">
        <h2 className="mb-4 text-center font-headline text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Feedback By Our Clients
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-on-surface-variant sm:mb-16 sm:text-base">
          Success stories from clinics and salons that transformed their
          bookings with Nova Sync.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className={
                testimonial.featured === true
                  ? "flex h-full flex-col justify-between rounded-xl border-l-4 border-primary-fixed bg-surface-container-high p-6 sm:p-8"
                  : "flex h-full flex-col justify-between rounded-xl border border-outline-variant/10 bg-surface-container p-6 sm:p-8"
              }
            >
              <div>
                <p className="mb-8 text-base italic leading-relaxed text-on-surface sm:text-lg">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  width={48}
                  height={48}
                  className="h-11 w-11 rounded-full border-2 border-primary-fixed object-cover sm:h-12 sm:w-12"
                />
                <div>
                  <p className="text-sm font-bold text-white sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary-fixed/70">
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
