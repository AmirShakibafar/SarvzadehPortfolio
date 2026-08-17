import Link from "next/link";
import { Shield, Activity, HeartPulse, Leaf, ArrowLeft } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { GlassCard } from "@/components/ui/glass-card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ScrollTrigger } from "@/components/ui/scroll-trigger";
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

        <ScrollTrigger className="relative w-full max-w-7xl mx-auto pt-8 scroll-stagger-group">
          <DotPattern className="hidden lg:block absolute -left-8 -bottom-8 h-48 w-48 opacity-40 pointer-events-none" />
          <DotPattern className="hidden lg:block absolute -right-8 -top-8 h-32 w-32 opacity-40 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-8 relative z-10">
            {specialtiesData.map((item, index) => {
              const Icon = item.icon;

              const CardContent = (
                <div className="relative h-full pt-7 group">
                  <div
                    className={cn(
                      "absolute top-0 right-6 z-20 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background transition-colors duration-300",
                      item.isActive
                        ? "bg-white text-primary shadow-sm md:group-hover:bg-primary md:group-hover:text-white"
                        : "bg-slate-100 text-slate-400",
                    )}
                  >
                    <Icon className="h-6 w-6 transition-transform duration-300 md:group-hover:scale-110" />
                  </div>

                  <GlassCard
                    className={cn(
                      "relative flex h-full flex-col p-6 pt-9 text-right transition-[background-color,border-color,box-shadow,transform] duration-300",
                      item.isActive
                        ? "bg-white/40 border-white/60 md:group-hover:bg-white/60 md:group-hover:border-white/80 md:group-hover:shadow-lg md:group-hover:shadow-black/5"
                        : "bg-white/20 border-white/30 opacity-70",
                    )}
                    style={{
                      opacity: 0.99,
                    }}
                  >
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
                          <ArrowLeft className="h-4 w-4 transition-transform duration-300 md:group-hover:-translate-x-1" />
                        </div>
                      ) : (
                        <span className="text-sm font-medium text-slate-400">
                          به‌زودی
                        </span>
                      )}
                    </div>
                  </GlassCard>
                </div>
              );

              return item.isActive ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="stagger-item block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl active:scale-[0.98] transition-transform"
                  style={{ animationDelay: `${200 + index * 340}ms` }}
                >
                  {CardContent}
                </Link>
              ) : (
                <div
                  key={item.id}
                  className="stagger-item block h-full cursor-default"
                  aria-disabled="true"
                  style={{ animationDelay: `${200 + index * 340}ms` }}
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
}
