// data/cancer.ts
export const cancerData = {
  title: "سرطان",
  subtitle: "پشتیبانی ساختاریافته",
  description:
    "پشتیبانی ساختاریافته برای انواع سرطان‌ها نظیر ملانوما، سرطان پروستات و سرطان پستان[cite: 1].",
  heroImageUrl: "/images/diseases/cancer-hero.png",
  mechanismTitle: "سازوکار سرطان",
  mechanismDescription:
    "رشد غیرطبیعی و کنترل‌نشده سلول‌ها که می‌تواند به سایر بافت‌های بدن منتشر شود[cite: 1].",
  processSteps: [
    {
      title: "جهش ژنتیکی",
      desc: "تغییرات ساختاری در DNA سلول‌های سالم",
      iconName: "Dna",
      highlight: false,
    },
    {
      title: "رشد کنترل‌نشده",
      desc: "تکثیر سریع، بی‌رویه و غیرطبیعی سلول‌ها",
      iconName: "Activity",
      highlight: false,
    },
    {
      title: "تشکیل تومور",
      desc: "تجمع سلول‌های غیرطبیعی و ایجاد توده در بافت",
      iconName: "Layers",
      highlight: false,
    },
    {
      title: "متاستاز و انتشار",
      desc: "گسترش سلول‌های سرطانی به سایر بافت‌ها و اندام‌ها",
      iconName: "Network",
      highlight: true,
    },
  ],
  featuredDiseases: [
    {
      id: "melanoma",
      name: "Melanoma (ملانوما)",
      description:
        "سرطان بدخیم سلول‌های ملانوسیت است که می‌تواند به‌سرعت به سایر قسمت‌های بدن منتشر شود[cite: 1].",
      imageUrl: "/images/diseases/melanoma.png",
      media: { type: "video" as const },
    },
    {
      id: "prostate-cancer",
      name: "Prostate Cancer (سرطان پروستات)",
      description:
        "رشد غیرطبیعی و بدخیم سلول‌های غده پروستات است که در بسیاری از موارد در ابتدا رشد آهسته دارد[cite: 1].",
      imageUrl: "/images/diseases/prostate.png",
      media: { type: "photo" as const },
    },
    {
      id: "breast-cancer",
      name: "Breast Cancer (سرطان پستان)",
      description:
        "رشد کنترل‌نشده و بدخیم سلول‌های بافت پستان است که می‌تواند به بافت‌های اطراف و اندام‌های دوردست منتشر شود[cite: 1].",
      imageUrl: "/images/diseases/breast-cancer.png",
      media: { type: "photo" as const },
    },
  ],
  keywords: [
    "ملانوما",
    "سرطان پروستات",
    "سرطان پستان",
    "غدد لنفاوی",
    "متاستاز",
  ],
};
