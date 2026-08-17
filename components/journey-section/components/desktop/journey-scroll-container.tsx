import React from "react";
import { JourneyBackground } from "./journey-background";
import { JourneyStep } from "./journey-step";
import { JourneyScrollLayout } from "./journey-scroll-layout";

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
  return (
    <JourneyScrollLayout background={<JourneyBackground />}>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="relative z-20 flex flex-col items-start text-right max-w-2xl mb-16 pt-8 isolate">
          {/* Replaced CSS blur with radial-gradient for performance */}
          <div
            className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/4 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(var(--primary-rgb, 13, 220, 213), 0.15) 0%, transparent 60%)",
            }}
          />

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
                index={index}
                {...step}
                align={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </JourneyScrollLayout>
  );
}
