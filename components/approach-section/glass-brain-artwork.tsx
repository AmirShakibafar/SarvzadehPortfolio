"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function GlassBrainArtwork() {
  return (
    <div className="order-2 flex w-full justify-center lg:order-1">
      <motion.div
        className="relative isolate z-0 flex aspect-square w-full max-w-[480px] items-center justify-center"
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-8 -z-20 rounded-full bg-primary/20 blur-[80px]" />

        <motion.div
          animate={{
            y: [0, -24, 0],
            rotate: [-4, 2, -4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 h-full w-full drop-shadow-2xl"
          style={{ willChange: "transform" }}
        >
          <Image
            src="/images/approach/brain2.webp"
            alt="Glass Brain"
            fill
            className="object-contain"
            draggable={false}
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
