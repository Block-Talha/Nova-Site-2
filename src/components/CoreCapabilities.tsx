"use client";

import { useState } from "react";
import { DemoContactPopup } from "@/components/DemoContactPopup";

export function CoreCapabilities() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  return (
    <>
      <section className="relative mx-auto max-w-container-max border-t border-outline-variant/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-gutter lg:py-section-padding">
        <div className="mb-stack-lg text-center">
          <h2 className="font-headline-lg text-on-surface">
            Core Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body-lg text-on-surface-variant">
            The fundamental pillars of our high-octane growth methodology.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          <div className="group border-l-4 border-primary-fixed bg-surface-dim p-6 pl-5 transition-colors hover:bg-surface-container-lowest sm:p-8 sm:pl-6">
            <span className="mb-4 block font-label-xs tracking-widest text-primary-container">
              01 / FOUNDATION
            </span>
            <h3 className="mb-3 font-title-md text-on-surface transition-colors group-hover:text-primary-container">
              Strategic Milestones
            </h3>
            <p className="font-body-sm text-on-surface-variant">
              We map out aggressive, quantifiable growth targets. No vanity
              metrics, only revenue-driven KPIs plotted on a ruthless timeline.
            </p>
          </div>

          <div className="group border-l-4 border-outline-variant bg-surface-dim p-6 pl-5 transition-all hover:border-primary-fixed hover:bg-surface-container-lowest sm:p-8 sm:pl-6">
            <span className="mb-4 block font-label-xs tracking-widest text-outline-variant transition-colors group-hover:text-primary-container">
              02 / EVOLUTION
            </span>
            <h3 className="mb-3 font-title-md text-on-surface transition-colors group-hover:text-primary-container">
              Digital Transformation
            </h3>
            <p className="font-body-sm text-on-surface-variant">
              Overhauling legacy systems into sleek, automated digital
              ecosystems that convert attention into capital with zero friction.
            </p>
          </div>

          <div className="group border-l-4 border-outline-variant bg-surface-dim p-6 pl-5 transition-all hover:border-primary-fixed hover:bg-surface-container-lowest sm:p-8 sm:pl-6">
            <span className="mb-4 block font-label-xs tracking-widest text-outline-variant transition-colors group-hover:text-primary-container">
              03 / EXECUTION
            </span>
            <h3 className="mb-3 font-title-md text-on-surface transition-colors group-hover:text-primary-container">
              Precision Marketing
            </h3>
            <p className="font-body-sm text-on-surface-variant">
              Deploying laser-targeted campaigns utilizing advanced
              psychographics and AI-driven media buying for maximum market
              penetration.
            </p>
          </div>
        </div>

        <div id="partnership" className="mt-stack-lg scroll-mt-28 text-center">
          <button
            type="button"
            onClick={() => setIsDemoPopupOpen(true)}
            className="w-full rounded-DEFAULT border-2 border-primary-container bg-transparent px-6 py-4 font-title-md text-sm uppercase tracking-wider text-primary-container transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container hover:shadow-[0_0_20px_rgba(195,244,0,0.3)] active:scale-95 sm:w-auto sm:px-10"
          >
            Initialize Partnership
          </button>
        </div>
      </section>

      <DemoContactPopup
        isOpen={isDemoPopupOpen}
        onClose={() => setIsDemoPopupOpen(false)}
      />
    </>
  );
}
