import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { JourneyGlassIllustrationMobile } from "./journey-glass-illustration-mobile";
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
}

export const JourneyMobile: React.FC<{ steps: StepProps[] }> = ({ steps }) => {
  return (
    <div className="w-full flex flex-col md:hidden mt-4" dir="rtl">
      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        const isLast = index === steps.length - 1;

        const pathClasses = isEven
          ? "right-1/2 w-[25%] border-l-[3px] border-y-[3px] border-r-0 rounded-l-[3rem]"
          : "left-1/2 w-[25%] border-r-[3px] border-y-[3px] border-l-0 rounded-r-[3rem]";

        return (
          <div key={index} className="relative flex flex-col w-full isolate">
            {!isLast && (
              <div
                className={`absolute border-dashed border-primary/30 -z-10 ${pathClasses} top-12 h-full`}
              />
            )}

            <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary ring-[6px] ring-background z-0" />

            <ScrollTrigger className="flex flex-col gap-6 px-4 pt-12 pb-20 relative z-10 scroll-stagger-group">
              <div
                className={`w-[80%] max-w-[280px] stagger-item ${
                  isEven ? "self-start" : "self-end"
                }`}
                style={{ animationDelay: "100ms" }}
              >
                <JourneyGlassIllustrationMobile
                  src={step.image}
                  alt={step.title}
                  index={index}
                />
              </div>

              <div
                className={`w-[90%] flex flex-col gap-4 mt-2 stagger-item ${
                  isEven ? "self-end" : "self-start"
                }`}
                style={{ animationDelay: "200ms" }}
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
              </div>
            </ScrollTrigger>
          </div>
        );
      })}
    </div>
  );
};
