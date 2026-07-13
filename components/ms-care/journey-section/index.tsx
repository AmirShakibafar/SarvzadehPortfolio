"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { JOURNEY_STEPS } from "../constants";
import { JourneyStep } from "./journey-step";
import { AnimatedPath } from "./animated-path";

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto px-6 py-32 lg:py-48"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5 relative">
          <div className="sticky top-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl lg:text-5xl font-bold text-gray-900 leading-[1.4] mb-6"
            >
              چرا بیماران ام‌اس این روش درمانی را انتخاب می‌کنند؟
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-lg text-gray-600 leading-relaxed mb-10 max-w-md"
            >
              شما یک رژیم غذایی دریافت نمی‌کنید. شما وارد یک سیستم مراقبت مداوم
              می‌شوید که بر اساس واکنش‌های عصبی و نیازهای متغیر بدن شما طراحی
              شده است.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-[#24D8DC] text-white px-8 py-4 rounded-[24px] font-medium text-lg shadow-[0_8px_20px_rgba(36,216,220,0.25)] hover:shadow-[0_12px_25px_rgba(36,216,220,0.35)] transition-shadow duration-300"
            >
              شروع مسیر درمان
            </motion.button>
          </div>
        </div>

        <div className="lg:col-span-7 relative pt-10">
          <AnimatedPath pathLength={pathLength} />
          <div className="flex flex-col gap-16 relative z-10">
            {JOURNEY_STEPS.map((step, index) => (
              <JourneyStep
                key={step.id}
                title={step.title}
                text={step.text}
                icon={step.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
