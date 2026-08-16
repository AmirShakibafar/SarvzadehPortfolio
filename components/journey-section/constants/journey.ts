import {
  User,
  ClipboardList,
  Activity,
  RefreshCw,
  Heart,
} from "lucide-react";
import { ElementType } from "react";

export interface JourneyStepData {
  id: number;
  title: string;
  icon: ElementType;
  text: string;
  image: string;
  duration: string;
  chips: string[];
  reassurance: string;
  trustBadge: string;
}

export const JOURNEY_STEPS: JourneyStepData[] = [
  {
    id: 1,
    title: "بررسی کامل وضعیت بیمار",
    icon: User,
    text: "ارزیابی جامع بالینی و تحلیل دقیق سوابق پزشکی شما.",
    image: "/images/journey/1.webp",
    duration: "هفته اول",
    chips: ["ارزیابی دقیق بالینی", "بررسی کامل سوابق"],
    reassurance:
      "این مرحله پایه‌ای محکم برای مسیر اختصاصی درمان شما بنا می‌کند.",
    trustBadge: "ارزیابی تخصصی",
  },
  {
    id: 2,
    title: "طراحی برنامه اختصاصی",
    icon: ClipboardList,
    text: "تدوین پروتکل تغذیه‌ای بر اساس شاخص‌های التهابی و عصبی.",
    image: "/images/journey/2.webp",
    duration: "هفته دوم",
    chips: ["تغذیه ضدالتهابی", "منطبق با نیاز شما"],
    reassurance:
      "برنامه شما بر اساس جدیدترین پروتکل‌های علمی و وضعیت بیولوژیک شما تنظیم می‌شود.",
    trustBadge: "مبتنی بر شواهد",
  },
  {
    id: 3,
    title: "پایش مداوم سبک زندگی",
    icon: Activity,
    text: "نظارت روزانه بر سطح انرژی، خواب و تغییرات فیزیکی.",
    image: "/images/journey/3.webp",
    duration: "پایش پیوسته",
    chips: ["نظارت روزانه", "پشتیبانی مستقیم"],
    reassurance:
      "تیم درمان در کنار شماست تا تغییرات سطح انرژی و واکنش‌های بدنتان را بررسی کند.",
    trustBadge: "پایش مستمر",
  },
  {
    id: 4,
    title: "اصلاح برنامه بر اساس پیشرفت",
    icon: RefreshCw,
    text: "به‌روزرسانی دینامیک مسیر درمان با توجه به بازخورد بدن شما.",
    image: "/images/journey/4.webp",
    duration: "بازبینی دوره‌ای",
    chips: ["به‌روزرسانی مسیر", "تطبیق با شرایط بدن"],
    reassurance:
      "هیچ دو بدنی یکسان واکنش نشان نمی‌دهند. برنامه تا رسیدن به بهترین نتیجه اصلاح می‌شود.",
    trustBadge: "رویکرد تطبیقی",
  },
  {
    id: 5,
    title: "بهبود کیفیت زندگی",
    icon: Heart,
    text: "رسیدن به ثبات پایدار، کاهش خستگی و مدیریت علائم.",
    image: "/images/journey/5.webp",
    duration: "هدف نهایی",
    chips: ["ثبات پایدار", "مدیریت خستگی"],
    reassurance:
      "هدف ما بازگرداندن کنترل زندگی به دستان شما و رسیدن به بالاترین سطح استقلال است.",
    trustBadge: "بیش از ۳۰۰ بیمار",
  },
];
