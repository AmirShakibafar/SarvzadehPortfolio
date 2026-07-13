"use client";

import { motion, MotionValue } from "framer-motion";

interface AnimatedPathProps {
  pathLength: MotionValue<number>;
}

export function AnimatedPath({ pathLength }: AnimatedPathProps) {
  return (
    <>
      <div className="absolute top-0 bottom-0 right-[39px] w-[2px] bg-gray-200" />
      <svg
        className="absolute top-0 bottom-0 right-[39px] w-[2px] h-full"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          stroke="#24D8DC"
          strokeWidth="2"
          style={{ pathLength }}
        />
      </svg>
    </>
  );
}
