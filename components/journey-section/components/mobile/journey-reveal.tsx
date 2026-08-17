"use client";

import React, { useEffect, useRef } from "react";

interface JourneyRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function JourneyReveal({
  children,
  className = "",
}: JourneyRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Respect reduced-motion users without doing unnecessary observation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        element.classList.add("is-visible");
        observer.disconnect();
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-stagger-group ${className}`}>
      {children}
    </div>
  );
}
