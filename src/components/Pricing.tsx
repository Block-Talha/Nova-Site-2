"use client";

import { useState } from "react";
import { DemoContactPopup } from "@/components/DemoContactPopup";
import { plans, showPricing } from "@/lib/site-content";

export function Pricing() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  return (
    <section id="pricing" className="section-space bg-surface-container-low">
      <div className="content-shell">
        <div className="flex flex-col items-center justify-between gap-8">
          <div className="w-full">
            <h2 className="mb-4 text-center font-headline text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
               Tailored Solution for Thriving Salons
            </h2>
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-on-surface-variant sm:text-base">
            Choosing the plan that meshes your ambition, from local boutiques
            to nationwide chains, we scale with you.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const isFeatured = plan.featured;

            return (
              <article
                key={plan.name}
                className={
                  isFeatured
                    ? "relative rounded-xl border-2 border-primary-fixed bg-surface-container-highest p-6 shadow-[0_20px_40px_rgba(0,0,0,0.6)] sm:p-8 xl:-translate-y-4"
                    : "group relative rounded-xl border border-outline-variant/10 bg-surface p-6 transition-colors hover:border-primary-fixed/30 sm:p-8"
                }
              >
                {isFeatured ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-fixed px-4 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-on-primary-fixed">
                    {plan.badge}
                  </div>
                ) : (
                  <div className="absolute right-4 top-4 rounded bg-white px-2 py-1 text-[10px] font-black text-black">
                    {plan.badge}
                  </div>
                )}


                <h3 className="mb-2 font-headline text-xl font-bold uppercase tracking-widest text-primary-fixed">
                  {plan.name}
                </h3>
                <p
                  className={`mb-8 text-sm ${
                    isFeatured ? "text-on-surface-variant" : "text-on-surface-variant"
                  }`}
                >
                  {plan.subtitle}
                </p>
                {showPricing ? (
                  <p className="mb-8 font-headline text-3xl font-extrabold text-white">
                    {plan.price}
                  </p>
                ) : null}
                <ul className="mb-10 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`text-sm leading-relaxed ${
                        isFeatured ? "text-white" : "text-on-surface-variant"
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                  {plan.footerNote ? (
                    <li className="border-t border-outline-variant/20 pt-4 text-[10px] font-bold uppercase tracking-tight text-primary-fixed/80">
                      {plan.footerNote}
                    </li>
                  ) : null}
                </ul>
                <button
                  type="button"
                  onClick={() => setIsDemoPopupOpen(true)}
                  className={
                    isFeatured
                      ? "block w-full rounded-xl bg-primary-container py-4 text-center text-xs font-bold uppercase tracking-widest text-on-primary-container transition-all hover:shadow-[0_0_20px_rgba(202,253,0,0.4)]"
                      : "block w-full rounded-xl border border-outline-variant/30 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
                  }
                >
                  Book Your Demo
                </button>
              </article>
            );
          })}
        </div>
        <DemoContactPopup
          isOpen={isDemoPopupOpen}
          onClose={() => setIsDemoPopupOpen(false)}
        />
      </div>
    </section>
  );
}
