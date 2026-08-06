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
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
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

export function DecoratedStatsGridMobile() {
  return (
    <div className="relative flex items-center justify-center isolate">
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "50px 0px", amount: 0.05 }}
        className="relative w-full"
      >
        <DotPattern className="-right-4 -top-4 h-24 w-24 opacity-30" />

        <div className="grid w-full grid-cols-2 gap-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardItemVariants}
              className={`relative h-full ${
                index === 2 ? "col-span-2" : "col-span-1"
              }`}
            >
              <GlassCard
                className={`flex h-full flex-col items-center justify-center p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-[6px] ${
                  stat.highlight
                    ? "border border-primary/20 bg-white/70 shadow-primary/5"
                    : "border border-white/40 bg-white/60"
                }`}
              >
                <div
                  className={`text-4xl font-extrabold tracking-tight ${
                    stat.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="mt-3 text-[13px] font-bold text-foreground">
                  {stat.title}
                </div>
                <div className="mt-1 whitespace-pre-line text-[11px] leading-5 text-muted-foreground/80">
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
