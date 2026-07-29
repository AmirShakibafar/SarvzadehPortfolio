import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";
import { DotPattern } from "../ui/dot-pattern";

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
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative flex items-center justify-center lg:col-span-7 lg:mt-0"
    >
      <div className="relative w-full max-w-2xl">
        <DotPattern className="-top-8 -right-8 w-32 h-32 opacity-60" />
        <DotPattern className="-bottom-8 -left-8 w-32 h-32 opacity-40" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-primary/5 blur-[90px] rounded-full -z-10" />

        <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`relative flex flex-col items-center text-center p-6 rounded-3xl border backdrop-blur-xl ${
                index === 2 ? "col-span-2 lg:col-span-1" : "col-span-1"
              } ${
                stat.highlight
                  ? "border-primary/20 bg-primary/5 shadow-md shadow-primary/5"
                  : "border-white/60 bg-white/30 shadow-lg shadow-black/[0.02]"
              }`}
            >
              <div
                className={`text-4xl font-extrabold tracking-tight lg:text-5xl ${
                  stat.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">
                {stat.title}
              </div>
              <div className="mt-1 whitespace-pre-line text-xs leading-6 text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
