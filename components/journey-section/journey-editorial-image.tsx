// journey-editorial-image.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface JourneyEditorialImageProps {
  src: string;
  alt: string;
  isActive: boolean;
}

export function JourneyEditorialImage({
  src,
  alt,
  isActive,
}: JourneyEditorialImageProps) {
  return (
    <motion.div
      animate={{
        // A very subtle Y-shift rather than a significant movement, to minimize noise
        y: isActive ? 0 : 8,
        // The scale change is now almost imperceptible, emphasizing calm
        scale: isActive ? 1.01 : 0.99,
        // Maintain high opacity when inactive, but allow isActive to be "peak brightness"
        opacity: isActive ? 1 : 0.85,
      }}
      transition={{
        // Increased duration for a luxurious, deliberate feel
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1], // Keep the existing smooth ease
      }}
      className={cn(
        "relative w-full aspect-[3/2]",
        // Large, approved corners
        "rounded-[24px] lg:rounded-[32px]",
        "overflow-hidden",
        // Replace black/5 border with an intentional shadow/integration system
        "border border-slate-100", // A soft slate border instead of black
        "shadow-[0_16px_70px_-10px_rgba(0,0,0,0.06)]", // Soft, deep shadow for depth
        "transition-shadow duration-1000",
        isActive ? "" : "shadow-none", // Remove deep shadow when inactive to de-emphasize
      )}
    >
      {/* 
        NO DRASTIC GRADIENT OVERLAY.
        Removed the dark gradient entirely to preserve clarity, trust, and a light-filled editorial feel.
        The image should speak for itself.
      */}

      {/* 
        Optional: Add a very soft, light tint overlay for internal integration 
        (e.g., a faint, clean white/slate tint) only if the base image composition is noisy.
        Currently, the component is set to be clean.
      */}

      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          "object-cover z-0 transition-transform duration-[1500ms] ease-[0.16,1,0.3,1]",
          // Slow background scaling for extra depth when active
          isActive ? "scale-105" : "scale-100",
        )}
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
      />

      {/* 
        This is a common premium technique: an internal bezel/inset shadow that is 
        lighter than the edge of the border, softening the internal boundary.
      */}
      <div
        className={cn(
          "absolute inset-0 z-10",
          "rounded-[24px] lg:rounded-[32px]",
          "shadow-[inset_0_0_120px_-20px_rgba(255,255,255,0.4)]", // Soft white inner glow
          "pointer-events-none",
        )}
      />
    </motion.div>
  );
}
