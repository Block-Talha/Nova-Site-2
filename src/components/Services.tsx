"use client";

import { useState } from "react";
import { DemoContactPopup } from "@/components/DemoContactPopup";

type ServiceCard = {
  number: string;
  title: string;
  icon: string;
  features: string[];
};

const services: ServiceCard[] = [
  {
    number: "01",
    title: "Advertising & Marketing",
    icon: "campaign",
    features: [
      "META (Facebook, Instagram) Ads",
      "Google Ads",
      "TikTok Ads",
      "Social Media Management",
      "Influencer Marketing",
      "Email Marketing Campaign",
      "Facebook & Instagram paid campaigns",
      "TikTok paid advertising campaigns",
      "Content creation, posting & growth",
      "Local influencer outreach & coordination",
    ],
  },
  {
    number: "02",
    title: "Website & Online Presence",
    icon: "language",
    features: [
      "Website Design & Development",
      "Microsite / Landing Page",
      "SEO (Search Engine Optimization)",
      "Google Business Profile Setup",
      "Website Maintenance",
      "Custom business website build",
      "Single-page booking / promo site",
      "On-page & local SEO optimization",
      "Google Maps & local listing management",
      "Monthly updates, hosting & support",
    ],
  },
  {
    number: "04",
    title: "Branding & Creative",
    icon: "branding_watermark",
    features: [
      "Logo & Brand Identity Design",
      "Graphic Design (Posts & Creatives)",
      "Photography / Videography Coordination",
      "Promotional Video / Reel Editing",
    ],
  },
];

const featuredService: ServiceCard = {
  number: "03",
  title: "WhatsApp & Automation",
  icon: "forum",
  features: [
    "WhatsApp Business Setup",
    "WhatsApp Automation & Chatbot",
    "WhatsApp Broadcast Campaigns",
    "CRM Integration",
    "Profile, catalog & initial configuration",
  ],
};

function CheckItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="material-symbols-outlined mt-1 text-sm text-primary-container">
        check
      </span>
      {label}
    </li>
  );
}

function StandardServiceCard({ service }: { service: ServiceCard }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-fixed/30 hover:shadow-[0_0_20px_rgba(195,244,0,0.05)] sm:p-8">
      <div className="absolute left-0 top-0 h-full w-1 bg-outline-variant/20 transition-colors duration-300 group-hover:bg-primary-fixed" />
      <div className="mb-6 flex items-center justify-between">
        <span
          className="material-symbols-outlined text-4xl text-on-surface transition-colors group-hover:text-primary-container"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {service.icon}
        </span>
        <span className="font-label-xs text-outline-variant group-hover:text-primary-container/50">
          {service.number}
        </span>
      </div>
      <h3 className="mb-4 font-title-md text-on-surface">{service.title}</h3>
      <ul className="space-y-3 font-body-sm text-on-surface-variant">
        {service.features.map((feature) => (
          <CheckItem key={feature} label={feature} />
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  return (
    <>
      <section
        id="pricing"
        className="relative mx-auto max-w-container-max border-t border-outline-variant/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-gutter lg:py-section-padding"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary-fixed/5 to-transparent" />

        <div className="relative z-10 mb-stack-lg text-center">
          <span className="mb-4 block font-label-xs uppercase tracking-[0.3em] text-primary-container">
            The Arsenal
          </span>
          <h2 className="font-headline-lg text-on-surface">
            Growth Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body-lg text-on-surface-variant">
            Comprehensive digital domination tools engineered for premium
            brands.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <StandardServiceCard service={services[0]} />
          <StandardServiceCard service={services[1]} />

          <div className="group relative overflow-hidden rounded-xl border-2 border-primary-fixed bg-surface-container-low p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(195,244,0,0.1)] sm:p-8 md:-translate-y-4">
            <div className="absolute right-0 top-0 rounded-bl-lg bg-primary-container px-3 py-1 font-label-xs font-bold text-on-primary-container">
              MOST POPULAR
            </div>
            <div className="absolute left-0 top-0 h-full w-1 bg-primary-fixed" />
            <div className="mb-6 mt-2 flex items-center justify-between">
              <span
                className="material-symbols-outlined text-4xl text-primary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {featuredService.icon}
              </span>
              <span className="font-label-xs text-primary-container/50">
                {featuredService.number}
              </span>
            </div>
            <h3 className="mb-4 font-title-md text-on-surface">
              {featuredService.title}
            </h3>
            <ul className="space-y-3 font-body-sm text-on-surface-variant">
              {featuredService.features.map((feature) => (
                <CheckItem key={feature} label={feature} />
              ))}
            </ul>
          </div>

          <StandardServiceCard service={services[2]} />

          <div className="group relative overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-fixed/30 hover:shadow-[0_0_20px_rgba(195,244,0,0.05)] sm:p-8 lg:col-span-2">
            <div className="absolute left-0 top-0 h-full w-1 bg-outline-variant/20 transition-colors duration-300 group-hover:bg-primary-fixed" />
            <div className="flex flex-col items-start gap-8 md:flex-row">
              <div className="flex-1">
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className="material-symbols-outlined text-4xl text-on-surface transition-colors group-hover:text-primary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    precision_manufacturing
                  </span>
                  <span className="font-label-xs text-outline-variant group-hover:text-primary-container/50">
                    05
                  </span>
                </div>
                <h3 className="mb-4 font-title-md text-on-surface">
                  Business Operations & Tech
                </h3>
                <p className="mb-6 font-body-sm text-on-surface-variant">
                  Seamless integration of marketing front-ends with operational
                  back-ends for zero-friction scaling.
                </p>
              </div>
              <div className="w-full flex-1 rounded-lg border border-outline-variant/10 bg-surface-dim p-5 sm:p-6">
                <ul className="grid grid-cols-1 gap-x-4 gap-y-3 font-body-sm text-on-surface-variant sm:grid-cols-2">
                  {[
                    "Online Booking System Setup",
                    "Loyalty Program Design",
                    "JazzCash / EasyPaisa Integration",
                    "Monthly Performance Reporting",
                  ].map((feature) => (
                    <CheckItem key={feature} label={feature} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoContactPopup
        isOpen={isDemoPopupOpen}
        onClose={() => setIsDemoPopupOpen(false)}
      />
    </>
  );
}
