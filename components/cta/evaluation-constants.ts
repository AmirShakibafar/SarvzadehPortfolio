export interface EvaluationQuestion {
  id: string;
  title: string;
  question: string;
  options: string[];
}

export const EVALUATION_QUESTIONS: EvaluationQuestion[] = [
  {
    id: "topic",
    title: "موضوع مشاوره",
    question: "برای چه موضوعی نیاز به راهنمایی دارید؟",
    options: ["خدمات درمانی", "خدمات زیبایی", "مشاوره عمومی"],
  },
  {
    id: "history",
    title: "سابقه مراجعه",
    question: "آیا پیش از این به کلینیک ما مراجعه کرده‌اید؟",
    options: ["بله، پرونده دارم", "خیر، مراجعه اول است"],
  },
  {
    id: "urgency",
    title: "فوریت",
    question: "میزان فوریت نیاز شما چقدر است؟",
    options: ["عادی", "نسبتاً فوری", "بسیار فوری"],
  },
  {
    id: "time",
    title: "زمان تماس",
    question: "ترجیح می‌دهید چه زمانی با شما تماس بگیریم؟",
    options: ["صبح (۸ تا ۱۳)", "عصر (۱۶ تا ۲۰)", "فرقی نمی‌کند"],
  },
];
