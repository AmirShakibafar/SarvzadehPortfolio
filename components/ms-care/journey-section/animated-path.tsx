"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface AnimatedPathProps {
  pathLength: MotionValue<number>;
  // These can now be safely removed from the parent component as well
  stepCount?: number;
  activeIndex?: number;
}

export function AnimatedPath({ pathLength }: AnimatedPathProps) {
  // Maps the 0-1 pathLength to 0%-100% for the moving tip
  const tipPosition = useTransform(pathLength, [0, 1], ["0%", "100%"]);

  return (
    <div className="absolute top-0 bottom-0 right-[38px] w-[4px]">
      {/* Base Track */}
      <div className="absolute inset-y-0 left-[1px] right-[1px] bg-border/40 rounded-full" />

      {/* Animated Active Track */}
      <motion.div
        className="absolute top-0 bottom-0 left-[1px] right-[1px] bg-primary origin-top rounded-full"
        style={{ scaleY: pathLength }}
      />

      {/* Dynamic Tip (Head of the line) - Provides a clear moving end point */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
        style={{ top: tipPosition }}
      >
        <div className="w-[8px] h-[8px] rounded-full bg-primary" />
        <div className="absolute inset-0 rounded-full bg-primary opacity-30 scale-[2.5]" />
      </motion.div>
    </div>
  );
}
