// lib/animations.ts

import { UseInViewOptions } from "framer-motion";

/**
 * Standard trigger: Animates slightly before the element enters the viewport.
 * Consolidates the 50px and 100px variations.
 */
export const VIEWPORT_OFFSET: UseInViewOptions = {
  once: true,
  margin: "100px 0px",
  amount: 0.05,
};

/**
 * Strict trigger: Requires the element to be firmly inside the viewport before animating.
 * Consolidates the negative margin variations used in the Journey section.
 */
export const VIEWPORT_STRICT: UseInViewOptions = {
  once: true,
  margin: "-50px 0px",
  amount: 0.2,
};
