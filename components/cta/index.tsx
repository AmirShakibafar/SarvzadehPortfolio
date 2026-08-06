"use client";

import React from "react";
// Desktop Components
import { CtaInfo } from "./desktop/cta-info";
import { EvaluationForm } from "./desktop/evaluation-form";
import { CtaFeatures } from "./desktop/cta-features";
// Mobile Components (Adjust the import paths if they are in the same folder)
import { CtaInfoMobile } from "./mobile/cta-info-mobile";
import { EvaluationFormMobile } from "./mobile/evaluation-form-mobile";
import { CtaFeaturesMobile } from "./mobile/cta-features-mobile";

export default function CtaSection() {
  return (
    <section
      dir="rtl"
      // Added overflow-hidden to prevent the large SVG blobs from causing horizontal scrollbars
      className="relative py-8 lg:py-24 max-w-7xl mx-auto overflow-hidden isolate"
    >
      

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* --- DESKTOP VIEW (Large screens and up) --- */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <CtaInfo />
            <EvaluationForm />
          </div>
          <CtaFeatures />
        </div>

        {/* --- MOBILE VIEW (Tablets and phones) --- */}
        <div className="block lg:hidden space-y-12">
          <div className="flex flex-col gap-10 items-center">
            <CtaInfoMobile />
            <EvaluationForm />

          </div>
          <CtaFeaturesMobile />
        </div>
      </div>
    </section>
  );
}
