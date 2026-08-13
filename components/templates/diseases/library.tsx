import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { motion } from "framer-motion";
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
      className="py-24 relative z-10 min-h-[70vh] flex items-center"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-14 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between mb-16"
        >
          <div className="text-right">
            <Heading size="h2" className="mb-4">
              کتابخانه بیماری‌ها
            </Heading>
            <Paragraph className="max-w-md">
              فهرست جامع سایر بیماری‌های مرتبط که در این مرکز مورد بررسی، تشخیص
              و مدیریت قرار می‌گیرند.
            </Paragraph>
          </div>

          <div className="relative w-full max-w-sm group">
            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="جستجو در بین بیماری‌ها..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full h-14 pl-6 pr-14 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all hover:bg-white"
            />
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col w-full"
        >
          {displayedKeywords.length > 0 ? (
            <>
              {displayedKeywords.map((keyword, index) => (
                <li
                  key={index}
                  className="group flex items-center justify-between py-6 border-b border-slate-200/60 hover:border-primary/30 transition-colors cursor-default relative overflow-hidden px-4 -mx-4 rounded-xl hover:bg-primary/[0.02]"
                >
                  <div className="flex items-center gap-6 z-10">
                    <span className="text-slate-300 font-mono text-sm group-hover:text-primary/50 transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-slate-700 font-medium group-hover:text-primary transition-colors text-lg">
                      {keyword}
                    </span>
                  </div>
                  <Check className="w-5 h-5 text-slate-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all z-10" />
                </li>
              ))}

              {hasMore && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 hover:border-primary/50 hover:bg-primary/[0.02] text-slate-700 hover:text-primary shadow-sm transition-all font-medium text-sm"
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
            <div className="w-full py-20 text-center flex flex-col items-center justify-center">
              <Search className="h-10 w-10 text-slate-300 mb-4" />
              <Paragraph>بیماری با این نام یافت نشد.</Paragraph>
            </div>
          )}
        </motion.ul>
      </div>
    </section>
  );
}
