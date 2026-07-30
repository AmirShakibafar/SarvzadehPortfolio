import React from "react";
import { motion, TargetAndTransition } from "framer-motion";
import { useFloatingAnimation } from "../hooks/useJourney";
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
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Localized primary blob behind the glass */}
      <div className="absolute left-1/2 top-1/2 -z-20 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />

      <GlassCard className="absolute inset-4 -z-10 rounded-[4rem]" />

      <motion.img
        src={src}
        alt={alt}
        className="relative z-10 h-5/6 w-5/6 object-cover drop-shadow-2xl"
        animate={floatingAnimation as TargetAndTransition}
        style={{ willChange: "transform" }}
      />
    </motion.div>
  );
};
