"use client";

import React from "react";
import Image from "next/image";
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

export function QuoteDisplay() {
  return (
    <motion.div
      className="order-1 text-center lg:order-2 lg:text-right relative isolate"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
    >
      <div
        className="hidden md:block absolute -z-10 top-1/2 opacity-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      <motion.div variants={itemVariants}>
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          رویکرد من
        </span>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-2 text-8xl leading-none text-primary/15"
      >
        ❝
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="mt-6 text-2xl font-light leading-[2.1] text-foreground md:text-3xl"
      >
        هدف من فقط تجویز یک رژیم غذایی نیست؛ بلکه همراهی با هر بیمار برای ساختن
        مسیری درمانی، علمی و ماندگار است.
      </motion.p>

      <motion.div variants={itemVariants} className="mt-2 flex justify-end">
        <Image
          src="/images/approach/signiture.webp"
          alt="امضا دکتر رضا سروزاده"
          width={240}
          height={160}
          className="h-40 w-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
