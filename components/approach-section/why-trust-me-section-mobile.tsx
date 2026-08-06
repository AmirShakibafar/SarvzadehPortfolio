"use client";

import React from "react";
import { SectionHeader } from "./section-header";
import { GlassBrainArtwork } from "./glass-brain-artwork";
import { QuoteDisplay } from "./quote-display";
import { DecoratedStatsGridMobile } from "./stats-mobile";
import { GlassBrainArtworkMobile } from "./glass-artwork-mobile";

export default function WhyTrustMeSectionMobile() {
  return (
    <section dir="rtl" className="relative isolate overflow-hidden py-16">
      {/* Mobile-optimized ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl opacity-40 transform-gpu" />
        <div className="absolute bottom-0 right-[-80px] h-[260px] w-[260px] rounded-full bg-primary/10 blur-3xl opacity-40 transform-gpu" />
      </div>

      <div className="px-5 flex flex-col">
        <SectionHeader />
        <DecoratedStatsGridMobile />
        <GlassBrainArtworkMobile />
        <QuoteDisplay />
      </div>
    </section>
  );
}
