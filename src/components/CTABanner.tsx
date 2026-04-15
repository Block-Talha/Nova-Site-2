"use client";

import { useState } from "react";
import { DemoContactPopup } from "@/components/DemoContactPopup";

export function CTABanner() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  return (
    <section id="contact" className="section-space relative overflow-hidden">
      <div className="content-shell">
        <div className="group relative z-10 mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary-fixed p-8 text-center sm:p-12 lg:p-20">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/20 blur-3xl transition-all duration-700 group-hover:bg-white/30" />
          <h2 className="mb-6 font-headline text-3xl font-black leading-tight text-on-primary-fixed sm:text-4xl lg:mb-8 lg:text-6xl">
            Ready to boost your clinic or salon revenue?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base font-medium text-on-primary-fixed/80 sm:text-lg">
            Join 16K+ healthcare and beauty businesses that have transformed
            their digital presence with Nova Sync.
          </p>
          <button
            type="button"
            onClick={() => setIsDemoPopupOpen(true)}
            className="inline-flex w-full justify-center rounded-2xl bg-on-primary-fixed px-10 py-4 text-base font-black text-primary-fixed transition-all hover:shadow-2xl active:scale-95 sm:w-auto sm:px-12 sm:py-5 sm:text-lg"
          >
            Contact Us
          </button>
        </div>
        <DemoContactPopup
          isOpen={isDemoPopupOpen}
          onClose={() => setIsDemoPopupOpen(false)}
        />
      </div>
    </section>
  );
}
