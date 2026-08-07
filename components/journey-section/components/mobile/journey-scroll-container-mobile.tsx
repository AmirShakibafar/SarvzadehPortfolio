"use client";

import React, { useRef } from "react";
import { JourneyBackground } from "../desktop/journey-background";
import { JourneyMobile } from "./journey-mobile";

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

export function JourneyScrollContainerMobile({ steps }: { steps: StepData[] }) {
  const containerRef = useRef<HTMLElement>(null!);

  return (
    <section
      ref={containerRef}
      dir="rtl"
      className="relative w-full bg-background font-sans overflow-hidden block md:hidden"
    >
      <JourneyBackground />

      <div className="relative w-full">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="relative z-20 flex flex-col items-start text-right max-w-2xl mb-6 pt-6 isolate">
            <div className="absolute right-0 top-1/2 -z-10 h-[180px] w-[180px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-primary/20 to-transparent pointer-events-none" />

            <span className="inline-block text-sm font-semibold tracking-wide text-primary">
              نقشه راه شما
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground">
              مسیر درمانی <span className="text-primary">مرحله به مرحله</span>
            </h2>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              ما در این مسیر قدم به قدم همراه شما هستیم تا با یک برنامه اصولی،
              بهبود کیفیت زندگی و کنترل علائم ام‌اس را تجربه کنید.
            </p>
          </div>

          <div className="pt-10">
            <JourneyMobile steps={steps} />
          </div>
        </div>
      </div>
    </section>
  );
}
