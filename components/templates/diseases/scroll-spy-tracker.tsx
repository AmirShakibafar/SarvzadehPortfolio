"use client";

import React, { useEffect, useState } from "react";
import { ScrollProgressIndicator } from "./scroll-indicator";
import type { FeaturedDisease } from "./types";

interface ScrollSpyTrackerProps {
  featuredDiseases: FeaturedDisease[];
}

export function ScrollSpyTracker({ featuredDiseases }: ScrollSpyTrackerProps) {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    // Collect all the IDs we want to track
    const sectionIds = [
      "hero",
      "mechanism",
      ...featuredDiseases.map((d) => d.id),
      "library",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible intersecting section
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Triggers when element is near the middle of the screen
        threshold: 0,
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [featuredDiseases]);

  return (
    <ScrollProgressIndicator 
      activeSection={activeSection} 
      featuredDiseases={featuredDiseases} 
    />
  );
}