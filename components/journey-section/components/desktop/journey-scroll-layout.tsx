"use client";

import React, { useRef } from "react";
import { useJourneyProgress } from "../../hooks/useJourney";
import { JourneyPath } from "./journey-path";

interface JourneyScrollLayoutProps {
  background: React.ReactNode;
  children: React.ReactNode;
}

export function JourneyScrollLayout({
  background,
  children,
}: JourneyScrollLayoutProps) {
  const containerRef = useRef<HTMLElement>(null!);
  const progress = useJourneyProgress(containerRef);

  return (
    <section
      ref={containerRef}
      dir="rtl"
      className="relative w-full bg-background font-sans hidden md:block"
    >
      {background}

      <div className="relative w-full">
        {/* The interactive SVG path gets the motion value */}
        <JourneyPath progress={progress} />

        {/* Server Component content renders safely here */}
        {children}
      </div>
    </section>
  );
}
