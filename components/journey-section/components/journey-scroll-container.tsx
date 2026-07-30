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
      className="relative w-full bg-background font-sans"
    >
      <JourneyBackground />

      <div className="relative w-full">
        {/* PATH = FULL BLEED */}
        <JourneyPath progress={progress} />

        {/* CONTENT = CONSTRAINED */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* TITLE SECTION - Right Aligned with Blob */}
          <div className="relative z-20 flex flex-col items-start text-right max-w-2xl mb-8 lg:mb-16 pt-8 isolate">
            {/* Background Blob behind the title */}
            <div className="absolute right-0 top-1/2 -z-10 h-[250px] w-[250px] -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/20 blur-[80px]" />

            <span className="inline-block text-sm font-semibold tracking-wide text-primary">
              نقشه راه شما
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-foreground lg:text-5xl">
              مسیر درمانی <span className="text-primary">مرحله به مرحله</span>
            </h2>

            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              ما در این مسیر قدم به قدم همراه شما هستیم تا با یک برنامه اصولی،
              بهبود کیفیت زندگی و کنترل علائم ام‌اس را تجربه کنید.
            </p>
          </div>

          {/* STEPS CONTAINER */}
          <div className="flex flex-col gap-24 md:gap-32 pt-10 pb-40 md:pb-64">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
