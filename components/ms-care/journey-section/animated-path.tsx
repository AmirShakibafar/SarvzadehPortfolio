"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface AnimatedPathProps {
  pathLength: MotionValue<number>;
}

export function AnimatedPath({ pathLength }: AnimatedPathProps) {
  // Maps to the tip of the line perfectly
  const tipPosition = useTransform(pathLength, [0, 1], ["0%", "100%"]);

  return (
    // top-[28px] and bottom-[28px] perfectly bound the track to the centers
    // of the first and last w-14 (56px) icons.
    // right-[27px] perfectly centers the 2px line inside the 56px icon space.
    <div className="absolute top-[28px] bottom-[28px] right-[27px] w-[2px]">
      {/* Base Inactive Track */}
      <div className="absolute inset-y-0 left-0 right-0 bg-border/40 rounded-full" />

      {/* Animated Active Track */}
      <motion.div
        className="absolute inset-y-0 left-0 right-0 bg-primary origin-top rounded-full"
        style={{ scaleY: pathLength }}
      />

      {/* Elegant Tip Indicator */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
        style={{ top: tipPosition }}
      >
        <div className="w-2 h-2 rounded-full bg-background border border-primary shadow-[0_0_12px_2px_rgba(34,211,238,0.5)]" />
      </motion.div>
    </div>
  );
}
