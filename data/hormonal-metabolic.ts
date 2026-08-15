// data/hormonal-metabolic.ts
export const hormonalMetabolicData = {
  title: "هورمونی و متابولیک",
  subtitle: "تنظیم هورمون‌ها و تعادل متابولیک",
  description:
    "اختلالات هورمونی و متابولیک شامل طیف گسترده‌ای از شرایط مانند فیبروم رحم، اندومتریوز، سندرم تخمدان پلی‌کیستیک (PCOS) و سندرم متابولیک هستند که می‌توانند بر عملکرد هورمونی، سوخت‌وساز، سلامت تولیدمثل و وضعیت عمومی بدن تأثیر بگذارند.",
  heroImageUrl: "/images/diseases/hormon-hero.png",
  heroImageSize: "sm" as const,

  mechanismTitle: "سازوکار اختلالات هورمونی و متابولیک",
  mechanismDescription:
    "اختلال در تنظیم هورمون‌ها یا فرایندهای متابولیک می‌تواند تعادل قند و چربی خون، حساسیت به انسولین، عملکرد تولیدمثل و فعالیت بافت‌های مختلف بدن را تحت تأثیر قرار دهد.",

  processSteps: [
    {
      title: "اختلال در تنظیم",
      desc: "تغییر در ترشح یا عملکرد هورمون‌ها و ایجاد اختلال در مسیرهای متابولیک",
      iconName: "Scale",
      highlight: false,
    },
    {
      title: "تغییر پاسخ سلولی",
      desc: "کاهش یا تغییر حساسیت سلول‌ها به پیام‌های هورمونی، مانند پاسخ بدن به انسولین",
      iconName: "Activity",
      highlight: false,
    },
    {
      title: "تغییرات بافتی و متابولیک",
      desc: "ایجاد تغییراتی مانند رشد فیبروم، اختلال در تخمک‌گذاری یا تجمع چربی احشایی",
      iconName: "Droplet",
      highlight: false,
    },
    {
      title: "پیامدهای سیستمیک",
      desc: "تداوم اختلالات می‌تواند بر سلامت عمومی، عملکرد تولیدمثل و خطر بیماری‌های مزمن تأثیر بگذارد",
      iconName: "AlertCircle",
      highlight: true,
    },
  ],

  featuredDiseases: [
    {
      id: "uterine-fibroids",
      name: "Uterine Fibroids (فیبروم رحم)",
      description:
        "رشدهای خوش‌خیم و وابسته به هورمون هستند که از بافت عضلانی رحم ایجاد می‌شوند و می‌توانند باعث خونریزی شدید، درد یا احساس فشار در لگن شوند.",
      imageUrl: "/images/diseases/uti-fib.png",
      media: { type: "photo" as const },
    },
    {
      id: "endometriosis",
      name: "Endometriosis (اندومتریوز)",
      description:
        "یک بیماری مزمن است که در آن بافتی شبیه آندومتر در خارج از رحم رشد می‌کند و می‌تواند باعث التهاب، درد لگنی و مشکلات مرتبط با باروری شود.",
      imageUrl: "/images/diseases/endom.png",
      media: { type: "photo" as const },
    },
    {
      id: "pcos",
      name: "Polycystic Ovary Syndrome (سندرم تخمدان پلی‌کیستیک)",
      description:
        "یک اختلال هورمونی و متابولیک شایع است که می‌تواند با افزایش آندروژن‌ها، اختلال در تخمک‌گذاری و مقاومت به انسولین همراه باشد.",
      imageUrl: "/images/diseases/pcos.png",
      media: { type: "photo" as const },
    },
    {
      id: "metabolic-syndrome",
      name: "Metabolic Syndrome (سندرم متابولیک)",
      description:
        "مجموعه‌ای از عوامل خطر متابولیک مانند چاقی شکمی، فشار خون بالا، افزایش قند خون و اختلالات چربی خون است که خطر بیماری‌های قلبی‌عروقی و دیابت نوع ۲ را افزایش می‌دهد.",
      imageUrl: "/images/diseases/hormon2.png",
      media: { type: "photo" as const },
    },
  ],

  keywords: [
    "فیبروم رحم",
    "اندومتریوز",
    "سندرم تخمدان پلی‌کیستیک",
    "مقاومت به انسولین",
    "اختلالات هورمونی",
    "سندرم متابولیک",
    "چاقی شکمی",
  ],
};
