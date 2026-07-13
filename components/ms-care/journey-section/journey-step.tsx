"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ElementType } from "react";
import { cn } from "@/lib/utils";

interface JourneyStepProps {
  title: string;
  text: string;
  icon: ElementType;
  index: number;
  isActive: boolean;
}

export function JourneyStep({
  title,
  text,
  icon: Icon,
  index,
  isActive,
}: JourneyStepProps) {
  const prefersReducedMotion = useReducedMotion();
  const persianStepNumber = (index + 1).toLocaleString("fa-IR");

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group flex items-start gap-6 md:gap-10 transition-all duration-700 ease-out",
        isActive ? "opacity-100" : "opacity-40 hover:opacity-60",
      )}
    >
      {/* Integrated Timeline Node */}
      <div className="relative shrink-0">
        <motion.div
          animate={{
            scale: isActive && !prefersReducedMotion ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative z-10 flex w-14 h-14 items-center justify-center rounded-full border transition-all duration-700",
            isActive
              ? "bg-background border-primary/40 text-primary shadow-[0_0_24px_-4px_rgba(34,211,238,0.4)]"
              : "bg-muted/50 border-border text-muted-foreground/60",
          )}
        >
          <Icon className="w-6 h-6" strokeWidth={isActive ? 2 : 1.5} />
        </motion.div>
      </div>

      {/* Clean, Non-Glass Content Card */}
      <motion.div
        animate={{
          y: isActive && !prefersReducedMotion ? 0 : 4,
          scale: isActive && !prefersReducedMotion ? 1 : 0.98,
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex-1 relative rounded-[28px] p-8 md:p-10 transition-all duration-700",
          isActive
            ? "bg-card border border-primary/20 shadow-[0_20px_60px_-15px_rgba(34,211,238,0.15)]"
            : "bg-transparent border border-transparent",
        )}
      >
        {/* Step Indicator Rhythm */}
        <div className="flex items-center gap-4 mb-5">
          <div
            className={cn(
              "h-px transition-all duration-700 ease-out",
              isActive ? "w-12 bg-primary/40" : "w-6 bg-border/80",
            )}
          />
          <span
            className={cn(
              "text-sm font-semibold tracking-widest transition-colors duration-700",
              isActive ? "text-primary" : "text-muted-foreground/60",
            )}
          >
            مرحله {persianStepNumber}
          </span>
        </div>

        <h3
          className={cn(
            "text-2xl md:text-3xl font-semibold tracking-tight mb-4 transition-colors duration-700 leading-snug",
            isActive ? "text-foreground" : "text-foreground/70",
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "text-base md:text-lg leading-relaxed transition-colors duration-700 font-light",
            isActive ? "text-muted-foreground" : "text-muted-foreground/60",
          )}
        >
          {text}
        </p>
      </motion.div>
    </motion.div>
  );
}
