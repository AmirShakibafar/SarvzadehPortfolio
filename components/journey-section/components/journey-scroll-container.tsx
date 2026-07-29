"use client";
import React, { useRef } from "react";
import { useJourneyProgress } from "../hooks/useJourney";
import { JourneyPath } from "./journey-path";
import { JourneyBackground } from "./journey-background";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { DotPattern } from "@/components/ui/dot-pattern";

export function JourneyScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLElement>(null!);
  const progress = useJourneyProgress(containerRef);

  return (
    <section
      ref={containerRef}
      dir="rtl"
      className="relative w-full py-8 md:py-24 overflow-hidden font-sans"
    >
      <JourneyBackground />

      <div className="relative w-full mt-8 md:mt-12">
        {/* PATH = FULL BLEED */}
        <JourneyPath progress={progress} />

        {/* CONTENT = CONSTRAINED */}
        <div className="relative max-w-6xl mx-auto px-6">
          {/* TITLE */}
          <div className="relative text-center max-w-3xl mx-auto px-4 flex flex-col items-center space-y-6 z-10 mb-20 md:mb-32 pt-8">
            <DotPattern className="absolute inset-0 w-full h-full text-teal-500/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

            <Heading className="text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 relative z-10">
              مسیر <span className="text-teal-400">درمان</span> شما
            </Heading>

            <Paragraph className="text-lg text-slate-600 leading-relaxed max-w-lg relative z-10">
              یک فرآیند علمی و شخصی‌سازی‌شده برای رسیدن به بهترین نتیجه
            </Paragraph>
          </div>

          {/* STEPS */}
          <div className="relative z-10 flex flex-col gap-20 md:gap-32">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
