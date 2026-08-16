import Link from "next/link";
import { Leaf, ArrowLeft } from "lucide-react";

const diseaseCategories = [
  {
    href: "/diseases/autoimmune",
    label: "بیماری‌های خودایمنی",
  },
  {
    href: "/diseases/cancer",
    label: "بیماری‌های سرطانی",
  },
  {
    href: "/diseases/hormonal-metabolic",
    label: "هورمونی و متابولیک",
  },
  {
    href: "/diseases/allergy",
    label: "آلرژی و اختلالات ایمنی",
  },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-white/60 to-primary/10">
      <div className="relative mx-auto w-full max-w-7xl px-6 py-14 md:px-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-md lg:col-span-2">
            <Link href="/" className="mb-5 flex w-fit items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary shadow-[inset_0_0_12px_rgba(13,220,213,0.15)]">
                <Leaf className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">دکتر رضا سرورزاده</h3>

                <p className="text-sm text-slate-600">
                  تغذیه بالینی و رژیم‌درمانی
                </p>
              </div>
            </Link>

            <p className="max-w-lg leading-8 text-slate-600">
              همراه شما برای بهبود سلامت و کیفیت زندگی با رویکردی علمی،
              شخصی‌سازی‌شده و مبتنی بر شواهد در تغذیه و رژیم‌درمانی.
            </p>

            <Link
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/70"
            >
              دریافت مشاوره
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>

          {/* Main Navigation */}
          <div>
            <h4 className="mb-5 font-semibold text-slate-900">دسترسی سریع</h4>

            <ul className="flex flex-col gap-3 text-slate-600">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  صفحه اصلی
                </Link>
              </li>

              <li>
                <Link
                  href="/#specialties"
                  className="transition-colors hover:text-primary"
                >
                  خدمات
                </Link>
              </li>

              <li>
                <Link
                  href="/#about"
                  className="transition-colors hover:text-primary"
                >
                  درباره من
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="transition-colors hover:text-primary"
                >
                  تماس با من
                </Link>
              </li>

              <li>
                <Link
                  href="/#faq"
                  className="transition-colors hover:text-primary"
                >
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>

          {/* Diseases */}
          <div>
            <h4 className="mb-5 font-semibold text-slate-900">
              شرایط تحت درمان
            </h4>

            <ul className="flex flex-col gap-3 text-slate-600">
              {diseaseCategories.map((disease) => (
                <li key={disease.href}>
                  <Link
                    href={disease.href}
                    className="transition-colors hover:text-primary"
                  >
                    {disease.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-primary/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</span>

          <span>طراحی و توسعه توسط امیر شکیبافر ❤️</span>
        </div>
      </div>
    </footer>
  );
}
