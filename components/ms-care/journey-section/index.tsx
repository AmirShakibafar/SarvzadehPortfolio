// index.tsx

"use client";

import { useRef, useState } from "react";
import {
  useScroll,
  useSpring,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { JOURNEY_STEPS } from "../constants";
import { JourneyBackground } from "./journey-background";
import { JourneyStepCard } from "./journey-step-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function JourneySection() {
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: stepsContainerRef,
    // Shifted from "center" to "75%" so detection happens in the lower third of the screen,
    // activating cards immediately as they scroll into view.
    offset: ["start 75%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 1000 : 50,
    damping: prefersReducedMotion ? 100 : 28,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const stepCount = JOURNEY_STEPS.length;
    if (stepCount === 0) return;

    let newIndex = 0;
    for (let i = 0; i < stepCount; i++) {
      const threshold = stepCount > 1 ? i / (stepCount - 1) : 0.5;
      // Increased the buffer from 0.05 to 0.15 so the active state triggers slightly earlier
      if (latest >= threshold - 0.15) {
        newIndex = i;
      }
    }

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-32">
      <JourneyBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-12">
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center px-4 text-center lg:mb-24">
          <Heading
            as="h2"
            size="h2"
            className="mb-6 font-semibold leading-[1.25] tracking-tight text-foreground lg:text-[44px]"
          >
            چرا بیماران ام‌اس این روش درمانی را انتخاب می‌کنند؟
          </Heading>
          <Paragraph
            size="lg"
            className="font-light leading-[1.8] text-muted-foreground"
          >
            شما یک رژیم غذایی دریافت نمی‌کنید. شما وارد یک سیستم مراقبت مداوم
            می‌شوید که بر اساس واکنش‌های عصبی و نیازهای متغیر بدن شما طراحی شده
            است.
          </Paragraph>
        </div>

        <div ref={stepsContainerRef} className="relative w-full">
          <div className="relative z-10 flex w-full flex-col gap-16 lg:gap-32">
            {JOURNEY_STEPS.map((step, index) => (
              <JourneyStepCard
                key={step.id}
                step={step}
                index={index}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
