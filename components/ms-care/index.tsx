import { JourneySection } from "./journey-section";
import { DimensionsSection } from "./dimensions-section";

// Server component wrapper (no 'use client' needed here)
export default function MSCareSections() {
  return (
    <div
      dir="rtl"
      className="w-full bg-[#FAFAFA] font-sans text-right overflow-hidden"
    >
      <JourneySection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-10" />
      <DimensionsSection />
    </div>
  );
}
