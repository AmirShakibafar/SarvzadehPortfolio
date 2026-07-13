"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  useReducedMotion,
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
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: stepsContainerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 1000 : 60,
    damping: prefersReducedMotion ? 100 : 25,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const stepCount = JOURNEY_STEPS.length;
    if (stepCount === 0) return;

    let newIndex = 0;
    for (let i = 0; i < stepCount; i++) {
      const threshold = stepCount > 1 ? i / (stepCount - 1) : 0.5;
      // Slightly larger buffer for a smoother activation timing
      if (latest >= threshold - 0.05) {
        newIndex = i;
      }
    }

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  return (
    <section className="relative w-full overflow-hidden bg-background py-24 lg:py-40">
      {/* Premium Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        {/* Soft radial cyan glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.035)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.025)_0%,transparent_70%)]" />
        {/* Almost invisible geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Text Column (40% visual weight) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 lg:top-40 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Heading
                  as="h2"
                  size="h2"
                  className="text-4xl lg:text-[44px] tracking-tight leading-[1.25] mb-8 font-semibold text-foreground"
                >
                  چرا بیماران ام‌اس این روش درمانی را انتخاب می‌کنند؟
                </Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Paragraph
                  size="lg"
                  className="mb-12 max-w-md text-lg text-muted-foreground/80 leading-[1.8] font-light"
                >
                  شما یک رژیم غذایی دریافت نمی‌کنید. شما وارد یک سیستم مراقبت
                  مداوم می‌شوید که بر اساس واکنش‌های عصبی و نیازهای متغیر بدن
                  شما طراحی شده است.
                </Paragraph>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Button
                  variant="pillPrimary"
                  size="pill"
                  className="group gap-3 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_24px_-8px_rgba(34,211,238,0.4)]"
                >
                  شروع مسیر درمان
                  <ArrowLeft className="h-5 w-5 transition-transform duration-500 group-hover:-translate-x-1.5" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Right Journey Column (60% visual weight) */}
          <div ref={stepsContainerRef} className="lg:col-span-7 relative">
            <AnimatedPath pathLength={pathLength} />

            <div className="flex flex-col gap-12 md:gap-20 relative z-10">
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
      </div>
    </section>
  );
}
