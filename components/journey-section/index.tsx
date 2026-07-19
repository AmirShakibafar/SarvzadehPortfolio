"use client";

import React, { useRef } from "react";
import { useJourneyProgress } from "./hooks/useJourney";
import { JourneyPath } from "./JourneyPath";
import { JourneyStep } from "./journey-step";
import { JourneyBackground } from "./journey-background";
import { JOURNEY_STEPS } from "./constants/journey";

export const JourneySection: React.FC = () => {
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

        <div className="relative z-10 flex flex-col gap-[30vh]">
          {JOURNEY_STEPS.map((step, index) => (
            <JourneyStep
              key={step.id}
              step={step}
              index={index}
              align={index % 2 === 0 ? "right" : "left"} // Swapped for RTL logical flow
            />
          ))}
        </div>
      </div>
    </section>
  );
};
