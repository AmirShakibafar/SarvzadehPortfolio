"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { JourneyGlassIllustration } from "./journey-glass-illustration";

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

        {/* Feature Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 mt-2"
        >
          {chips.map((chip, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md border text-primary shadow-[0_4px_14px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-300 ease-out border-primary/20 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)] cursor-default"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Bottom Glass Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
          className="mt-6 p-6 rounded-[24px] bg-gradient-to-br from-white/60 to-white/20 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.7)] isolate"
        >
          <div className="flex items-center gap-3 mb-3">
            {icon}
            <h4 className="text-balance font-semibold text-foreground leading-snug">
              {trustBadge}
            </h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {reassurance}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
