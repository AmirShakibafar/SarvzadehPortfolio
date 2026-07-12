import { CheckCircle, User, Activity, Lock } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export function FeaturesSection() {
  return (
    <section className="w-full mt-12 relative z-20">
      <GlassCard
        intensity="heavy"
        className="grid grid-cols-1 gap-6 p-6 md:grid-cols-4 bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-white"
      >
        <div className="flex flex-col items-center gap-3 p-4 text-center border-b md:border-b-0 md:border-l border-border/50 last:border-0">
          <CheckCircle className="h-7 w-7 text-primary" />
          <div>
            <h3 className="font-bold text-sm text-foreground">
              علمی و مبتنی بر شواهد
            </h3>
            <p className="mt-1 text-[11px] text-muted-foreground">
              برنامه‌های تغذیه بر پایه جدیدترین تحقیقات
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 text-center border-b md:border-b-0 md:border-l border-border/50 last:border-0">
          <User className="h-7 w-7 text-primary" />
          <div>
            <h3 className="font-bold text-sm text-foreground">
              کاملاً شخصی‌سازی شده
            </h3>
            <p className="mt-1 text-[11px] text-muted-foreground">
              متناسب با شرایط جسمی، سبک زندگی و اهداف شما
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 text-center border-b md:border-b-0 md:border-l border-border/50 last:border-0">
          <Activity className="h-7 w-7 text-primary" />
          <div>
            <h3 className="font-bold text-sm text-foreground">
              پیگیری و پشتیبانی
            </h3>
            <p className="mt-1 text-[11px] text-muted-foreground">
              همراهی مستمر تا رسیدن به نتیجه دلخواه
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 p-4 text-center last:border-0">
          <Lock className="h-7 w-7 text-primary" />
          <div>
            <h3 className="font-bold text-sm text-foreground">
              اطلاعات امن و محرمانه
            </h3>
            <p className="mt-1 text-[11px] text-muted-foreground">
              اطلاعات شما کاملاً محرمانه خواهد ماند
            </p>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
