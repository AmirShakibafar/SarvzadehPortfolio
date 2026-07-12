import {
  Droplet,
  Stethoscope,
  Scale,
  ActivitySquare,
  HeartPulse,
} from "lucide-react";
import { BadgePill } from "@/components/ui/badge-pill";
import { Heading } from "@/components/ui/heading";

export function ConditionsSection() {
  return (
    <section className="flex flex-col items-center gap-8 mt-12 mb-12">
      <Heading as="h2" size="h4" className="text-foreground">
        شرایطی که می‌توانم به شما کمک کنم
      </Heading>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl">
        <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
          <Droplet className="w-4 h-4 text-primary" />
          دیابت نوع ۲
        </BadgePill>

        <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
          <Stethoscope className="w-4 h-4 text-primary" />
          پیش دیابت
        </BadgePill>

        <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
          <Scale className="w-4 h-4 text-primary" />
          کاهش وزن
        </BadgePill>

        <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
          <ActivitySquare className="w-4 h-4 text-primary" />
          سندرم تخمدان پلی‌کیستیک
        </BadgePill>

        <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
          <HeartPulse className="w-4 h-4 text-primary" />
          کلسترول و چربی خون
        </BadgePill>

        <BadgePill className="bg-white hover:bg-primary/5 transition-colors cursor-default py-2.5 px-5 shadow-sm text-foreground border-border/50 gap-3">
          <HeartPulse className="w-4 h-4 text-primary" />
          فشار خون بالا
        </BadgePill>
      </div>
    </section>
  );
}
