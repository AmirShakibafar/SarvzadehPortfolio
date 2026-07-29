"use client";

import React from "react";
import { motion } from "framer-motion";

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

        
        <motion.img
          src="/images/approach/brain2.png"
          alt="Glass Brain"
          animate={{
            y: [0, -10, 0],
            rotate: [-4, -2, -4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
          style={{ willChange: "transform" }}
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
