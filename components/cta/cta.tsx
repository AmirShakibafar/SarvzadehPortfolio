"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import {
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  UserCircle,
  Zap,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const EVALUATION_QUESTIONS = [
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

export default function CtaSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactData, setContactData] = useState({
    phone: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = EVALUATION_QUESTIONS.length + 1;
  const isComplete = currentStep === totalSteps;

  const handleOptionSelect = (questionId: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      evaluation: answers,
      contact: contactData,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to send request", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section dir="rtl" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Decorative Blobs for Glass Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 -translate-x-1/3 translate-y-1/4"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col space-y-8">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/60 border border-white/80 shadow-sm backdrop-blur-md px-4 py-2 text-teal-600">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">ارتباط سریع و آسان</span>
            </div>

            <Heading className="text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              برای شروع، <br />
              <span className="text-teal-400">مسیر مناسب</span> را انتخاب کنید
            </Heading>

            <Paragraph className="text-lg text-slate-600 leading-relaxed max-w-lg">
              فرم ارزیابی کوتاه ما را تکمیل کنید تا با اطلاعات کامل با شما تماس
              بگیریم، یا برای پاسخ سریع‌تر مستقیماً در پیام‌رسان‌ها به ما پیام
              دهید.
            </Paragraph>

            <div className="pt-4 space-y-4">
              <h4 className="text-slate-900 font-semibold">
                ارتباط مستقیم در پیام‌رسان‌ها:
              </h4>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  className="h-12 px-6 rounded-full bg-[#0088cc]/90 hover:bg-[#0088cc] backdrop-blur-md border border-white/20 text-white flex items-center gap-2 shadow-lg shadow-[#0088cc]/20 transition-all"
                  onClick={() =>
                    window.open("https://t.me/your_telegram_id", "_blank")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13v8l4-5" />
                  </svg>
                  پشتیبانی تلگرام
                </Button>

                <Button
                  className="h-12 px-6 rounded-full bg-[#25D366]/90 hover:bg-[#25D366] backdrop-blur-md border border-white/20 text-white flex items-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all"
                  onClick={() =>
                    window.open("https://wa.me/1234567890", "_blank")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  پشتیبانی واتس‌اپ
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Additional localized blob specifically for the form card to enhance the glass effect */}
            <div className="absolute -inset-4 bg-teal-400/20 rounded-[2.5rem] blur-2xl -z-10"></div>

            <GlassCard className="p-8 lg:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-white/60 bg-white/40 backdrop-blur-2xl min-h-[420px] flex flex-col relative z-10 overflow-hidden">
              {!isComplete && (
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-teal-600 bg-teal-50/50 px-3 py-1 rounded-full border border-teal-100">
                      مرحله {currentStep + 1} از {totalSteps}
                    </span>
                    {currentStep > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-slate-500 hover:text-slate-900 hover:bg-white/50 px-3 py-1.5 rounded-full flex items-center text-sm font-medium transition-all"
                      >
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                        بازگشت
                      </button>
                    )}
                  </div>
                  <div className="h-2 w-full bg-white/50 border border-white/60 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-gradient-to-l from-teal-300 to-teal-500 transition-all duration-500 ease-out rounded-full"
                      style={{
                        width: `${((currentStep + 1) / totalSteps) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="flex-1 flex flex-col justify-center">
                {currentStep < EVALUATION_QUESTIONS.length && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                      {EVALUATION_QUESTIONS[currentStep].question}
                    </h3>
                    <div className="flex flex-col gap-3">
                      {EVALUATION_QUESTIONS[currentStep].options.map(
                        (option, idx) => (
                          <button
                            key={idx}
                            onClick={() =>
                              handleOptionSelect(
                                EVALUATION_QUESTIONS[currentStep].id,
                                option,
                              )
                            }
                            className="w-full text-right px-6 py-4 rounded-2xl border border-white/60 bg-white/50 hover:bg-white/80 hover:border-teal-300 hover:shadow-md text-slate-700 font-semibold transition-all duration-300 backdrop-blur-sm"
                          >
                            {option}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {currentStep === EVALUATION_QUESTIONS.length && (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        اطلاعات تماس
                      </h3>
                      <p className="text-slate-600 text-sm">
                        لطفاً شماره خود را وارد کنید تا کارشناسان ما با شما تماس
                        بگیرند.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="relative group">
                        <input
                          type="tel"
                          required
                          value={contactData.phone}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              phone: e.target.value,
                            })
                          }
                          placeholder="0912 345 6789"
                          dir="ltr"
                          className="w-full pl-10 pr-4 py-4 rounded-2xl border border-white/60 bg-white/50 text-left focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all backdrop-blur-sm shadow-sm"
                        />
                        <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                      </div>

                      <div className="relative group">
                        <textarea
                          rows={3}
                          value={contactData.description}
                          onChange={(e) =>
                            setContactData({
                              ...contactData,
                              description: e.target.value,
                            })
                          }
                          placeholder="توضیحات تکمیلی (اختیاری)"
                          className="w-full pl-10 pr-4 py-4 rounded-2xl border border-white/60 bg-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all backdrop-blur-sm shadow-sm"
                        />
                        <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !contactData.phone}
                      className="w-full h-14 rounded-2xl bg-gradient-to-l from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <ArrowLeft className="h-5 w-5" />
                      )}
                      {isSubmitting ? "در حال ارسال اطلاعات..." : "ثبت درخواست"}
                    </Button>
                  </form>
                )}

                {isComplete && (
                  <div className="flex flex-col items-center justify-center text-center space-y-4 animate-in zoom-in duration-500 h-full py-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-teal-400 blur-xl opacity-20 rounded-full"></div>
                      <div className="h-24 w-24 bg-gradient-to-br from-teal-100 to-white border border-white rounded-full flex items-center justify-center text-teal-500 mb-4 shadow-xl relative z-10">
                        <CheckCircle2 className="h-12 w-12" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
                      با تشکر از شما!
                    </h3>
                    <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                      اطلاعات شما با موفقیت ثبت شد. کارشناسان ما به زودی جهت
                      هماهنگی و راهنمایی با شما تماس خواهند گرفت.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setCurrentStep(0);
                        setAnswers({});
                        setContactData({ phone: "", description: "" });
                      }}
                      className="mt-6 rounded-full border-white/60 bg-white/50 text-teal-700 hover:bg-white/80 hover:text-teal-800 backdrop-blur-sm shadow-sm transition-all"
                    >
                      ثبت درخواست جدید
                    </Button>
                  </div>
                )}
              </div>
            </GlassCard>
          </div>
        </div>

        <GlassCard className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 p-6 lg:p-8 rounded-[2rem] border-white/60 bg-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
            <div className="h-12 w-12 rounded-full bg-white/60 border border-white shadow-sm flex items-center justify-center text-teal-500 shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">حفظ حریم خصوصی</h4>
              <p className="text-xs text-slate-600">
                اطلاعات شما کاملاً محرمانه است
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right border-y md:border-y-0 md:border-x border-white/40 py-4 md:py-0 md:px-8 relative">
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-slate-200/50 to-transparent hidden md:block"></div>
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-200/50 to-transparent hidden md:block"></div>
            <div className="h-12 w-12 rounded-full bg-white/60 border border-white shadow-sm flex items-center justify-center text-teal-500 shrink-0">
              <UserCircle className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">مشاوره تخصصی</h4>
              <p className="text-xs text-slate-600">
                راهنمایی توسط دکتر رضا سرورزاده
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
            <div className="h-12 w-12 rounded-full bg-white/60 border border-white shadow-sm flex items-center justify-center text-teal-500 shrink-0">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">پاسخ سریع</h4>
              <p className="text-xs text-slate-600">
                در اولین فرصت با شما تماس می‌گیریم
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
