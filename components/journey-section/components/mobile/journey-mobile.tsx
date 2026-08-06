"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { JourneyGlassIllustration } from "../desktop/journey-glass-illustration";
import { JourneyGlassIllustrationMobile } from "./journey-glass-illustration-mobile";

interface StepProps {
  title: string;
  text: string;
  image: string;
  duration: string;
  chips: string[];
  reassurance: string;
  trustBadge: string;
  icon: React.ReactNode;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const JourneyMobile: React.FC<{ steps: StepProps[] }> = ({ steps }) => {
  return (
    <div className="w-full flex flex-col md:hidden mt-4" dir="rtl">
      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        const isLast = index === steps.length - 1;

        /* 
          In RTL, `self-start` aligns to the RIGHT.
          If the image is on the right (isEven), the path bulges to the LEFT (right-1/2) 
          so it winds away from the image and runs beautifully behind the text block.
        */
        const pathClasses = isEven
          ? "right-1/2 w-[25%] border-l-[3px] border-y-[3px] border-r-0 rounded-l-[3rem]"
          : "left-1/2 w-[25%] border-r-[3px] border-y-[3px] border-l-0 rounded-r-[3rem]";

        return (
          <div key={index} className="relative flex flex-col w-full isolate">
            {/* Winding Path - mathematically aligned to height */}
            {!isLast && (
              <div
                className={`absolute border-dashed border-primary/30 -z-10
                  ${pathClasses}
                  top-12 h-full
                `}
              />
            )}

            {/* Path Connection Node */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary ring-[6px] ring-background z-0" />

            {/* Content Container */}
            <div className="flex flex-col gap-6 px-4 pt-12 pb-20 relative z-10">
              {/* Illustration (No extra card wrappers, letting your component handle it) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={itemVariants}
                className={`w-[80%] max-w-[280px] ${isEven ? "self-start" : "self-end"}`}
              >
                <JourneyGlassIllustrationMobile
                  src={step.image}
                  alt={step.title}
                />
              </motion.div>

              {/* Text Block (Mirrors Desktop Typography) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={itemVariants}
                className={`w-[90%] flex flex-col gap-4 mt-2 ${
                  isEven ? "self-end" : "self-start"
                }`}
              >
                <span className="text-sm font-medium text-primary">
                  {step.duration}
                </span>

                <h3 className="text-balance text-2xl font-bold leading-snug text-foreground">
                  {step.title}
                </h3>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {step.text}
                </p>

                {/* Feature Chips */}
                <div className="mt-1 flex flex-wrap gap-2">
                  {step.chips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Bottom Trust Card */}
                <div className="relative isolate mt-4">
                  <GlassCard className="rounded-[24px] p-5">
                    <div className="mb-3 flex items-center gap-3">
                      {step.icon}
                      <h4 className="text-balance font-semibold leading-snug text-foreground">
                        {step.trustBadge}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.reassurance}
                    </p>
                  </GlassCard>
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
