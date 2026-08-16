"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { DotPattern } from "../../ui/dot-pattern";
import { GlassCard } from "@/components/ui/glass-card";

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.99, // Forces browser to maintain composite layer for consistent backdrop-filter rendering
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 0.99, // Prevents glass transparency pop at the end of the animation
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const statsData = [
  {
    value: "۱۰+",
    title: "سال تجربه تخصصی",
    description: "در تغذیه بالینی\nو مدیریت ام‌اس",
    highlight: false,
  },
  {
    value: "۵۰۰+",
    title: "ارزیابی تغذیه‌ای",
    description: "همراهی با بیماران\nبا برنامه اختصاصی",
    highlight: false,
  },
  {
    value: "۱۰۰٪",
    title: "برنامه اختصاصی",
    description: "متناسب با شرایط\nهر بیمار",
    highlight: true,
  },
];

export function DecoratedStatsGrid() {
  return (
    <div className="relative flex items-center justify-center lg:col-span-7 lg:mt-0 isolate">
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[150%] opacity-40 w-[150%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
        className="relative w-full max-w-2xl"
      >
        <DotPattern className="-right-8 -top-8 h-32 w-32 opacity-40" />
        <DotPattern className="-bottom-8 -left-8 h-32 w-32 opacity-40" />

        <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardItemVariants}
              className={`relative h-full   isolate ${
                index === 2 ? "col-span-2 lg:col-span-1" : "col-span-1"
              }`}
            >
              <div
                className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] opacity-40 -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
                aria-hidden="true"
              />

              <GlassCard
                className={`flex h-full flex-col items-center justify-center p-6 text-center   ${
                  stat.highlight ? "border-primary/30 bg-white/50     " : ""
                }`}
              >
                <div
                  className={`text-4xl font-extrabold tracking-tight lg:text-5xl ${
                    stat.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="mt-4 text-sm font-bold text-foreground">
                  {stat.title}
                </div>
                <div className="mt-2 whitespace-pre-line text-xs leading-6 text-muted-foreground">
                  {stat.description}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
