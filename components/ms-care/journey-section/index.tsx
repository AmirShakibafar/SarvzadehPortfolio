"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { JOURNEY_STEPS } from "../constants";
import { JourneyStep } from "./journey-step";
import { AnimatedPath } from "./animated-path";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";

export function JourneySection() {
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: stepsContainerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const idx = Math.min(
      JOURNEY_STEPS.length - 1,
      Math.floor(latest * JOURNEY_STEPS.length),
    );
    setActiveIndex(idx);
  });

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-32 lg:py-48">
      <div className="absolute top-1/4 left-0 w-[60%] h-[50%] pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(34,211,238,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Heading
                as="h2"
                size="h2"
                className="text-3xl lg:text-5xl leading-[1.4] mb-6"
              >
                چرا بیماران ام‌اس این روش درمانی را انتخاب می‌کنند؟
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <Paragraph size="lg" className="mb-10 max-w-md">
                شما یک رژیم غذایی دریافت نمی‌کنید. شما وارد یک سیستم مراقبت
                مداوم می‌شوید که بر اساس واکنش‌های عصبی و نیازهای متغیر بدن شما
                طراحی شده است.
              </Paragraph>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Button variant="pillPrimary" size="pill" className="gap-2">
                شروع مسیر درمان
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        <div ref={stepsContainerRef} className="lg:col-span-7 relative pt-10">
          <AnimatedPath
            pathLength={pathLength}
            stepCount={JOURNEY_STEPS.length}
            activeIndex={activeIndex}
          />
          <div className="flex flex-col gap-16 relative z-10">
            {JOURNEY_STEPS.map((step, index) => (
              <JourneyStep
                key={step.id}
                title={step.title}
                text={step.text}
                icon={step.icon}
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
