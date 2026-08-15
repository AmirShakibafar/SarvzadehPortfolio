import Link from "next/link";
import { Shield, Activity, HeartPulse, Leaf, ArrowLeft } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { GlassCard } from "@/components/ui/glass-card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

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
  {
    id: "cancer",
    title: "سرطان",
    description:
      "پشتیبانی ساختاریافته برای انواع سرطان‌ها نظیر ملانوما، سرطان پروستات و سرطان پستان.",
    icon: HeartPulse,
    href: "/diseases/cancer",
    isActive: false,
  },
];

export function SpecialtiesSection() {
  return (
    <section className="relative z-10 w-full min-w-0 overflow-hidden py-16">
      {/* Global Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[100%] w-[100%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full min-w-0 max-w-7xl px-6 lg:px-14">
        <div className="mx-auto mb-8 max-w-2xl text-center relative z-10">
          <span className="mb-4 inline-block text-xs lg:text-sm font-semibold tracking-wide text-primary">
            تخصص‌های درمانی
          </span>
          <Heading size="h2" className="mb-4">
            زمینه‌های تخصصی مشاوره
          </Heading>
          <Paragraph size="sm" className="text-slate-600">
            طراحی مسیر درمانی مبتنی بر جدیدترین مقالات علمی برای مدیریت و بهبود
            شرایط بالینی زیر.
          </Paragraph>
        </div>

        <div className="relative w-full max-w-7xl mx-auto pt-8">
          {/* Decorative dots - Hidden on mobile */}
          <DotPattern className="hidden lg:block absolute -left-8 -bottom-8 h-48 w-48 opacity-40" />
          <DotPattern className="hidden lg:block absolute -right-8 -top-8 h-32 w-32 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-12 relative z-10">
            {specialtiesData.map((item) => {
              const Icon = item.icon;

              const CardContent = (
                <GlassCard
                  className={cn(
                    "relative flex h-full flex-col p-6 pt-10 text-right transition-all duration-300",
                    item.isActive
                      ? "group bg-white/40 border-white/60 hover:bg-white/60 hover:border-white/80 hover:shadow-lg hover:shadow-black/5"
                      : "bg-white/20 border-white/30 opacity-70",
                  )}
                >
                  {/* Anchored Icon */}
                  <div
                    className={cn(
                      "absolute -top-7 right-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background transition-colors duration-300",
                      item.isActive
                        ? "bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white"
                        : "bg-slate-100 text-slate-400",
                    )}
                  >
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3
                    className={cn(
                      "mb-3 text-lg lg:text-xl font-bold",
                      item.isActive ? "text-slate-800" : "text-slate-500",
                    )}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={cn(
                      "text-sm leading-relaxed flex-grow",
                      item.isActive ? "text-slate-600" : "text-slate-400",
                    )}
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
                  className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
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
        </div>
      </div>
    </section>
  );
}
