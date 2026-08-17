import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { HeroImage } from "./hero-image";

export function HeroSection() {
  return (
    <main
      className="
        flex flex-col-reverse lg:flex-row-reverse
        items-center justify-center lg:justify-between
        w-full gap-8 md:gap-12 lg:gap-8
        min-h-[calc(100svh-80px)]
        py-6
        isolate
      "
    >
      {/* Right Side: Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-right gap-5 md:gap-6 lg:gap-8 w-full md:max-w-2xl lg:w-[45%] z-10 shrink-0">
        <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
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
        </div>

        <div
          className="animate-fade-up"
          style={{ animationDelay: "650ms" }} // 200ms + 450ms stagger
        >
          <Paragraph size="lg" className="text-sm md:text-base max-w-[480px]">
            با برنامه‌های غذایی علمی و متناسب با شرایط شما، به کنترل علائم ام‌اس
            کمک کرده و سلامت‌تان را بهبود ببخشید.
          </Paragraph>
        </div>

        {/* Buttons */}
        <div
          className="animate-fade-up flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mt-2"
          style={{ animationDelay: "1100ms" }} // 650ms + 450ms stagger
        >
          <Button
            variant="pillPrimary"
            size="pill"
            className="gap-2 px-5 text-sm md:text-base"
          >
            <Link
              href="/#contact"
              className="flex items-center gap-2 whitespace-nowrap"
            >
              رزرو مشاوره
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
            </Link>
          </Button>

          <Button
            variant="pillSecondary"
            size="pill"
            className="gap-2 bg-white/50 px-5 text-sm md:text-base hover:bg-white/80"
          >
            <Link
              href="/#about"
              className="flex items-center gap-2 whitespace-nowrap"
            >
              بیشتر بدانید
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground shrink-0" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Left Side: Image Content */}
      <div
        className="relative flex w-full items-end justify-center md:w-[80%] lg:w-[55%] isolate animate-fade-up"
        style={{
          animationDelay: "300ms",
          animationDuration: "800ms", // Overriding the default 0.6s to match original 0.8s
        }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 md:h-[750px] md:w-[750px] lg:h-[1000px] lg:w-[1000px]"
          aria-hidden="true"
        />

        <HeroImage />
      </div>
    </main>
  );
}
