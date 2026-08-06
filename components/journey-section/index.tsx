import React from "react";
import { JOURNEY_STEPS } from "./constants/journey";
import { JourneyScrollContainer } from "./components/desktop/journey-scroll-container";
import { JourneyScrollContainerMobile } from "./components/mobile/journey-scroll-container-mobile";

export const JourneySection: React.FC = () => {
  // Map the raw data to instantiate the icon component for each step
  const formattedSteps = JOURNEY_STEPS.map((step) => {
    const { icon: Icon, id, ...rest } = step;

    return {
      ...rest,
      icon: <Icon className="w-5 h-5 text-primary" />,
    };
  });

  return (
    <div className="relative">
      <JourneyScrollContainer steps={formattedSteps} />
      <JourneyScrollContainerMobile steps={formattedSteps} />
    </div>
  );
};
