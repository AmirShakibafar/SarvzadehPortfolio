"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  PhoneCall,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import {
  EVALUATION_QUESTIONS,
  type EvaluationQuestion,
} from "../evaluation-constants";

interface ContactData {
  phone: string;
  description: string;
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

export function EvaluationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactData, setContactData] = useState<ContactData>({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ evaluation: answers, contact: contactData }),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      setCurrentStep((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to send request", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative isolate w-full">
      {/* Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[150%] w-[150%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* 
        Exact simulated glass trick:
        1. bg-white/10 + specific borders and   s
        2. overflow-hidden for the inner fake gradient
        3.   ensures the base component doesn't sneak in a   filter
      */}
      <GlassCard className="p-6 md:p-8 lg:p-10 rounded-[2rem] bg-white/10 border border-white/30   overflow-hidden min-h-[420px] flex flex-col relative z-10   ">
        {/* Fake glass gradient layer */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Container (z-10 ensures it sits above the fake gradient) */}
        <div className="relative z-10 flex flex-col flex-1">
          {!isComplete && (
            <ProgressBar
              currentStep={currentStep}
              totalSteps={totalSteps}
              onBack={() => setCurrentStep((prev) => prev - 1)}
            />
          )}

          <div className="flex-1 flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full"
              >
                {currentStep < EVALUATION_QUESTIONS.length && (
                  <QuestionStep
                    question={EVALUATION_QUESTIONS[currentStep]}
                    onSelect={handleOptionSelect}
                  />
                )}

                {currentStep === EVALUATION_QUESTIONS.length && (
                  <ContactStep
                    contactData={contactData}
                    setContactData={setContactData}
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                  />
                )}

                {isComplete && (
                  <SuccessStep
                    onReset={() => {
                      setCurrentStep(0);
                      setAnswers({});
                      setContactData({ phone: "", description: "" });
                    }}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

// --- Internal Step Components ---

function ProgressBar({
  currentStep,
  totalSteps,
  onBack,
}: {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
}) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-bold text-teal-600 bg-teal-50/50 px-3 py-1 rounded-full border border-teal-100">
          مرحله {currentStep + 1} از {totalSteps}
        </span>
        {currentStep > 0 && (
          <button
            type="button"
            onClick={onBack}
            className="text-slate-500 hover:text-slate-900 hover:bg-white/50 px-3 py-1.5 rounded-full flex items-center text-sm font-medium transition-all"
          >
            <ArrowRight className="h-4 w-4 ml-1.5" />
            بازگشت
          </button>
        )}
      </div>
      <div className="h-2 w-full bg-white/50 border border-white/60 rounded-full overflow-hidden   ">
        <div
          className="h-full bg-gradient-to-l from-teal-300 to-teal-500 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}

function QuestionStep({
  question,
  onSelect,
}: {
  question: EvaluationQuestion;
  onSelect: (id: string, opt: string) => void;
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 leading-snug">
        {question.question}
      </h3>
      <div className="flex flex-col gap-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(question.id, option)}
            className="w-full text-right px-6 py-4 rounded-2xl border border-white/60 bg-white/50 hover:bg-white/80 hover:border-teal-300   text-slate-700 font-semibold transition-all duration-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

interface ContactStepProps {
  contactData: ContactData;
  setContactData: React.Dispatch<React.SetStateAction<ContactData>>;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

function ContactStep({
  contactData,
  setContactData,
  onSubmit,
  isSubmitting,
}: ContactStepProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">اطلاعات تماس</h3>
        <p className="text-slate-600 text-sm">
          لطفاً شماره خود را وارد کنید تا کارشناسان ما با شما تماس بگیرند.
        </p>
      </div>
      <div className="space-y-4">
        <div className="relative group">
          <input
            type="tel"
            required
            value={contactData.phone}
            onChange={(e) =>
              setContactData({ ...contactData, phone: e.target.value })
            }
            placeholder="0912 345 6789"
            dir="ltr"
            className="w-full pl-10 pr-4 py-4 rounded-2xl border border-white/60 bg-white/50 text-left focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all   "
          />
          <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
        </div>
        <div className="relative group">
          <textarea
            rows={3}
            value={contactData.description}
            onChange={(e) =>
              setContactData({ ...contactData, description: e.target.value })
            }
            placeholder="توضیحات تکمیلی (اختیاری)"
            className="w-full pl-10 pr-4 py-4 rounded-2xl border border-white/60 bg-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-all   "
          />
          <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || !contactData.phone}
        className="w-full h-14 rounded-2xl bg-gradient-to-l from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-lg flex items-center justify-center gap-2     transition-all disabled:opacity-50"
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <ArrowLeft className="h-5 w-5" />
        )}
        {isSubmitting ? "در حال ارسال اطلاعات..." : "ثبت درخواست"}
      </Button>
    </form>
  );
}

function SuccessStep({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 h-full py-8">
      <div className="relative isolate">
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <div className="h-24 w-24 bg-gradient-to-br from-teal-100 to-white border border-white rounded-full flex items-center justify-center text-teal-500 mb-4   relative z-10">
          <CheckCircle2 className="h-12 w-12" />
        </div>
      </div>
      <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
        با تشکر از شما!
      </h3>
      <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
        اطلاعات شما با موفقیت ثبت شد. کارشناسان ما به زودی جهت هماهنگی و
        راهنمایی با شما تماس خواهند گرفت.
      </p>
      <Button
        variant="outline"
        onClick={onReset}
        className="mt-6 rounded-full border-white/60 bg-white/50 text-teal-700 hover:bg-white/80 hover:text-teal-800   transition-all"
      >
        ثبت درخواست جدید
      </Button>
    </div>
  );
}
