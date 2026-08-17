import { DotPattern } from "../../ui/dot-pattern";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollTrigger } from "@/components/ui/scroll-trigger";

const statsData = [
  {
    value: "۱۰+",
    title: "سال تجربه تخصصی",
    description: "در تغذیه بالینی\nو مدیریت ام‌اس",
    highlight: false,
  },
  {
    value: "۵۰۰+",
    title: "ارزیابی تغذیه‌ای",
    description: "همراهی با بیماران\nبا برنامه اختصاصی",
    highlight: false,
  },
  {
    value: "۱۰۰٪",
    title: "برنامه اختصاصی",
    description: "متناسب با شرایط\nهر بیمار",
    highlight: true,
  },
];

export function DecoratedStatsGrid() {
  return (
    <div className="relative flex items-center justify-center lg:col-span-7 lg:mt-0 isolate">
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[150%] opacity-40 w-[150%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      <ScrollTrigger className="relative w-full max-w-2xl scroll-stagger-group">
        <DotPattern className="-right-8 -top-8 h-32 w-32 opacity-40" />
        <DotPattern className="-bottom-8 -left-8 h-32 w-32 opacity-40" />

        <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`relative h-full isolate stagger-item ${
                index === 2 ? "col-span-2 lg:col-span-1" : "col-span-1"
              }`}
              style={{
                // ONLY animation delay here, no opacity override
                animationDelay: `${200 + index * 600}ms`,
              }}
            >
              <div
                className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] opacity-40 -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
                aria-hidden="true"
              />

              <GlassCard
                className={`flex h-full flex-col items-center justify-center p-6 text-center ${
                  stat.highlight ? "border-primary/30 bg-white/50" : ""
                }`}
                style={{
                  // Move the composite layer hack to the inner element
                  opacity: 0.99,
                }}
              >
                <div
                  className={`text-4xl font-extrabold tracking-tight lg:text-5xl ${
                    stat.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="mt-4 text-sm font-bold text-foreground">
                  {stat.title}
                </div>
                <div className="mt-2 whitespace-pre-line text-xs leading-6 text-muted-foreground">
                  {stat.description}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </ScrollTrigger>
    </div>
  );
}
