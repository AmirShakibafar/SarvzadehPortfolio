"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";

export function SectionHeader() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="lg:col-span-5 z-30"
    >
      <motion.span
        variants={fadeInUp}
        className="text-sm font-semibold tracking-wide text-primary"
      >
        چرا بیماران به من اعتماد می‌کنند؟
      </motion.span>

      <motion.h2
        variants={fadeInUp}
        className="mt-4 max-w-xl text-4xl font-extrabold leading-tight text-foreground lg:text-5xl"
      >
        هیچ دو بیمار
        <span className="text-primary"> ام‌اس </span>
        شبیه یکدیگر نیستند.
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        className="mt-8 max-w-md text-lg leading-9 text-muted-foreground"
      >
        هر بیمار شرایط، علائم، سبک زندگی و اهداف متفاوتی دارد. به همین دلیل،
        برنامه درمانی باید بر پایه شواهد علمی و متناسب با نیازهای واقعی هر فرد
        طراحی شود.
      </motion.p>
    </motion.div>
  );
}
