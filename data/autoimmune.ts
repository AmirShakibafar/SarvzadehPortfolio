// data/autoimmune.ts

export const autoimmuneData = {
  // Hero Section Data
  title: "آشنایی با بیماری‌های خودایمنی",
  subtitle: "رویکرد نوین ایمونولوژی",
  description:
    "مدیریت و کنترل بیماری‌های مرتبط با سیستم ایمنی از طریق رویکردهای نوین علمی. در این بیماری‌ها، سیستم ایمنی به اشتباه بافت‌های سالم بدن را هدف قرار می‌دهد.",
  heroImageUrl: "/images/diseases/ms2.png", // <-- ADD THIS

  // Mechanism Section Data
  mechanismTitle: "سازوکار بیماری‌های خودایمنی",
  mechanismDescription:
    "در این بیماری‌ها، سیستم ایمنی به اشتباه بافت‌های سالم بدن را هدف قرار داده و باعث ایجاد التهاب می‌شود.",

  // Featured Diseases Array
  featuredDiseases: [
    {
      id: "ms",
      name: "Multiple Sclerosis (ام‌اس)",
      description:
        "بیماری است که در آن سیستم ایمنی به میلین و گاهی خود آکسون‌های سیستم عصبی مرکزی آسیب می‌زند.",
      imageUrl: "/images/diseases/ms4.png",
      media: { type: "video" as const },
    },
    {
      id: "psoriasis",
      name: "Psoriasis (پسوریازیس)",
      description:
        "بیماری التهابی مزمن است که باعث فعال‌شدن بیش‌ازحد سیستم ایمنی و افزایش سرعت تکثیر سلول‌های پوست می‌شود.",
      imageUrl: "/images/diseases/pes.png",
      media: { type: "photo" as const },
      paperDoi: "10.5281/zenodo.7799594",
    },
    {
      id: "vitiligo",
      name: "Vitiligo (ویتیلیگو)",
      description:
        "بیماری خودایمنی است که در آن سیستم ایمنی ملانوسیت‌های تولیدکننده رنگدانه را تخریب می‌کند.",
      imageUrl: "/images/diseases/vitiligo.png",
      media: { type: "photo" as const },
    },
  ],

  // Library Search Keywords
  keywords: [
    "نوروپاتی آکسونی حرکتی حاد",
    "سندرم آنتی‌فسفولیپید",
    "گاستریت خودایمنی",
    "تیروئیدیت هاشیموتو",
    "لوپوس اریتماتوز سیستمیک (SLE)",
    "بیماری سلیاک",
  ],
};
