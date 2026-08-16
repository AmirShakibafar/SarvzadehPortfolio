"use client";

import React, { useSyncExternalStore } from "react";
import { JOURNEY_STEPS } from "./constants/journey";
import { JourneyScrollContainer } from "./components/desktop/journey-scroll-container";
import { JourneyScrollContainerMobile } from "./components/mobile/journey-scroll-container-mobile";

function subscribe(callback: () => void) {
  const mql = window.matchMedia("(max-width: 767px)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export const JourneySection: React.FC = () => {
  const isMobile = useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(max-width: 767px)").matches,
    () => null,
  );

  // SSR / Hydration Fallback
  if (isMobile === null) {
    return <div className="min-h-screen w-full" />;
  }

  const formattedSteps = JOURNEY_STEPS.map((step) => {
    const { icon: Icon, id, ...rest } = step;
    return {
      ...rest,
      icon: <Icon className="h-5 w-5 text-primary" />,
    };
  });

  return (
    <div className="relative">
      {isMobile ? (
        <JourneyScrollContainerMobile steps={formattedSteps} />
      ) : (
        <JourneyScrollContainer steps={formattedSteps} />
      )}
    </div>
  );
};
