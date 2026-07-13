import {
  User,
  ClipboardList,
  Activity,
  RefreshCw,
  Heart,
  Zap,
  Moon,
  Flame,
  Leaf,
  Apple,
  Pill,
  Sparkles,
  Sun,
} from "lucide-react";
import { ElementType } from "react";

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

export interface CareDimension {
  id: number;
  title: string;
  description: string;
  icon: ElementType;
  angle: number;
  delay: number;
}

export const CARE_DIMENSIONS: CareDimension[] = [
  {
    id: 1,
    title: "کاهش خستگی",
    description: "افزایش سطح انرژی و کاهش خستگی مزمن در طول روز",
    icon: Zap,
    angle: 0,
    delay: 0.1,
  },
  {
    id: 2,
    title: "بهبود کیفیت خواب",
    description: "تنظیم الگوی خواب و بهبود استراحت شبانه",
    icon: Moon,
    angle: 45,
    delay: 0.3,
  },
  {
    id: 3,
    title: "مدیریت التهاب",
    description: "کنترل التهاب سیستمیک با تغذیه ضدالتهابی هدفمند",
    icon: Flame,
    angle: 90,
    delay: 0.2,
  },
  {
    id: 4,
    title: "سلامت روده",
    description: "تقویت میکروبیوم و بهبود عملکرد دستگاه گوارش",
    icon: Leaf,
    angle: 135,
    delay: 0.4,
  },
  {
    id: 5,
    title: "تنظیم انرژی روزانه",
    description: "توزیع متعادل انرژی در ساعات مختلف روز",
    icon: Sun,
    angle: 180,
    delay: 0.3,
  },
  {
    id: 6,
    title: "تعادل مواد مغذی",
    description: "تامین ویتامین‌ها و مواد معدنی ضروری برای سیستم عصبی",
    icon: Apple,
    angle: 225,
    delay: 0.5,
  },
  {
    id: 7,
    title: "کاهش مشکلات گوارشی",
    description: "کاهش نفخ، یبوست و علائم گوارشی مرتبط با ام‌اس",
    icon: Pill,
    angle: 270,
    delay: 0.2,
  },
  {
    id: 8,
    title: "سبک زندگی پایدار",
    description: "ایجاد عادات غذایی پایدار و قابل ادامه در بلندمدت",
    icon: Sparkles,
    angle: 315,
    delay: 0.6,
  },
];

export const ORBIT_RADIUS = 200;
export const ORBIT_RADIUS_MOBILE = 120;
