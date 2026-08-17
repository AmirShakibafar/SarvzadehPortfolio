import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { HeroImageMobile } from "./hero-image-mobile";

export function HeroSectionMobile() {
  return (
    <main
      className="
        flex flex-col-reverse
        items-center justify-center
        w-full gap-8 md:gap-12
        min-h-[calc(100svh-80px)]
        py-6
        isolate
      "
    >
      {/* Right Side: Text Content */}
      <div className="flex flex-col items-center text-center gap-5 md:gap-6 max-w-3xl z-10 shrink-0 animate-fade-up">
        <div>
          <Heading
            as="h1"
            size="h1"
            className="text-3xl md:text-4xl text-foreground leading-[1.3]"
          >
            تغذیه شخصی‌سازی شده <br />
            برای مدیریت بهتر <span className="text-primary">ام‌اس</span> <br />و
            بهبود کیفیت <span className="text-primary">زندگی</span> شما
          </Heading>
        </div>

        <div>
          <Paragraph size="lg" className="text-sm md:text-base max-w-[480px]">
            با برنامه‌های غذایی علمی و متناسب با شرایط شما، به کنترل علائم ام‌اس
            کمک کرده و سلامت‌تان را بهبود ببخشید.
          </Paragraph>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-2">
          <Button
            variant="pillPrimary"
            size="pill"
            className="gap-2 text-sm md:text-base"
          >
            رزرو مشاوره
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button
            variant="pillSecondary"
            size="pill"
            className="gap-2 bg-white/50 hover:bg-white/80 text-sm md:text-base"
          >
            بیشتر بدانید
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* Left Side: Image Content */}
      <div className="relative flex justify-center items-end w-full md:w-[80%] isolate animate-fade-up">
        <div
          className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] md:h-[750px] md:w-[750px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
          aria-hidden="true"
        />

        <HeroImageMobile />
      </div>
    </main>
  );
}
