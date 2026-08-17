import React from "react";
import { JourneyGlassIllustration } from "./journey-glass-illustration";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollTrigger } from "@/components/ui/scroll-trigger";

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
  index: number;
}

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
  index,
}) => {
  const isRightAligned = align === "right";

  return (
    <ScrollTrigger
      className={`flex w-full flex-col items-center gap-8 md:gap-16 isolate scroll-stagger-group ${
        isRightAligned ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Block 1: Image Animation */}
      <div
        className="w-full flex-1 stagger-scale-item transform-gpu"
        style={{ animationDelay: "100ms" }}
      >
        <JourneyGlassIllustration src={image} alt={title} index={index} />
      </div>

      {/* Block 2: Grouped Content Animation (replaces 5 separate stagger items) */}
      <div
        className="flex w-full flex-1 flex-col gap-5 stagger-item transform-gpu"
        style={{ animationDelay: "250ms" }}
      >
        <span className="text-sm font-medium text-primary">{duration}</span>
        <h3 className="text-balance text-3xl font-bold leading-snug text-foreground">
          {title}
        </h3>
        <p className="text-lg leading-relaxed text-muted-foreground">{text}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {chips.map((chip, idx) => (
            <span
              key={idx}
              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="relative isolate mt-6">
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
        </div>
      </div>
    </ScrollTrigger>
  );
};
