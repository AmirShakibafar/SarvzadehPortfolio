"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface IllustrationMobileProps {
  src: string;
  alt: string;
}

export const JourneyGlassIllustrationMobile: React.FC<
  IllustrationMobileProps
> = ({ src, alt }) => {
  return (
    <motion.div
      className="relative z-0 flex aspect-square w-full items-center justify-center isolate"
      initial={{ scale: 0.95, y: 15, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "50px 0px", amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute left-1/2 top-1/2 -z-20 opacity-80 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none" />

      {/* Reduced opacity from 50% to 10% so the blob is visible through the card */}
      <div className="absolute inset-4 -z-10 rounded-[2.5rem] bg-white/10 border border-white/30 shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-hidden">
        {/* Adjusted gradient opacity to maintain visibility */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 flex h-5/6 w-5/6 items-center justify-center animate-[pulse_6s_ease-in-out_infinite]">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          className="h-full w-full object-cover drop-shadow-2xl"
          sizes="(max-width: 768px) 83vw, 400px"
        />
      </div>
    </motion.div>
  );
};
