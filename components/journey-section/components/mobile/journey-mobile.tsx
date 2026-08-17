import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { JourneyGlassIllustrationMobile } from "./journey-glass-illustration-mobile";
import { JourneyReveal } from "./journey-reveal";

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
    <div className="mt-4 flex w-full flex-col md:hidden" dir="rtl">
      {steps.map((step, index) => {
        const isEven = index % 2 === 0;
        const isLast = index === steps.length - 1;

        const pathClasses = isEven
          ? "right-1/2 w-[25%] border-l-[3px] border-y-[3px] border-r-0 rounded-l-[3rem]"
          : "left-1/2 w-[25%] border-r-[3px] border-y-[3px] border-l-0 rounded-r-[3rem]";

        return (
          <article
            key={index}
            className="journey-step relative flex w-full flex-col"
          >
            {/* Connector */}
            {!isLast && (
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute top-12 z-0 h-full border-dashed border-primary/30 ${pathClasses}`}
              />
            )}

            {/* Step node */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-12 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-[6px] ring-background"
            />

            <JourneyReveal className="relative z-10 flex flex-col gap-6 px-4 pb-20 pt-12">
              {/* Illustration */}
              <div
                className={`w-[80%] max-w-[280px] ${
                  isEven ? "self-start" : "self-end"
                }`}
              >
                <div className="stagger-scale-item">
                  <JourneyGlassIllustrationMobile
                    src={step.image}
                    alt={step.title}
                    index={index}
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex w-[90%] flex-col gap-4 ${
                  isEven ? "self-end" : "self-start"
                }`}
              >
                <div className="stagger-item flex flex-col gap-4">
                  <span className="text-sm font-medium text-primary">
                    {step.duration}
                  </span>

                  <h3 className="text-balance text-2xl font-bold leading-snug text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-base leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>

                  {/* Chips */}
                  <div className="mt-1 flex flex-wrap gap-2">
                    {step.chips.map((chip, chipIndex) => (
                      <span
                        key={chipIndex}
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Trust card */}
                  <div className="mt-4">
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
              </div>
            </JourneyReveal>
          </article>
        );
      })}
    </div>
  );
};
