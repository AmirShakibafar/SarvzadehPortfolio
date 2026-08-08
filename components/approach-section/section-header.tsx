"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function SectionHeader() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
      className="lg:col-span-5 z-30 isolate"
    >
      <motion.div variants={itemVariants} className="   ">
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          چرا بیماران به من اعتماد می‌کنند؟
        </span>
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="mt-4 max-w-xl text-4xl font-extrabold leading-tight text-foreground lg:text-5xl    "
      >
        هیچ دو بیمار
        <span className="text-primary"> ام‌اس </span>
        شبیه یکدیگر نیستند.
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="mt-8 max-w-md text-lg leading-9 text-muted-foreground    "
      >
        هر بیمار شرایط، علائم، سبک زندگی و اهداف متفاوتی دارد. به همین دلیل،
        برنامه درمانی باید بر پایه شواهد علمی و متناسب با نیازهای واقعی هر فرد
        طراحی شود.
      </motion.p>
    </motion.div>
  );
}
