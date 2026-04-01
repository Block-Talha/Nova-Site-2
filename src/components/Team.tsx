import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/site-content";

export function Team() {
  return (
    <section id="team" className="section-space bg-surface">
      <div className="content-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="mb-4 font-headline text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Professional Creative Team
            </h2>
            <p className="text-sm text-on-surface-variant sm:text-base">
              The minds behind the magic. Our team blends technical mastery with
              artistic vision.
            </p>
          </div>
          <Link
            href="#contact"
            className="w-full rounded-xl border border-outline-variant/30 px-6 py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black sm:w-auto"
          >
            Join the Elite
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className={`group cursor-pointer ${
                member.staggered ? "xl:mt-10" : ""
              }`}
            >
              <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-primary-fixed/20 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-xs font-black uppercase tracking-widest text-on-primary-fixed">
                    {member.overlayRole}
                  </span>
                </div>
              </div>
              <h4 className="font-headline text-lg font-bold text-white">
                {member.name}
              </h4>
              <p className="text-sm text-on-surface-variant">{member.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
