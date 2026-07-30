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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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
      className={`flex flex-col items-center gap-8 md:gap-16 w-full ${
        isRightAligned ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
    >
      <div className="flex-1 w-full">
        <JourneyGlassIllustration src={image} alt={title} />
      </div>

      <div className="flex-1 flex flex-col gap-5 w-full">
        <motion.span
          variants={itemVariants}
          className="text-primary font-medium text-sm"
        >
          {duration}
        </motion.span>
        <motion.h3
          variants={itemVariants}
          className="text-balance text-3xl font-bold text-foreground leading-snug"
        >
          {title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          {text}
        </motion.p>

        {/* Feature Pills using GlassCard */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 mt-2"
        >
          {chips.map((chip, idx) => (
            <GlassCard
              key={idx}
              className="px-4 py-2 rounded-full border-primary/20 bg-white/40 text-sm font-medium text-primary shadow-sm hover:shadow-md transition-all duration-300 ease-out cursor-default"
            >
              {chip}
            </GlassCard>
          ))}
        </motion.div>

        {/* Bottom Glass Card with Blob */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
          className="relative mt-6 isolate"
        >

          <GlassCard className="p-6 rounded-[24px]">
            <div className="flex items-center gap-3 mb-3">
              {icon}
              <h4 className="text-balance font-semibold text-foreground leading-snug">
                {trustBadge}
              </h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {reassurance}
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};
