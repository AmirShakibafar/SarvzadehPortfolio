// ============================================================================
// RIGHT-SIDE PROGRESS INDICATOR

import { cn } from "@/lib/utils";
import { FeaturedDisease } from "./types";

// ============================================================================
export function ScrollProgressIndicator({
  activeSection,
  featuredDiseases,
}: {
  activeSection: string;
  featuredDiseases: FeaturedDisease[];
}) {
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

  return (
    <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-50">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className="group relative flex items-center justify-center w-6 h-6 focus:outline-none"
            aria-label={`Scroll to ${section.label}`}
          >
            <div
              className={cn(
                "transition-all duration-500 rounded-full",
                isActive
                  ? "w-2.5 h-2.5 bg-primary   "
                  : "w-1.5 h-1.5 bg-slate-300 group-hover:bg-primary/50 group-hover:scale-150",
              )}
            />
            <div
              className={cn(
                "absolute right-8 whitespace-nowrap text-xs font-medium transition-all duration-500 px-3 py-1.5 rounded-full",
                isActive
                  ? "opacity-100 translate-x-0 text-primary bg-primary/5   "
                  : "opacity-0 translate-x-4 text-slate-400 group-hover:opacity-100 group-hover:translate-x-2",
              )}
            >
              {section.label}
            </div>
          </button>
        );
      })}
    </div>
  );
}
