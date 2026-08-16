// quote-display-mobile.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { VIEWPORT_OFFSET } from "@/lib/animations";

export function QuoteDisplayMobile() {
  return (
    <motion.div
      className="relative isolate text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={VIEWPORT_OFFSET}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-35 pointer-events-none"
        aria-hidden="true"
      />

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
