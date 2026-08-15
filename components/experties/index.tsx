import Link from "next/link";
import { Shield, Activity, HeartPulse, Leaf, ArrowLeft } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { GlassCard } from "@/components/ui/glass-card";
const specialtiesData = [
  {
    id: "autoimmune",
    title: "بیماری‌های خودایمنی",
    description:
      "مدیریت بیماری‌های مرتبط با سیستم ایمنی از جمله ام‌اس، میاستنی گراویس، پسوریازیس و ویتیلیگو.",
    icon: Shield,
    href: "/diseases/autoimmune",
    isActive: true,
  },
  {
    id: "cancer",
    title: "سرطان",
    description:
      "پشتیبانی ساختاریافته برای انواع سرطان‌ها نظیر ملانوما، سرطان پروستات و سرطان پستان.",
    icon: HeartPulse,
    href: "/diseases/cancer",
    isActive: true,
  },
  {
    id: "hormonal-metabolic",
    title: "هورمونی - متابولیک",
    description:
      "کنترل شرایط فیزیولوژیک شامل فیبروم رحم، اندومتریوز، سندروم تخمدان پلی‌کیستیک (PCOS) و سندروم متابولیک.",
    icon: Activity,
    href: "/diseases/hormonal-metabolic",
    isActive: true,
  },
  {
    id: "allergy",
    title: "آلرژی و حساسیت",
    description:
      "تنظیم و بهبود واکنش‌های سیستمیک مرتبط با آسم، حساسیت‌های پوستی و سندرم MCAS.",
    icon: Leaf,
    href: "/diseases/allergy",
    isActive: true,
  },
];
export function SpecialtiesSection() {
  return (
    <section className="relative mb-12 lg:mb-16 isolate w-full px-6 lg:px-14 max-w-7xl mx-auto">
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] md:h-[700px] md:w-[700px] opacity-15 md:opacity-20 -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      <div className="mb-8 lg:mb-12 flex flex-col items-center text-center space-y-2 lg:space-y-3 relative z-10">
        <span className="inline-block text-xs lg:text-sm font-semibold tracking-wide text-primary">
          تخصص‌های درمانی
        </span>
        <Heading className="text-xl lg:text-3xl font-extrabold leading-tight text-foreground">
          زمینه‌های تخصصی مشاوره
        </Heading>
        <Paragraph className="max-w-2xl text-slate-600 text-sm lg:text-base">
          طراحی مسیر درمانی مبتنی بر جدیدترین مقالات علمی برای مدیریت و بهبود
          شرایط بالینی زیر.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 relative z-10">
        {specialtiesData.map((item) => {
          const Icon = item.icon;

          const CardContent = (
            <GlassCard
              className={`h-full flex flex-col p-5 lg:p-6 text-right transition-all duration-300 ${
                item.isActive ? "group hover:-translate-y-1" : "opacity-80"
              }`}
            >
              <div
                className={`mb-4 flex h-11 w-11 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                  item.isActive
                    ? "bg-primary/10 text-primary group-hover:bg-primary/20"
                    : "bg-slate-100/60 text-slate-400"
                }`}
              >
                <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
              </div>

              <h3
                className={`mb-2.5 text-lg lg:text-xl font-bold ${
                  item.isActive ? "text-slate-900" : "text-slate-500"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`text-sm leading-relaxed flex-grow ${
                  item.isActive ? "text-slate-600" : "text-slate-400"
                }`}
              >
                {item.description}
              </p>

              <div className="mt-6 flex items-center justify-start">
                {item.isActive ? (
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                    <span>اطلاعات بیشتر</span>
                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  </div>
                ) : (
                  <span className="text-sm font-medium text-slate-400">
                    به‌زودی
                  </span>
                )}
              </div>
            </GlassCard>
          );

          return item.isActive ? (
            <Link
              key={item.id}
              href={item.href}
              className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-[2rem]"
            >
              {CardContent}
            </Link>
          ) : (
            <div
              key={item.id}
              className="block h-full cursor-default"
              aria-disabled="true"
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
