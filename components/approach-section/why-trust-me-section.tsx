"use client";
import React from "react";
import { BackgroundDecorations } from "./bg-decoration";
import { SectionHeader } from "./section-header";
import { GlassBrainArtwork } from "./glass-brain-artwork";
import { QuoteDisplay } from "./quote-display";
import { DecoratedStatsGrid } from "./decorated-stats-grid";

export default function WhyTrustMeSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-background pt-16 pb-8 lg:pt-24 lg:pb-16 isolate"
    >
      <BackgroundDecorations />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <SectionHeader />
          <DecoratedStatsGrid />
        </div>

        {/* Removed motion.div wrapper. Children handle their own animations. */}
        <div className="relative mt-16 lg:mt-24">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {/* Kept static, removed from animation tree */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] transform-gpu" />
          </div>

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="order-first">
              <GlassBrainArtwork />
            </div>

            <div className="order-last lg:order-first">
              <QuoteDisplay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
