import { ArrowLeft, CheckCircle, User, Activity, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { BadgePill } from "@/components/ui/badge-pill";
import { NavItem } from "@/components/ui/nav-item";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-8 font-sans">
      <main className="flex w-full max-w-5xl flex-col gap-16 rounded-3xl bg-card p-12 shadow-sm border">
        {/* Navigation Items Showcase */}
        <section className="flex flex-col gap-4 border-b pb-8">
          <h2 className="text-xl font-bold text-foreground">
            1. Navigation Items
          </h2>
          <div className="flex gap-8 rounded-xl bg-muted/50 p-6">
            <NavItem href="#" label="صفحه اصلی" isActive={true} />
            <NavItem href="#" label="خدمات" />
            <NavItem href="#" label="درباره من" />
            <NavItem href="#" label="تماس با من" />
          </div>
        </section>

        {/* Badge Showcase */}
        <section className="flex flex-col gap-4 border-b pb-8">
          <h2 className="text-xl font-bold text-foreground">2. Badge Pill</h2>
          <div className="flex items-start rounded-xl bg-primary/5 p-6">
            <BadgePill>تغذیه علمی • سلامت پایدار</BadgePill>
          </div>
        </section>

        {/* Buttons Showcase */}
        <section className="flex flex-col gap-4 border-b pb-8">
          <h2 className="text-xl font-bold text-foreground">
            3. Button Variants
          </h2>
          <div className="flex gap-4 rounded-xl bg-muted/50 p-6">
            <Button variant="pillPrimary" size="pill" className="gap-2">
              رزرو مشاوره
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <Button variant="pillSecondary" size="pill" className="gap-2">
              بیشتر بدانید
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Glass Cards Showcase */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-foreground">
            4. Glass Cards (Features)
          </h2>

          <div className="grid grid-cols-1 gap-6 rounded-xl bg-gradient-to-br from-primary/10 to-background p-8 md:grid-cols-4">
            <GlassCard className="flex flex-col items-center gap-4 p-6 text-center">
              <CheckCircle className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">
                  علمی و مبتنی بر شواهد
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  برنامه‌های تغذیه بر پایه جدیدترین تحقیقات
                </p>
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col items-center gap-4 p-6 text-center">
              <User className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">
                  کاملاً شخصی‌سازی شده
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  متناسب با شرایط جسمی و اهداف شما
                </p>
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col items-center gap-4 p-6 text-center">
              <Activity className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">پیگیری و پشتیبانی</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  همراهی مستمر تا رسیدن به نتیجه دلخواه
                </p>
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col items-center gap-4 p-6 text-center">
              <Lock className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">
                  اطلاعات امن و محرمانه
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  اطلاعات شما کاملاً محرمانه خواهد ماند
                </p>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
    </div>
  );
}
