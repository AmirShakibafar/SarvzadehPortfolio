// journey-scroll-container.tsx
"use client";

import React, { useRef } from "react";
import { useJourneyProgress } from "../../hooks/useJourney";
import { JourneyPath } from "./journey-path";
import { JourneyBackground } from "./journey-background";
import { JourneyStep } from "./journey-step";

interface StepData {
  title: string;
  text: string;
  image: string;
  duration: string;
  chips: string[];
  reassurance: string;
  trustBadge: string;
  icon: React.ReactNode;
}

export function JourneyScrollContainer({ steps }: { steps: StepData[] }) {
  const containerRef = useRef<HTMLElement>(null!);
  const progress = useJourneyProgress(containerRef);

  return (
    <section
      ref={containerRef}
      dir="rtl"
      // Added `hidden md:block` to ensure it only shows on desktop
      className="relative w-full bg-background font-sans hidden md:block"
    >
      <JourneyBackground />

      <div className="relative w-full">
        <JourneyPath progress={progress} />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* TITLE */}
          <div className="relative z-20 flex flex-col items-start text-right max-w-2xl mb-16 pt-8 isolate">
            <div className="absolute right-0 top-1/2 -z-10 h-[250px] w-[250px] -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/20 blur-[80px]" />

            <span className="inline-block text-sm font-semibold tracking-wide text-primary">
              نقشه راه شما
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold leading-tight text-foreground">
              مسیر درمانی <span className="text-primary">مرحله به مرحله</span>
            </h2>

            <p className="mt-6 text-lg leading-9 text-muted-foreground">
              ما در این مسیر قدم به قدم همراه شما هستیم تا با یک برنامه اصولی،
              بهبود کیفیت زندگی و کنترل علائم ام‌اس را تجربه کنید.
            </p>
          </div>

          {/* STEPS */}
          <div className="pt-10 pb-64">
            <div className="flex flex-col gap-32">
              {steps.map((step, index) => (
                <JourneyStep
                  key={index}
                  {...step}
                  align={index % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
