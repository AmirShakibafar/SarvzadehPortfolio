"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface HeroActionsProps {
  firstDiseaseId?: string;
}

export function HeroActions({ firstDiseaseId }: HeroActionsProps) {
  const scrollToDiseases = () => {
    if (firstDiseaseId) {
      document
        .getElementById(firstDiseaseId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToLibrary = () => {
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex w-full max-w-full flex-col items-center gap-3 lg:flex-row lg:gap-4">
      {firstDiseaseId && (
        <Button
          size="pill"
          variant="pillPrimary"
          className="flex w-full items-center justify-center gap-2 px-8 lg:w-auto"
          onClick={scrollToDiseases}
        >
          <span>بررسی بیماری‌ها</span>
          <ArrowLeft className="h-4 w-4" />
        </Button>
      )}

      <Button
        size="pill"
        variant="pillSecondary"
        className="w-full justify-center px-8 lg:w-auto"
        onClick={scrollToLibrary}
      >
        کتابخانه مرجع
      </Button>
    </div>
  );
}
