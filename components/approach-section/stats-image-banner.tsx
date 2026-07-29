import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

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

export function StatsImageBanner() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative z-10 mt-12 flex h-full w-full items-center justify-center lg:col-span-7 lg:mt-0"
    >
      {/* Cinematic Banner Container */}
      <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-white/50 border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/10]">
        {/* Full Cover Image */}
        <img
          src="/images/approach/bg2.png"
          alt="Healthcare Approach"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Soft gradient overlay to ensure text readability on the glass card */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />

        {/* Floating Glass Stats Bar */}
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between gap-2 sm:gap-4 rounded-3xl border border-white/50 bg-white/30 px-2 py-4 sm:px-6 sm:py-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-2xl"
        >
          {statsData.map((stat, index) => (
            <div key={index} className="flex-1 text-center">
              <div
                className={`text-2xl font-extrabold tracking-tight sm:text-3xl xl:text-4xl ${
                  stat.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {stat.value}
              </div>
              <div className="mt-1 sm:mt-2 text-[10px] sm:text-sm font-semibold text-foreground">
                {stat.title}
              </div>
              <div className="mt-1 hidden lg:block whitespace-pre-line text-xs leading-5 text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
