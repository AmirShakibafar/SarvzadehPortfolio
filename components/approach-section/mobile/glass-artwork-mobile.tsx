"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { VIEWPORT_OFFSET } from "@/lib/animations";

export function GlassBrainArtworkMobile() {
  return (
    <div className="flex w-full justify-center isolate">
      <motion.div
        className="relative isolate z-0 flex aspect-square w-full max-w-[280px] items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT_OFFSET}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] opacity-40 -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none" />

        <div className="relative z-10 h-full w-full animate-[pulse_8s_ease-in-out_infinite]">
          <Image
            src="/images/approach/brain2.webp"
            alt="Glass Brain"
            fill
            className="object-contain [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            draggable={false}
            sizes="280px"
          />
        </div>
      </motion.div>
    </div>
  );
}
