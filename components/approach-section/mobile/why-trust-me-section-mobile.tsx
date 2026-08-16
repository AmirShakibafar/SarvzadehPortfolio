// why-trust-me-section-mobile.tsx
"use client";

import React from "react";
import { SectionHeader } from "../section-header";
import { QuoteDisplay } from "../desktop/quote-display";
import { DecoratedStatsGridMobile } from "./stats-mobile";
import { GlassBrainArtworkMobile } from "./glass-artwork-mobile";
import { QuoteDisplayMobile } from "./quote-display-mobile";

export default function WhyTrustMeSectionMobile() {
  return (
    <section dir="rtl" className="relative isolate overflow-hidden py-16">
      {/* Mobile-optimized ambient background - Replaced expensive   s with native radial gradients and removed   */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-primary/20 to-transparent opacity-40" />
        <div className="absolute bottom-0 right-[-80px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-primary/10 to-transparent opacity-40" />
      </div>

      <div className="flex flex-col px-5">
        <div className="mb-8">
          <SectionHeader />
        </div>
        <DecoratedStatsGridMobile />
        <GlassBrainArtworkMobile />
        <QuoteDisplayMobile />
      </div>
    </section>
  );
}
