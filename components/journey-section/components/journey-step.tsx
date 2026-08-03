"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { JourneyGlassIllustration } from "./journey-glass-illustration";
import { GlassCard } from "@/components/ui/glass-card";

interface StepProps {
  title: string;
  text: string;
  image: string;
  duration: string;
  chips: string[];
  reassurance: string;
  trustBadge: string;
  icon: React.ReactNode;
  align: "left" | "right";
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  // Reduced slide distance slightly for faster perceived performance
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // Shortened duration from 0.8s to 0.6s to free up the GPU faster
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const JourneyStep: React.FC<StepProps> = ({
  title,
  text,
  image,
  duration,
  chips,
  reassurance,
  trustBadge,
  icon,
  align,
}) => {
  const isRightAligned = align === "right";

  return (
    <motion.div
      className={`flex w-full flex-col items-center gap-8 md:gap-16 ${
        isRightAligned ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      // FIX: Replaced percentage margin (-20%) with a static pixel margin and amount threshold.
      // This prevents the IntersectionObserver from failing during mobile layout shifts/refreshes.
      viewport={{ once: true, margin: "100px 0px", amount: 0.05 }}
    >
      <div className="w-full flex-1">
        <JourneyGlassIllustration src={image} alt={title} />
      </div>

      <div className="flex w-full flex-1 flex-col gap-5">
        <motion.span
          variants={itemVariants}
          className="text-sm font-medium text-primary"
        >
          {duration}
        </motion.span>
        <motion.h3
          variants={itemVariants}
          className="text-balance text-3xl font-bold leading-snug text-foreground"
        >
          {title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-lg leading-relaxed text-muted-foreground"
        >
          {text}
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          variants={itemVariants}
          className="mt-2 flex flex-wrap gap-2"
        >
          {chips.map((chip, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Bottom Glass Card */}
        <motion.div
          // FIX: Swapped custom scaling variant for the standard item variant
          variants={itemVariants}
          className="relative isolate mt-6 transform-gpu"
          // FIX: Removed static willChange & translateZ(0) to prevent permanent VRAM bloating.
          // Framer motion will handle this dynamically during the entrance.
        >
          <GlassCard className="rounded-[24px] p-6">
            <div className="mb-3 flex items-center gap-3">
              {icon}
              <h4 className="text-balance font-semibold leading-snug text-foreground">
                {trustBadge}
              </h4>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {reassurance}
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};
