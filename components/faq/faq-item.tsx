"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Paragraph } from "@/components/ui/paragraph";

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlassCard className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white/60 to-white/20 transition-all hover:from-white/70 hover:to-white/30">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 p-5 text-right focus:outline-none"
        aria-expanded={isOpen}
      >
        <h4 className="text-sm font-bold text-slate-900 md:text-base">
          {question}
        </h4>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="h-4 w-4 text-primary" />
        </div>
      </button>

      {/* 
        Pure CSS Height Animation: 
        Using grid-template-rows from 0fr to 1fr replicates Framer Motion's AnimatePresence height.
      */}
      <div
        className={`grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-0">
            <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
            <Paragraph className="text-sm leading-7 text-slate-600">
              {answer}
            </Paragraph>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
