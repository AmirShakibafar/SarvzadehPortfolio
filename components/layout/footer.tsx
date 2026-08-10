import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/30 bg-white/20 backdrop-blur-md w-full">
      <div className="absolute inset-x-0 top-0 h-96 bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto w-full px-14 py-14 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-md">
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

            <p className="leading-8 text-slate-600">
              همراه شما برای داشتن سبک زندگی سالم‌تر با برنامه‌های تغذیه
              شخصی‌سازی‌شده.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">دسترسی سریع</h4>

            <ul className="flex flex-col space-y-3 text-slate-600">
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
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/30 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</span>

          <span>ساخته شده با ❤️ توسط امیر شکیبافر</span>
        </div>
      </div>
    </footer>
  );
}
