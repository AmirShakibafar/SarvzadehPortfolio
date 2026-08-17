import React from "react";
import { JourneyMobile } from "./journey-mobile";
import { JourneyBackground } from "../desktop/journey-background";

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

interface JourneyScrollContainerMobileProps {
  steps: StepData[];
}

export function JourneyScrollContainerMobile({
  steps,
}: JourneyScrollContainerMobileProps) {
  return (
    <section
      dir="rtl"
      className="relative block w-full overflow-hidden bg-background font-sans md:hidden"
    >
      {/* Static mobile background.
          No Framer Motion / scroll logic here. */}
      <JourneyBackground />

      <div className="relative w-full">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Heading */}
          <header className="relative z-20 isolate mb-6 flex max-w-2xl flex-col items-start pt-6 text-right">
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[180px] w-[180px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-primary/20 to-transparent"
            />

            <span className="text-sm font-semibold tracking-wide text-primary">
              نقشه راه شما
            </span>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground">
              مسیر درمانی <span className="text-primary">مرحله به مرحله</span>
            </h2>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              ما در این مسیر قدم به قدم همراه شما هستیم تا با یک برنامه اصولی،
              بهبود کیفیت زندگی و کنترل علائم ام‌اس را تجربه کنید.
            </p>
          </header>

          {/* Journey */}
          <div className="pt-10">
            <JourneyMobile steps={steps} />
          </div>
        </div>
      </div>
    </section>
  );
}
