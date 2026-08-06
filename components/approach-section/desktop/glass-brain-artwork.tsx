"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function GlassBrainArtwork() {
  return (
    <div className="order-2 flex w-full justify-center lg:order-1 isolate">
      <motion.div
        className="relative isolate z-0 flex aspect-square w-full max-w-[480px] items-center justify-center will-change-transform"
        initial={{ scale: 0.8, y: 40, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute left-1/2 top-1/2 -z-20 h-[150%] w-[150%] opacity-60 -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none" />

        <motion.div
          animate={{
            y: [0, -24, 0],
            rotate: [-4, 2, -4],
          }}
          transition={{
            delay: 1,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 h-full w-full transform-gpu will-change-transform"
        >
          <Image
            src="/images/approach/brain2.webp"
            alt="Glass Brain"
            fill
            className="object-contain drop-shadow-2xl transform-gpu"
            draggable={false}
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
