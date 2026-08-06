// quote-display-mobile.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function QuoteDisplayMobile() {
  return (
    <motion.div
      className="relative isolate text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Removed hidden background blur element completely for mobile performance */}

      <div>
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          رویکرد من
        </span>
      </div>

      <div className="mt-2 text-8xl leading-none text-primary/15">❝</div>

      <p className="mt-6 text-2xl font-light leading-[2.1] text-foreground">
        هدف من فقط تجویز یک رژیم غذایی نیست؛ بلکه همراهی با هر بیمار برای ساختن
        مسیری درمانی، علمی و ماندگار است.
      </p>

      {/* Changed justify-end to justify-center to better align with mobile's text-center layout */}
      <div className="mt-2 flex justify-center">
        <Image
          src="/images/approach/signiture.webp"
          alt="امضا دکتر رضا سروزاده"
          width={240}
          height={160}
          className="h-40 w-auto object-contain"
        />
      </div>
    </motion.div>
  );
}
