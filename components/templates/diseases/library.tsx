"use client";

import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Check, ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState } from "react";

const INITIAL_LIMIT = 3;

export function DiseaseLibrary({ keywords }: { keywords: string[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsExpanded(false);
  };

  const filteredKeywords = keywords.filter((keyword) =>
    keyword.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const displayedKeywords = isExpanded
    ? filteredKeywords
    : filteredKeywords.slice(0, INITIAL_LIMIT);

  const hasMore = filteredKeywords.length > INITIAL_LIMIT;

  return (
    <section
      id="library"
      className="py-16 lg:py-24 relative w-full z-10 flex items-center min-h-[60vh]"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-14 w-full">
        {/* Header & Search */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-end justify-between mb-10 lg:mb-16">
          <div className="text-right w-full lg:w-auto">
            <Heading size="h2" className="mb-3 lg:mb-4">
              کتابخانه بیماری‌ها
            </Heading>
            <Paragraph className="max-w-md text-slate-600">
              فهرست جامع سایر بیماری‌های مرتبط که در این مرکز مورد بررسی، تشخیص
              و مدیریت قرار می‌گیرند.
            </Paragraph>
          </div>

          <div className="relative w-full lg:max-w-sm group">
            {/* Right-aligned icon for RTL */}
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none transition-colors">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary" />
            </div>
            <input
              type="text"
              placeholder="جستجو در بین بیماری‌ها..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full h-14 pr-12 pl-6 rounded-full bg-white/80   border border-slate-200/80 text-slate-900 placeholder:text-slate-400   focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all hover:bg-white"
            />
          </div>
        </div>

        {/* List Area */}
        <ul className="flex flex-col w-full min-h-[250px]">
          {displayedKeywords.length > 0 ? (
            <>
              {displayedKeywords.map((keyword, index) => (
                <li
                  key={index}
                  className="group flex items-center justify-between py-4 lg:py-5 border-b border-slate-100 hover:border-primary/20 transition-colors cursor-default relative overflow-hidden px-2 lg:px-4 -mx-2 lg:-mx-4 rounded-xl hover:bg-primary/[0.02]"
                >
                  <div className="flex items-center gap-4 lg:gap-6 z-10">
                    <span className="text-slate-300 font-mono text-sm group-hover:text-primary/40 transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-slate-700 font-medium group-hover:text-primary transition-colors text-base lg:text-lg">
                      {keyword}
                    </span>
                  </div>
                  {/* Subtle translation for RTL interactions */}
                  <Check className="w-5 h-5 text-slate-300 opacity-0 -translate-x-2 lg:-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all z-10" />
                </li>
              ))}

              {hasMore && (
                <div className="mt-8 flex justify-center w-full">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group flex items-center justify-center w-full lg:w-auto gap-2 px-6 py-3.5 lg:py-3 rounded-full bg-white border border-slate-200 hover:border-primary/40 hover:bg-primary/[0.02] text-slate-700 hover:text-primary   transition-all font-medium text-sm active:scale-95"
                  >
                    {isExpanded ? (
                      <>
                        مشاهده کمتر
                        <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                      </>
                    ) : (
                      <>
                        مشاهده سایر موارد (
                        {filteredKeywords.length - INITIAL_LIMIT} مورد دیگر)
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="w-full py-16 text-center flex flex-col items-center justify-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
              <Search className="h-8 w-8 text-slate-300 mb-3" />
              <Paragraph className="text-slate-500 text-sm lg:text-base">
                بیماری با این نام یافت نشد.
              </Paragraph>
            </div>
          )}
        </ul>
      </div>
    </section>
  );
}
