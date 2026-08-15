// data/hormonal-metabolic.ts
export const hormonalMetabolicData = {
  title: "هورمونی - متابولیک",
  subtitle: "کنترل شرایط فیزیولوژیک",
  description:
    "کنترل شرایط فیزیولوژیک شامل فیبروم رحم، اندومتریوز، سندروم تخمدان پلی‌کیستیک (PCOS) و سندروم متابولیک[cite: 1].",
  heroImageUrl: "/images/diseases/hormon.png",
  mechanismTitle: "سازوکار اختلالات هورمونی و متابولیک",
  mechanismDescription:
    "اختلال در عملکرد هورمون‌ها یا سیستم متابولیک که بر تنظیم قند، چربی و عملکردهای تولید مثلی تأثیر می‌گذارد[cite: 1].",
  processSteps: [
    {
      title: "عدم تعادل اولیه",
      desc: "تغییر در ترشح هورمون‌ها یا اختلال در مسیرهای متابولیک",
      iconName: "Scale",
      highlight: false,
    },
    {
      title: "مقاومت سلولی",
      desc: "کاهش حساسیت سلول‌ها به سیگنال‌های هورمونی (مانند انسولین)",
      iconName: "Activity",
      highlight: false,
    },
    {
      title: "تغییرات بافتی",
      desc: "بروز تغییرات فیزیکی مانند تشکیل کیست، فیبروم یا تجمع چربی",
      iconName: "Droplet",
      highlight: false,
    },
    {
      title: "عوارض سیستمیک",
      desc: "گسترش علائم به کل بدن و تاثیر بر کیفیت زندگی و باروری",
      iconName: "AlertCircle",
      highlight: true,
    },
  ],
  featuredDiseases: [
    {
      id: "uterine-fibroids",
      name: "Uterine Fibroids (فیبروم رحم)",
      description:
        "تومورهای خوش‌خیم و وابسته به هورمون‌های جنسی هستند که از عضله صاف رحم ایجاد می‌شوند[cite: 1].",
      imageUrl: "/images/diseases/uti.png",
      media: { type: "photo" as const },
    },
    {
      id: "endometriosis",
      name: "Endometriosis (اندومتریوز)",
      description:
        "بیماری مزمن وابسته به استروژن است که در آن بافت شبیه آندومتر خارج از حفره رحم رشد می‌کند و باعث التهاب و درد می‌شود[cite: 1].",
      imageUrl: "/images/diseases/endo.png",
      media: { type: "photo" as const },
    },
    {
      id: "pcos",
      name: "Polycystic Ovary Syndrome (PCOS)",
      description:
        "یک اختلال شایع هورمونی ـ متابولیکی است که با مقاومت به انسولین، اختلال تخمک‌گذاری و افزایش آندروژن‌ها ارتباط دارد[cite: 1].",
      imageUrl: "/images/diseases/ovary.png",
      media: { type: "photo" as const },
    },
    {
      id: "metabolic-syndrome",
      name: "Metabolic Syndrome (سندروم متابولیک)",
      description:
        "مجموعه‌ای از اختلالات متابولیکی شامل چاقی شکمی، فشار خون بالا، قند خون بالا و اختلال چربی خون است که خطر بیماری قلبی و دیابت را افزایش می‌دهد[cite: 1].",
      imageUrl: "/images/diseases/meta.png",
      media: { type: "photo" as const },
    },
  ],
  keywords: [
    "فیبروم",
    "تخمدان پلی‌کیستیک",
    "مقاومت به انسولین",
    "استروژن",
    "چاقی شکمی",
  ],
};
