import React from "react";
import { JOURNEY_STEPS } from "./constants/journey";
import { JourneyStep } from "./components/journey-step";
import { JourneyScrollContainer } from "./components/journey-scroll-container";

export const JourneySection: React.FC = () => {
  return (
    <JourneyScrollContainer>
      {JOURNEY_STEPS.map((step, index) => {
        // Destructure the icon component so we can render it safely
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
  );
};
