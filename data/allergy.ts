// data/allergy.ts
export const allergyData = {
  title: "آلرژی و حساسیت",
  subtitle: "تنظیم واکنش‌های سیستمیک",
  description:
    "تنظیم و بهبود واکنش‌های سیستمیک مرتبط با آسم، حساسیت‌های پوستی و سندرم MCAS[cite: 1].",
  heroImageUrl: "/images/diseases/allergy-hero.png",
  mechanismTitle: "سازوکار آلرژی",
  mechanismDescription:
    "واکنش بیش‌ازحد سیستم ایمنی یا ماست‌سل‌ها به مواد محرک که منجر به آزادسازی واسطه‌هایی مانند هیستامین و ایجاد التهاب می‌شود[cite: 1].",
  processSteps: [
    {
      title: "مواجهه با آلرژن",
      desc: "ورود یا تماس با ماده محرک از طریق تنفس، پوست یا گوارش",
      iconName: "Leaf",
      highlight: false,
    },
    {
      title: "حساس‌سازی ایمنی",
      desc: "شناسایی اشتباه ماده بی‌خطر به عنوان تهدید توسط سیستم ایمنی",
      iconName: "ScanSearch",
      highlight: false,
    },
    {
      title: "آزادسازی واسطه‌ها",
      desc: "ترشح شدید هیستامین و سایر مواد شیمیایی توسط ماست‌سل‌ها",
      iconName: "Zap",
      highlight: false,
    },
    {
      title: "واکنش التهابی حاد",
      desc: "بروز سریع علائمی مانند خارش، تورم، کهیر و تنگی نفس",
      iconName: "Flame",
      highlight: true,
    },
  ],
  featuredDiseases: [
    {
      id: "asthma",
      name: "Asthma (آسم)",
      description:
        "بیماری مزمن التهابی راه‌های هوایی است که باعث حساسیت بیش‌ازحد و تنگ‌شدن متناوب برونش‌ها می‌شود[cite: 1].",
      imageUrl: "/images/diseases/asthma.png",
      media: { type: "photo" as const },
    },
    {
      id: "skin-allergy",
      name: "Skin Allergy (حساسیت پوستی)",
      description:
        "واکنش بیش‌ازحد سیستم ایمنی به یک ماده محرک یا آلرژن است که می‌تواند به شکل کهیر، درماتیت تماسی یا سایر واکنش‌های پوستی ظاهر شود[cite: 1].",
      imageUrl: "/images/diseases/skin-allergy.png",
      media: { type: "photo" as const },
    },
    {
      id: "mcas",
      name: "MCAS (Mast Cell Activation Syndrome)",
      description:
        "سندرومی است که در آن ماست‌سل‌ها به‌طور غیرطبیعی و مکرر فعال شده و واسطه‌هایی مانند هیستامین آزاد می‌کنند[cite: 1].",
      imageUrl: "/images/diseases/mcas.png",
      media: { type: "video" as const },
    },
  ],
  keywords: ["هیستامین", "آلرژن", "درماتیت تماسی", "ماست‌سل", "آنافیلاکسی"],
};
