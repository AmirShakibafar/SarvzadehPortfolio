"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

interface IllustrationProps {
  src: string;
  alt: string;
  index?: number;
}

const illustrationVariants: Variants = {
  hidden: { scale: 0.95, y: 20, opacity: 0 },
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const BLOB_SHAPES = [
  "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
  "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
  "rounded-[50%_50%_20%_80%/25%_80%_20%_75%]",
  "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
  "rounded-[70%_30%_50%_50%/60%_40%_60%_40%]",
];

export const JourneyGlassIllustration: React.FC<IllustrationProps> = ({
  src,
  alt,
  index = 0,
}) => {
  const blobShapeClass = BLOB_SHAPES[index % BLOB_SHAPES.length];

  return (
    <motion.div
      className="relative z-0 flex aspect-square w-full items-center justify-center isolate"
      variants={illustrationVariants}
    >
      {/* Optimized Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-20 h-[150%] w-[150%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Fluid Glass Card */}
      <GlassCard
        className={cn(
          "absolute inset-0 md:inset-2 -z-10 transition-all duration-700",
          blobShapeClass,
        )}
      />

      {/* Enlarged image container - Infinite animation removed */}
      <div className="relative z-10 flex h-[95%] w-[95%] items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
};
