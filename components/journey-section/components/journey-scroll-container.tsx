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
  const containerRef = useRef<HTMLElement>(null);
  const progress = useJourneyProgress(containerRef);

  return (
    <section
      ref={containerRef}
      dir="rtl"
      className="relative w-full min-h-[400vh] py-24 overflow-hidden font-sans"
    >
      <JourneyBackground progress={progress} />
      <div className="relative max-w-6xl mx-auto px-6">
        <JourneyPath progress={progress} />
        <div className="relative z-10 flex flex-col gap-[30vh]">{children}</div>
      </div>
    </section>
  );
}
