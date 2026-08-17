"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { FeaturedDisease } from "./types";

// ============================================================================
// PROGRESS INDICATOR (DESKTOP + MOBILE)
// ============================================================================

export function ScrollProgressIndicator({
  activeSection,
  featuredDiseases,
}: {
  activeSection: string;
  featuredDiseases: FeaturedDisease[];
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "hero", label: "معرفی" },
    { id: "mechanism", label: "سازوکار" },
    ...featuredDiseases.map((d) => ({
      id: d.id,
      label: d.name.split(" (")[1]?.replace(")", "") || d.name,
    })),
    { id: "library", label: "کتابخانه بیماری‌ها" },
  ];

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-scroll the mobile horizontal container so the active pill stays in view
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(
        "[data-active='true']",
      ) as HTMLElement;

      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeSection]);

  return (
    <>
      {/* ========================================= */}
      {/* MOBILE VIEW: Horizontal Bottom Glass Bar  */}
      {/* ========================================= */}
      <div className="fixed bottom-6 left-4 right-4 z-50 flex items-center justify-center xl:hidden pointer-events-none">
        <div
          ref={scrollContainerRef}
          dir="rtl"
          className="flex w-full max-w-sm gap-2 overflow-x-auto rounded-full border border-white/60 bg-white/70 p-2 shadow-lg backdrop-blur-md pointer-events-auto snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `.hide-scrollbar::-webkit-scrollbar { display: none; }`,
            }}
          />

          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={`mobile-${section.id}`}
                data-active={isActive}
                onClick={() => handleScroll(section.id)}
                className={cn(
                  "shrink-0 snap-center rounded-full px-4 py-2 text-xs font-medium transition-all duration-300",
                  isActive
                    ? "bg-primary text-white shadow-md"
                    : "text-slate-600 hover:bg-white/50",
                )}
                aria-label={`Scroll to ${section.label}`}
              >
                {section.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================= */}
      {/* DESKTOP VIEW: Vertical Right-Side Dots    */}
      {/* ========================================= */}
      <div className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-6 xl:flex">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={`desktop-${section.id}`}
              onClick={() => handleScroll(section.id)}
              className="group relative flex h-6 w-6 items-center justify-center focus:outline-none"
              aria-label={`Scroll to ${section.label}`}
            >
              <div
                className={cn(
                  "rounded-full transition-all duration-500",
                  isActive
                    ? "h-2.5 w-2.5 bg-primary"
                    : "h-1.5 w-1.5 bg-slate-300 group-hover:scale-150 group-hover:bg-primary/50",
                )}
              />
              <div
                className={cn(
                  "absolute right-8 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-500",
                  isActive
                    ? "translate-x-0 bg-primary/5 text-primary opacity-100"
                    : "translate-x-4 text-slate-400 opacity-0 group-hover:translate-x-2 group-hover:opacity-100",
                )}
              >
                {section.label}
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
