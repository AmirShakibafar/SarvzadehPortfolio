import { JOURNEY_STEPS } from "./constants/journey";
import { JourneyScrollContainer } from "./components/desktop/journey-scroll-container";
import { JourneyScrollContainerMobile } from "./components/mobile/journey-scroll-container-mobile";

export const JourneySection = () => {
  const formattedSteps = JOURNEY_STEPS.map((step) => {
    const { icon: Icon, id, ...rest } = step;
    return {
      ...rest,
      icon: <Icon className="h-5 w-5 text-primary" />,
    };
  });

  return (
    <div className="relative">
      <div className="hidden md:block">
        <JourneyScrollContainer steps={formattedSteps} />
      </div>

      <div className="block md:hidden">
        <JourneyScrollContainerMobile steps={formattedSteps} />
      </div>
    </div>
  );
};
