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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
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
      className={`flex w-full flex-col items-center gap-8 md:gap-16 isolate ${
        isRightAligned ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px 0px", amount: 0.2 }}
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
        <motion.div variants={itemVariants} className="relative isolate mt-6">
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
