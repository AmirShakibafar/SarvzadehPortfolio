// data/autoimmune.ts
export const autoimmuneData = {
  title: "بیماری‌های خودایمنی",
  description:
    "مدیریت و کنترل بیماری‌های مرتبط با سیستم ایمنی از طریق رویکردهای نوین علمی.",
  featuredDiseases: [
    {
      id: "ms",
      name: "Multiple Sclerosis (ام‌اس)",
      description:
        "بیماری است که در آن سیستم ایمنی به میلین و گاهی خود آکسون‌های سیستم عصبی مرکزی آسیب می‌زند.",
      imageUrl: "/images/icons/ms.png", // Add your icon paths here
      media: { type: "video" },
    },
    {
      id: "psoriasis",
      name: "Psoriasis (پسوریازیس)",
      description:
        "بیماری التهابی مزمن است که باعث فعال‌شدن بیش‌ازحد سیستم ایمنی و افزایش سرعت تکثیر سلول‌های پوست می‌شود.",
      imageUrl: "/images/icons/psoriasis.png",
      media: { type: "photo" },
      paperDoi: "10.5281/zenodo.7799594",
    },
    {
      id: "vitiligo",
      name: "Vitiligo (ویتیلیگو)",
      description:
        "بیماری خودایمنی است که در آن سیستم ایمنی ملانوسیت‌های تولیدکننده رنگدانه را تخریب می‌کند.",
      imageUrl: "/images/icons/vitiligo.png",
      media: { type: "photo" },
    },
  ],
  keywords: [
    "نوروپاتی آکسونی حرکتی حاد",
    "سندرم آنتی‌فسفولیپید",
    "گاستریت خودایمنی",
    "تیروئیدیت هاشیموتو",
    "لوپوس اریتماتوز سیستمیک (SLE)",
    "بیماری سلیاک",
  ],
};
