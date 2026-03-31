import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/site-content";

export function Team() {
  return (
    <section id="team" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="mb-4 font-headline text-4xl font-extrabold text-white lg:text-5xl">
              Professional Creative Team
            </h2>
            <p className="text-on-surface-variant">
              The minds behind the magic. Our team blends technical mastery with
              artistic vision.
            </p>
          </div>
          <Link
            href="#contact"
            className="mt-8 rounded-xl border border-outline-variant/30 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black md:mt-0"
          >
            Join the Elite
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className={`group cursor-pointer ${
                member.staggered ? "mt-12 md:mt-0" : ""
              }`}
            >
              <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-primary-fixed/20 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-xs font-black uppercase tracking-widest text-on-primary-fixed">
                    {member.overlayRole}
                  </span>
                </div>
              </div>
              <h4 className="font-headline text-base font-bold text-white">
                {member.name}
              </h4>
              <p className="text-xs text-on-surface-variant">{member.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
