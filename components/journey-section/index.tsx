import React from "react";
import { JOURNEY_STEPS } from "./constants/journey";
import { JourneyStep } from "./components/journey-step";
import { JourneyScrollContainer } from "./components/journey-scroll-container";

export const JourneySection: React.FC = () => {
  return (
    <section className="relative">
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
