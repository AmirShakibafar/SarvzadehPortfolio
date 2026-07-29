import React from "react";
import { JOURNEY_STEPS } from "./constants/journey";
import { JourneyStep } from "./components/journey-step";
import { JourneyScrollContainer } from "./components/journey-scroll-container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { DotPattern } from "@/components/ui/dot-pattern";

export const JourneySection: React.FC = () => {
  return (
    <section className="py-20 relative">
      {/* Title */}
      <div className="relative text-center mb-16 max-w-2xl mx-auto px-4">
        {/* Decorative Patterns */}
        <DotPattern className="absolute -top-8 -right-8 w-32 h-32 text-primary/20" />
        <DotPattern className="absolute -bottom-8 -left-8 w-32 h-32 text-primary/20" />

        <Heading as="h2" size="h2" className="mb-4 relative z-10">
          مسیر درمان شما
        </Heading>
        <Paragraph size="lg" className="relative z-10">
          یک فرآیند علمی و شخصی‌سازی‌شده برای رسیدن به بهترین نتیجه
        </Paragraph>
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
