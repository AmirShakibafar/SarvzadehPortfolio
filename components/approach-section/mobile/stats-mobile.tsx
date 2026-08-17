import { DotPattern } from "../../ui/dot-pattern";

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

export function DecoratedStatsGridMobile() {
  return (
    <div className="relative flex items-center justify-center isolate">
      <div className="relative w-full animate-fade-up">
        <DotPattern className="-right-4 -top-4 h-24 w-24 opacity-20" />

        <div className="grid w-full grid-cols-2 gap-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`relative h-full isolate ${
                index === 2 ? "col-span-2" : "col-span-1"
              }`}
            >
              {/* Blob placed individually behind each card */}
              <div
                className="absolute top-1/2 left-1/2 -z-10 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
                aria-hidden="true"
              />

              <div
                className={`
                  relative flex h-full flex-col items-center justify-center p-6 text-center 
                  rounded-[24px] overflow-hidden
                    
                  ${
                    stat.highlight
                      ? "bg-white/40 border border-primary/20"
                      : "bg-white/20 border border-white/30"
                  }
                `}
              >
                {/* Surface Glare Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/20 to-transparent pointer-events-none" />

                {/* Z-Index Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className={`text-4xl font-extrabold tracking-tight ${
                      stat.highlight ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-3 text-[13px] font-bold text-foreground">
                    {stat.title}
                  </div>
                  <div className="mt-1 whitespace-pre-line text-[11px] leading-5 text-muted-foreground/80">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
