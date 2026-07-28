"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

const stats = [
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

export function StatsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="flex items-center lg:col-span-7"
    >
      <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-4">
        {stats.map((stat, index) => (
          <motion.div key={index} variants={fadeInUp} className="text-center">
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
    </motion.div>
  );
}
