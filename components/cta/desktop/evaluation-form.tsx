import React from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { InteractiveForm } from "./interactive-form";
import { EVALUATION_QUESTIONS } from "../evaluation-constants";

export function EvaluationForm() {
  return (
    <div className="relative isolate w-full">
      {/* Background Blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40"
        aria-hidden="true"
      />

      {/* 
        Exact simulated glass trick:
        1. bg-white/10 + specific borders
        2. overflow-hidden for the inner fake gradient
      */}
      <GlassCard className="relative z-10 flex min-h-[420px] flex-col overflow-hidden rounded-[2rem] border border-white/30 bg-white/10 p-6 md:p-8 lg:p-10">
        {/* Fake glass gradient layer */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent"
          aria-hidden="true"
        />

        {/* Content Container (z-10 ensures it sits above the fake gradient) */}
        <div className="relative z-10 flex flex-1 flex-col">
          <InteractiveForm questions={EVALUATION_QUESTIONS} />
        </div>
      </GlassCard>
    </div>
  );
}
