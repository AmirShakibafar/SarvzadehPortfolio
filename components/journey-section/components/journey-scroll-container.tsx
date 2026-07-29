"use client";
import React, { useRef } from "react";
import { useJourneyProgress } from "../hooks/useJourney";
import { JourneyPath } from "./journey-path";
import { JourneyBackground } from "./journey-background";

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
      className="relative w-full py-16 md:py-24 overflow-hidden font-sans"
    >
      <JourneyBackground />
      <div className="relative max-w-6xl mx-auto px-6 mt-8 md:mt-12">
        <JourneyPath progress={progress} />
        <div className="relative z-10 flex flex-col gap-20 md:gap-32">
          {children}
        </div>
      </div>
    </section>
  );
}
