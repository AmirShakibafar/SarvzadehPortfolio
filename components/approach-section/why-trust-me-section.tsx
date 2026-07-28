"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";
import { BackgroundDecorations } from "./bg-decoration";
import { SectionHeader } from "./section-header";
import { GlassBrainArtwork } from "./glass-brain-artwork";
import { QuoteDisplay } from "./quote-display";
import { StatsOverImageBlob } from "./stats-over-image-blob";

export default function WhyTrustMeSection() {
  return (
    <section
      dir="rtl"
      className="relative bg-background py-24 lg:py-32"
    >
      <BackgroundDecorations />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
        {/* Inside why_trust_me_section.tsx */}
        <div className="grid min-h-[600px] gap-16 lg:grid-cols-12 lg:items-center">
          <SectionHeader />
          <StatsOverImageBlob />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative mt-28 pt-20"
        >
          {/* Quote Background Glow */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
          </div>

          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
            <GlassBrainArtwork />
            <QuoteDisplay />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
