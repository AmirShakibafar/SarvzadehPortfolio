// journey-glass-illustration-mobile.tsx
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
      // Removed inline willChange style to prevent persistent memory overhead on iOS
    >
      {/* Replaced CSS blur-3xl with a lightweight native radial gradient and stripped transform-gpu */}
      <div className="absolute left-1/2 top-1/2 -z-20 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-primary/30 to-transparent pointer-events-none" />

      {/* Fake Glass Structure replacing the expensive GlassCard and backdrop-blurs */}
      <div className="absolute inset-4 -z-10 rounded-[2.5rem] bg-white/50 border border-white/50 shadow-[0_8px_20px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/50 to-transparent pointer-events-none" />
      </div>

      {/* Replaced JS-driven useFloatingAnimation with native Tailwind CSS keyframes and stripped will-change */}
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
