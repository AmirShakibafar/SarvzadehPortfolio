"use client";

import React from "react";
import WhyTrustMeSectionDesktop from "./why-trust-me-section";
import WhyTrustMeSectionMobile from "./why-trust-me-section-mobile";

export default function WhyTrustMeSection() {
  return (
    <>
      {/* Mobile Version */}
      <div className="block lg:hidden">
        <WhyTrustMeSectionMobile />
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <WhyTrustMeSectionDesktop />
      </div>
    </>
  );
}
