"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ElementType } from "react";
import { GlassCard } from "@/components/ui/glass-card";
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

  // Convert the numeric index to a Persian string (۱, ۲, ۳, etc.)
  const persianStepNumber = (index + 1).toLocaleString("fa-IR");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      animate={{
        opacity: isActive ? 1 : 0.7,
        scale: isActive ? 1.02 : 1,
      }}
      className="flex items-start gap-8 transition-opacity duration-500"
    >
      <div className="relative shrink-0">
        <motion.div
          animate={
            isActive && !prefersReducedMotion
              ? { scale: [1, 1.08, 1] }
              : { scale: 1 }
          }
          transition={
            isActive && !prefersReducedMotion
              ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.3 }
          }
          className={cn(
            "w-20 h-20 rounded-[24px] flex items-center justify-center border transition-all duration-500",
            isActive
              ? "bg-white/90 border-primary/40 shadow-[0_8px_30px_color-mix(in_oklab,var(--color-primary)_25%,transparent)]"
              : "bg-white/80 border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.06)]",
          )}
        >
          <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
        </motion.div>
      </div>

      <GlassCard
        intensity="heavy"
        className={cn(
          "flex-1 p-8 rounded-[32px] transition-all duration-500 relative overflow-hidden",
          "bg-white/80 border-white/60",
          "shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.7)]",
          isActive &&
            "border-primary/40 shadow-[0_12px_40px_color-mix(in_oklab,var(--color-primary)_20%,transparent),inset_0_1px_1px_rgba(255,255,255,0.7)]",
          !isActive && "hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
        )}
      >
        {/* Big Background Number */}
        <div className="absolute top-4 left-6 text-8xl font-black text-primary/5 select-none pointer-events-none">
          {persianStepNumber}
        </div>

        <div className="relative z-10">
          <span className="inline-block text-sm font-bold text-primary mb-2">
            قدم {persianStepNumber}
          </span>
          <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{text}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
