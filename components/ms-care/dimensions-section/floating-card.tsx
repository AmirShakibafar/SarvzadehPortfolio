"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ElementType, KeyboardEvent } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  title: string;
  icon: ElementType;
  angle: number;
  radius: number;
  delay: number;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}

export function FloatingCard({
  title,
  icon: Icon,
  angle,
  radius,
  delay,
  index,
  isActive,
  onSelect,
}: FloatingCardProps) {
  const prefersReducedMotion = useReducedMotion();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="absolute left-1/2 top-1/2 z-20"
      style={{
        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
      }}
    >
      <motion.div
        animate={
          !isActive && !prefersReducedMotion ? { y: [0, -6, 0] } : { y: 0 }
        }
        transition={
          !isActive && !prefersReducedMotion
            ? {
                duration: 4 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }
            : { duration: 0.3 }
        }
      >
        <GlassCard
          role="button"
          tabIndex={0}
          onClick={onSelect}
          onKeyDown={handleKeyDown}
          onMouseEnter={onSelect}
          intensity="heavy"
          className={cn(
            "flex items-center gap-3 px-4 py-3 lg:px-5 lg:py-4 rounded-[24px] cursor-pointer",
            "bg-white/80 border-white/60 transition-all duration-500",
            "shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.7)]",
            isActive
              ? "border-primary/40 scale-105 shadow-[0_12px_40px_color-mix(in_oklab,var(--color-primary)_20%,transparent),inset_0_1px_1px_rgba(255,255,255,0.7)]"
              : "opacity-80 hover:opacity-100 hover:border-primary/20",
          )}
        >
          <div className="flex items-center justify-center shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-primary/10 shadow-[inset_0_0_12px_rgba(255,255,255,0.6)]">
            <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
          </div>
          <p className="font-semibold text-[13px] lg:text-sm text-foreground whitespace-nowrap">
            {title}
          </p>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
