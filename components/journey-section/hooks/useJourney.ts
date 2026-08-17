"use client";
import { useScroll, useSpring, useReducedMotion } from "framer-motion";
import { RefObject } from "react";

export const useJourneyProgress = (ref: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Single source of truth for smoothed scroll
  return useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25, // Increased damping slightly for less "bounce" lag
    mass: 1,
    restDelta: 0.001,
  });
};

export const useFloatingAnimation = () => {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return {};
  return {
    y: [0, -8, 0],
    rotate: [-2, 2, -2],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
};
