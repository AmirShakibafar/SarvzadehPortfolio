"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function GlassBrainArtworkMobile() {
  return (
    <div className="flex w-full justify-center isolate">
      <motion.div
        className="relative isolate z-0 flex aspect-square w-full max-w-[280px] items-center justify-center"
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "50px 0px", amount: 0.1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 h-full w-full"
        >
          <Image
            src="/images/approach/brain2.webp"
            alt="Glass Brain"
            fill
            className="object-contain drop-shadow-xl [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            draggable={false}
            sizes="280px"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
