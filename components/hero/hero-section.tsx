import { ArrowLeft, Droplet, Apple, HeartPulse } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function HeroSection() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full pt-8">
      {/* Right Side: Text Content (RTL) */}
      <div className="flex flex-col items-start gap-8 lg:w-1/2 z-10">
        <BadgePill>تغذیه علمی • سلامت پایدار</BadgePill>

        <Heading as="h1" size="h1" className="text-foreground leading-[1.2]">
          تغذیه شخصی‌سازی شده <br />
          برای کنترل بهتر <span className="text-primary">دیابت</span> <br />و
          سلامتی <span className="text-primary">پایدار</span> شما
        </Heading>

        <Paragraph size="lg" className="max-w-[480px]">
          با برنامه‌های غذایی علمی و متناسب با شرایط شما، سلامت‌تان را از امروز
          بسازید.
        </Paragraph>

        <div className="flex flex-wrap items-center gap-4 mt-2">
          <Button variant="pillPrimary" size="pill" className="gap-2">
            رزرو مشاوره
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="pillSecondary"
            size="pill"
            className="gap-2 bg-white/50 hover:bg-white/80"
          >
            بیشتر بدانید
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* Left Side: Image and Floating Cards (RTL) */}
      <div className="relative flex justify-center lg:w-1/2 mt-12 lg:mt-0">
        {/* The background large circle for image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />

        {/* Doctor Image */}
        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] z-10 flex items-end justify-center">
          <div className="w-full h-full bg-gradient-to-t from-primary/20 to-transparent rounded-[100px] overflow-hidden flex items-end">
            <Image
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
              alt="Doctor"
              width={400}
              height={500}
              className="object-cover w-full h-full object-top"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Floating Cards */}
        <GlassCard className="absolute top-[10%] -right-4 md:-right-12 z-20 flex items-center gap-4 p-3 pr-4 rounded-2xl w-max shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <div className="flex flex-col items-start gap-0.5">
            <span className="font-bold text-sm text-foreground">
              مدیریت دیابت
            </span>
            <span className="text-[10px] text-muted-foreground">
              کنترل قند خون با تغذیه اصولی
            </span>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
            <Droplet className="w-5 h-5 fill-primary/20" />
          </div>
        </GlassCard>

        <GlassCard className="absolute top-[45%] -right-8 md:-right-20 z-20 flex items-center gap-4 p-3 pr-4 rounded-2xl w-max shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex flex-col items-start gap-0.5">
            <span className="font-bold text-sm text-foreground">
              کاهش وزن سالم
            </span>
            <span className="text-[10px] text-muted-foreground">
              کاهش وزن پایدار بدون محرومیت
            </span>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
            <Apple className="w-5 h-5 fill-primary/20" />
          </div>
        </GlassCard>

        <GlassCard className="absolute bottom-[15%] -right-4 md:-right-12 z-20 flex items-center gap-4 p-3 pr-4 rounded-2xl w-max shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="flex flex-col items-start gap-0.5">
            <span className="font-bold text-sm text-foreground">
              سلامت قلب و عروقی
            </span>
            <span className="text-[10px] text-muted-foreground">
              بهبود جریان خون و فشار خون
            </span>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
            <HeartPulse className="w-5 h-5" />
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
