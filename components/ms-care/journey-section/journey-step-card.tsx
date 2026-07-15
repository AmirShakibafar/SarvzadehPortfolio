"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { JourneyEditorialImage } from "./journey-editorial-image";
import { JourneyStep } from "../constants";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { GlassCard } from "@/components/ui/glass-card";

interface JourneyStepCardProps {
  step: JourneyStep;
  index: number;
  isActive: boolean;
}

export function JourneyStepCard({
  step,
  index,
  isActive,
}: JourneyStepCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const persianStepNumber = (index + 1).toLocaleString("fa-IR");
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex w-full flex-col-reverse items-center gap-10 transition-all duration-1000 ease-[0.16,1,0.3,1] lg:gap-16",
        isEven ? "lg:flex-row" : "lg:flex-row-reverse",
        isActive ? "opacity-100" : "opacity-40 hover:opacity-60",
      )}
    >
      <div className="relative flex w-full flex-col items-start justify-center px-4 text-start lg:w-1/2 lg:px-8">
        {/* Ambient background glow linking text to image */}
        <div
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px] transition-opacity duration-1000",
            isActive ? "opacity-100" : "opacity-0",
          )}
        />

        {/* 1. Metadata Row */}
        <div className="mb-6 flex items-center gap-4">
          <div
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all duration-1000",
              isActive
                ? "border-white/40 bg-white/50 text-primary shadow-[0_0_30px_hsl(var(--primary)/0.25)] backdrop-blur-xl"
                : "border-transparent bg-transparent text-muted-foreground/50",
            )}
          >
            <step.icon className="h-5 w-5" strokeWidth={isActive ? 2 : 1.5} />
          </div>
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "text-sm font-medium transition-colors duration-1000",
                isActive ? "text-foreground" : "text-muted-foreground/50",
              )}
            >
              مرحله {persianStepNumber}
            </span>
            {step.duration && (
              <>
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors duration-1000",
                    isActive ? "bg-primary/40" : "bg-muted-foreground/20",
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium transition-colors duration-1000",
                    isActive
                      ? "text-muted-foreground"
                      : "text-muted-foreground/50",
                  )}
                >
                  {step.duration}
                </span>
              </>
            )}
          </div>
        </div>

        {/* 2. Title */}
        <Heading
          as="h3"
          size="h2"
          className={cn(
            "mb-4 tracking-tight transition-colors duration-1000",
            isActive ? "text-foreground" : "text-foreground/40",
          )}
        >
          {step.title}
        </Heading>

        {/* 3. Description */}
        <Paragraph
          size="lg"
          className={cn(
            "mb-10 max-w-xl transition-colors duration-1000",
            isActive ? "text-muted-foreground" : "text-muted-foreground/40",
          )}
        >
          {step.text}
        </Paragraph>

        {/* 4. Key Outcomes (Floating Pills) */}
        {step.chips && step.chips.length > 0 && (
          <div className="mb-10 flex w-full max-w-xl flex-col gap-3">
            {step.chips.slice(0, 3).map((chip, i) => (
              <div
                key={i}
                className={cn(
                  "group flex items-center gap-4 rounded-[22px] border px-5 py-4 transition-all duration-700",
                  isActive
                    ? "border-white/30 bg-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl hover:-translate-y-1 hover:border-primary/30 hover:bg-white/60"
                    : "border-transparent bg-transparent opacity-60",
                )}
              >
                <div
                  className={cn(
                    "h-2 w-2 shrink-0 rounded-full transition-colors duration-1000",
                    isActive ? "bg-primary" : "bg-muted-foreground/30",
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-medium transition-colors duration-1000",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {chip}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* 5. Trust / Reassurance (Editorial Glass Card) */}
        {step.reassurance && (
          <GlassCard
            intensity="light"
            className={cn(
              "relative mt-2 flex w-full max-w-xl items-start gap-4 overflow-hidden rounded-[28px] px-6 py-5 transition-all duration-1000",
              isActive
                ? "shadow-[0_12px_45px_rgba(0,0,0,0.06)]"
                : "border-transparent bg-transparent opacity-0 shadow-none",
            )}
          >
            {isActive && (
              <div className="absolute -left-10 top-1/2 -z-10 h-24 w-24 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            )}
            <Shield
              className={cn(
                "mt-0.5 h-5 w-5 shrink-0 transition-colors duration-1000",
                isActive ? "text-primary/70" : "text-muted-foreground",
              )}
            />
            <Paragraph
              size="sm"
              className={cn(
                "font-medium transition-colors duration-1000",
                isActive ? "text-foreground/80" : "text-muted-foreground",
              )}
            >
              {step.reassurance}
            </Paragraph>
          </GlassCard>
        )}
      </div>

      <div className="relative w-full px-4 lg:w-1/2 lg:px-0">
        <JourneyEditorialImage
          src={step.image}
          alt={step.title}
          isActive={isActive}
        />
      </div>
    </motion.div>
  );
}
