import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { GlassCard } from "../ui/glass-card";

export function Footer() {
  return (
    <footer className="relative border-t border-white/30 bg-white/20 backdrop-blur-md w-full">
      <div className="absolute inset-x-0 top-0 h-96 bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto w-full px-14 py-14 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary shadow-[inset_0_0_12px_rgba(255,255,255,.6)]">
                <Leaf className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">دکتر رضا سرورزاده</h3>
                <p className="text-sm text-slate-600">
                  تغذیه بالینی و رژیم‌درمانی
                </p>
              </div>
            </div>

            <p className="max-w-md leading-8 text-slate-600">
              همراه شما برای داشتن سبک زندگی سالم‌تر با برنامه‌های تغذیه
              شخصی‌سازی‌شده.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">دسترسی سریع</h4>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  خدمات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  درباره من
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  مقالات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  تماس
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">اطلاعات تماس</h4>

            <div className="space-y-3 text-slate-600">
              <p>0912 345 6789</p>
              <p>doctor@example.com</p>
              <p>شیراز، ایران</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/30 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</span>

          <span>طراحی و توسعه توسط Sarvzadeh Studio</span>
        </div>
      </div>
    </footer>
  );
}
