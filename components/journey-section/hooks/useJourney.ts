"use client";

import { useScroll, useSpring, useReducedMotion } from "framer-motion";
import { RefObject } from "react";

export const useJourneyProgress = (ref: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 18,
    mass: 1,
  });

  return smoothProgress;
};

export const useFloatingAnimation = () => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return {};

  return {
    y: [0, -10, 0],
    rotate: [-3, 3, -3],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
};
