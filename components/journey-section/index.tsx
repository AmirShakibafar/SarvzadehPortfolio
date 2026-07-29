import React from "react";
import { JOURNEY_STEPS } from "./constants/journey";
import { JourneyStep } from "./components/journey-step";
import { JourneyScrollContainer } from "./components/journey-scroll-container";

export const JourneySection: React.FC = () => {
  return (
    <section className="py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          مسیر درمان شما
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          یک فرآیند علمی و شخصی‌سازی‌شده برای رسیدن به بهترین نتیجه
        </p>
      </div>

      {/* Journey Steps */}
      <JourneyScrollContainer>
        {JOURNEY_STEPS.map((step, index) => {
          const { icon: Icon, id, ...rest } = step;

          return (
            <JourneyStep
              key={id}
              {...rest}
              icon={<Icon className="w-5 h-5 text-primary" />}
              align={index % 2 === 0 ? "right" : "left"}
            />
          );
        })}
      </JourneyScrollContainer>
    </section>
  );
};
