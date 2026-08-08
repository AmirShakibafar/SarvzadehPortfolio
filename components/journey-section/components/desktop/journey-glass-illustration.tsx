"use client";

import React from "react";
import Image from "next/image";
import { motion, TargetAndTransition } from "framer-motion";
import { useFloatingAnimation } from "../../hooks/useJourney";
import { GlassCard } from "@/components/ui/glass-card";

interface IllustrationProps {
  src: string;
  alt: string;
}

export const JourneyGlassIllustration: React.FC<IllustrationProps> = ({
  src,
  alt,
}) => {
  const floatingAnimation = useFloatingAnimation();

  return (
    <motion.div
      className="relative z-0 flex aspect-square w-full items-center justify-center isolate"
      initial={{ scale: 0.95, y: 20, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Increased container size to 150% to account for the baked-in blur spread */}
      <div className="absolute left-1/2 top-1/2 -z-20 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none">
        <Image
          src="/blob.svg"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <GlassCard className="absolute inset-4 -z-10 rounded-[4rem]  " />

      <motion.div
        animate={floatingAnimation as TargetAndTransition}
        className="relative z-10 flex h-5/6 w-5/6 items-center justify-center  "
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          className="h-full w-full object-cover    "
          sizes="(max-width: 768px) 83vw, 40vw"
        />
      </motion.div>
    </motion.div>
  );
};
