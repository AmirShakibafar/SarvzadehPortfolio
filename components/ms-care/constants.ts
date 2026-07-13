import { User, ClipboardList, Activity, RefreshCw, Heart } from "lucide-react";

export const JOURNEY_STEPS = [
  {
    id: 1,
    title: "بررسی کامل وضعیت بیمار",
    icon: User,
    text: "ارزیابی جامع بالینی و تحلیل دقیق سوابق پزشکی شما.",
  },
  {
    id: 2,
    title: "طراحی برنامه اختصاصی",
    icon: ClipboardList,
    text: "تدوین پروتکل تغذیه‌ای بر اساس شاخص‌های التهابی و عصبی.",
  },
  {
    id: 3,
    title: "پایش مداوم سبک زندگی",
    icon: Activity,
    text: "نظارت روزانه بر سطح انرژی، خواب و تغییرات فیزیکی.",
  },
  {
    id: 4,
    title: "اصلاح برنامه بر اساس پیشرفت",
    icon: RefreshCw,
    text: "به‌روزرسانی دینامیک مسیر درمان با توجه به بازخورد بدن شما.",
  },
  {
    id: 5,
    title: "بهبود کیفیت زندگی",
    icon: Heart,
    text: "رسیدن به ثبات پایدار، کاهش خستگی و مدیریت علائم.",
  },
];

export const CARE_DIMENSIONS = [
  { id: 1, title: "کاهش خستگی", top: "10%", right: "15%", delay: 0.1 },
  { id: 2, title: "بهبود کیفیت خواب", top: "25%", right: "70%", delay: 0.3 },
  { id: 3, title: "مدیریت التهاب", top: "45%", right: "5%", delay: 0.2 },
  { id: 4, title: "سلامت روده", top: "65%", right: "80%", delay: 0.4 },
  { id: 5, title: "تنظیم انرژی روزانه", top: "80%", right: "20%", delay: 0.3 },
  { id: 6, title: "تعادل مواد مغذی", top: "15%", right: "45%", delay: 0.5 },
  { id: 7, title: "کاهش مشکلات گوارشی", top: "85%", right: "60%", delay: 0.2 },
  { id: 8, title: "سبک زندگی پایدار", top: "50%", right: "65%", delay: 0.6 },
];
