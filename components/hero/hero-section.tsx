import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { HeroImage } from "./HeroImage";

export function HeroSection() {
  return (
    <main
      className="
        flex flex-col-reverse lg:flex-row-reverse
        items-center justify-center lg:justify-between 
        w-full gap-8 md:gap-12 lg:gap-8 
        min-h-[calc(100svh-80px)]
        py-6 md:py-12 lg:py-0
      "
    >
      {/* Right Side: Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-right gap-5 md:gap-6 lg:gap-8 w-full md:max-w-2xl lg:w-[45%] z-10 shrink-0">
        <Heading
          as="h1"
          size="h1"
          className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.3] lg:leading-[1.2]"
        >
          تغذیه شخصی‌سازی شده <br className="hidden lg:block" />
          برای مدیریت بهتر <span className="text-primary">ام‌اس</span>{" "}
          <br className="hidden lg:block" />و بهبود کیفیت{" "}
          <span className="text-primary">زندگی</span> شما
        </Heading>

        <Paragraph size="lg" className="text-sm md:text-base max-w-[480px]">
          با برنامه‌های غذایی علمی و متناسب با شرایط شما، به کنترل علائم ام‌اس
          کمک کرده و سلامت‌تان را بهبود ببخشید.
        </Paragraph>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mt-2">
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
      {/* Removed conflicting min-h classes here */}
      <div className="relative flex justify-center items-end w-full md:w-[80%] lg:w-[55%]">
        <HeroImage src="/images/hero/Hero-Image.png" />
      </div>
    </main>
  );
}
