"use client";

import React from "react";
import { motion } from "framer-motion";
import { JourneyGlassIllustration } from "./JourneyGlassIllustration";
import { JourneyStepData } from "./constants/journey";

interface StepProps {
  step: JourneyStepData;
  index: number;
  align: "left" | "right";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const JourneyStep: React.FC<StepProps> = ({ step, align }) => {
  const isRightAligned = align === "right";

  return (
    <motion.div
      className={`flex items-center gap-16 w-full ${isRightAligned ? "flex-row" : "flex-row-reverse"}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
    >
      <div className="flex-1">
        <JourneyGlassIllustration src={step.image} alt={step.title} />
      </div>

      <div className="flex-1 flex flex-col gap-5">
        <motion.span
          variants={itemVariants}
          className="text-primary font-medium text-sm"
        >
          {step.duration}
        </motion.span>

        <motion.h3
          variants={itemVariants}
          className="text-balance text-3xl font-bold text-foreground leading-snug"
        >
          {step.title}
        </motion.h3>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          {step.text}
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 mt-2"
        >
          {step.chips.map((chip, idx) => (
            <span
              key={idx}
              className="
                px-4 py-2 
                rounded-full 
                text-sm font-medium 
                bg-white/10 
                backdrop-blur-md 
                border
                text-primary 
                shadow-[0_4px_14px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.4)]
                transition-all duration-300 ease-out
          
                border-primary/20 
                hover:shadow-[0_6px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)]
                cursor-default
              "
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Bottom Glass Card - Safari bug-free style */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
          className="
            mt-6 p-6 
            rounded-[24px] 
            bg-gradient-to-br from-white/60 to-white/20 
            border border-white/60 
            shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.7)]
            isolate
          "
        >
          <div className="flex items-center gap-3 mb-3">
            <step.icon className="w-5 h-5 text-primary" />
            <h4 className="text-balance font-semibold text-foreground leading-snug">
              {step.trustBadge}
            </h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {step.reassurance}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
