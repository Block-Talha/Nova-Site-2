import { goalMetrics } from "@/lib/site-content";

export function Goals() {
  return (
    <section id="goals" className="relative z-10 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-black p-12 lg:p-16">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary-fixed/5 to-transparent" />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-headline text-3xl font-extrabold leading-tight text-white lg:text-4xl">
                Industry-Defining <br />
                <span className="text-primary-fixed">Excellence Goals</span>
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-on-surface-variant">
                Our mission is simple: to set the gold standard in salon digital
                transformation by delivering measurable, high-impact results for
                every partner.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="col-span-full mb-4">
                <span className="font-headline text-[10px] font-black uppercase tracking-[0.4em] text-primary-fixed opacity-80">
                  Strategic Milestones
                </span>
              </div>
              {goalMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="group rounded-xl border border-primary-fixed/10 bg-surface-container-low p-6 transition-all duration-500 hover:border-primary-fixed/30"
                >
                  <div className="flex flex-col">
                    <span className="font-headline text-4xl font-black text-white transition-colors group-hover:text-primary-fixed">
                      {metric.value}
                    </span>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                      {metric.label}
                    </span>
                    <p className="mt-4 max-w-[180px] text-[11px] leading-relaxed text-zinc-500">
                      {metric.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
