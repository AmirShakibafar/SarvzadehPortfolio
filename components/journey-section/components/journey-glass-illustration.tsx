import React from "react";
import { motion } from "framer-motion";
import { useFloatingAnimation } from "../hooks/useJourney";

interface IllustrationProps {
  src: string;
  alt: string;
}
// Inside JourneyGlassIllustration.tsx

export const JourneyGlassIllustration: React.FC<IllustrationProps> = ({
  src,
  alt,
}) => {
  const floatingAnimation = useFloatingAnimation();

  return (
    <motion.div
      className="relative w-full aspect-square flex items-center justify-center z-0 isolate"
      initial={{ scale: 0.95, y: 20, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="
          absolute inset-4 
          rounded-[64px] 
          bg-gradient-to-br from-white/60 to-white/20 
          border border-white/60 
          shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.7)]
          -z-10
        "
      />
      <motion.img
        src={src}
        alt={alt}
        className="relative z-10 w-5/6 h-5/6 object-cover drop-shadow-2xl"
        animate={floatingAnimation}
        // Adding will-change improves performance for infinite floating animations
        style={{ willChange: "transform" }}
      />
    </motion.div>
  );
};
