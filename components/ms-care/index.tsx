import { JourneySection } from "./journey-section";
import { DimensionsSection } from "./dimensions-section";

export default function MSCareSections() {
  return (
    <div className="w-full font-sans text-right overflow-hidden">
      <JourneySection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border/30 to-transparent my-10" />
      <DimensionsSection />
    </div>
  );
}
