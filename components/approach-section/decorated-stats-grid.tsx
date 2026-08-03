"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { DotPattern } from "../ui/dot-pattern";
import { GlassCard } from "@/components/ui/glass-card";

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.15,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
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
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
      className="relative flex items-center justify-center lg:col-span-7 lg:mt-0 isolate transform-gpu will-change-transform"
    >
      <div className="relative w-full max-w-2xl">
        <DotPattern className="-right-8 -top-8 h-32 w-32 opacity-60" />
        <DotPattern className="-bottom-8 -left-8 h-32 w-32 opacity-40" />

        <div
          className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px] transform-gpu pointer-events-none"
          style={{ willChange: "filter, transform" }}
        />

        <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardItemVariants}
              className={`relative h-full transform-gpu will-change-transform ${
                index === 2 ? "col-span-2 lg:col-span-1" : "col-span-1"
              }`}
            >
              <div
                className="absolute left-1/2 top-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-2xl transform-gpu pointer-events-none"
                style={{ willChange: "filter, transform" }}
              />

              <GlassCard
                className={`flex h-full flex-col items-center justify-center p-6 text-center transform-gpu ${
                  stat.highlight
                    ? "border-primary/30 bg-white/50 shadow-md shadow-primary/10"
                    : ""
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
      </div>
    </motion.div>
  );
}
