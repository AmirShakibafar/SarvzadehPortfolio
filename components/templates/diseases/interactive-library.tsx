"use client";

import React, { useState } from "react";
import { Check, ChevronDown, ChevronUp, Search } from "lucide-react";
import { Paragraph } from "@/components/ui/paragraph";
import { cn } from "@/lib/utils";

const INITIAL_LIMIT = 3;

interface InteractiveLibraryProps {
  keywords: string[];
  children: React.ReactNode;
}

export function InteractiveLibrary({
  keywords,
  children,
}: InteractiveLibraryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsExpanded(false);
  };

  const filteredKeywords = keywords.filter((keyword) =>
    keyword.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const hasMore = filteredKeywords.length > INITIAL_LIMIT;

  return (
    <>
      {/* Header & Search */}
      <div className="stagger-item mb-10 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end lg:gap-12">
        {/* Server-rendered static header injected here */}
        {children}

        <div className="group relative w-full lg:max-w-sm">
          {/* Right-aligned icon for RTL */}
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center transition-colors">
            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary" />
          </div>
          <input
            type="text"
            placeholder="جستجو در بین بیماری‌ها..."
            value={searchQuery}
            onChange={handleSearch}
            className="h-14 w-full rounded-full border border-slate-200/80 bg-white/80 pl-6 pr-12 text-slate-900 placeholder:text-slate-400 transition-all hover:bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* List Area */}
      <ul
        className="stagger-item flex min-h-[250px] w-full flex-col"
        style={{ animationDelay: "150ms" }}
      >
        {filteredKeywords.length > 0 ? (
          <>
            {filteredKeywords.map((keyword, index) => {
              // SEO FIX: Do not slice the array. Render all nodes, but hide unexpanded ones with CSS.
              // This guarantees Google bots index the text inside the HTML payload.
              const isHidden = !isExpanded && index >= INITIAL_LIMIT;

              return (
                <li
                  key={index}
                  className={cn(
                    "group relative -mx-2 items-center justify-between overflow-hidden rounded-xl border-b border-slate-100 px-2 py-4 transition-colors hover:border-primary/20 hover:bg-primary/[0.02] lg:-mx-4 lg:px-4 lg:py-5",
                    isHidden ? "hidden" : "flex",
                  )}
                >
                  <div className="z-10 flex items-center gap-4 lg:gap-6">
                    <span className="font-mono text-sm text-slate-300 transition-colors group-hover:text-primary/40">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-base font-medium text-slate-700 transition-colors group-hover:text-primary lg:text-lg">
                      {keyword}
                    </span>
                  </div>
                  {/* Subtle translation for RTL interactions */}
                  <Check className="z-10 h-5 w-5 -translate-x-2 text-slate-300 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100 lg:-translate-x-4" />
                </li>
              );
            })}

            {hasMore && (
              <div className="mt-8 flex w-full justify-center">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition-all hover:border-primary/40 hover:bg-primary/[0.02] hover:text-primary active:scale-95 lg:w-auto lg:py-3"
                >
                  {isExpanded ? (
                    <>
                      مشاهده کمتر
                      <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    </>
                  ) : (
                    <>
                      مشاهده سایر موارد (
                      {filteredKeywords.length - INITIAL_LIMIT} مورد دیگر)
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 py-16 text-center">
            <Search className="mb-3 h-8 w-8 text-slate-300" />
            <Paragraph className="text-sm text-slate-500 lg:text-base">
              بیماری با این نام یافت نشد.
            </Paragraph>
          </div>
        )}
      </ul>
    </>
  );
}
