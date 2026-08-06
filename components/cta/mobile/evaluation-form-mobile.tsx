// evaluation-form-mobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export function EvaluationFormMobile() {
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
      {/* Mobile-scaled Background Blob */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Fake Glass Wrapper */}
      <div
        className="
    p-5 sm:p-6 
    rounded-[2rem]
    border border-white/20
    bg-white/[0.08]
    shadow-[0_8px_40px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.35)]
    min-h-[420px]
    flex flex-col
    relative z-10
    overflow-hidden
  "
      >
        {/* Glass surface light */}
        <div
          className="
      absolute inset-0
      bg-gradient-to-br
      from-white/25
      via-white/5
      to-transparent
      pointer-events-none
    "
        />

        <div className="relative z-10 flex flex-col h-full w-full">
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
      </div>
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
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold text-teal-700 bg-teal-100/50 px-3 py-1 rounded-full border border-teal-200">
          مرحله {currentStep + 1} از {totalSteps}
        </span>
        {currentStep > 0 && (
          <button
            type="button"
            onClick={onBack}
            className="text-slate-600 hover:text-slate-900 bg-white/40 hover:bg-white/60 px-3 py-1.5 rounded-full flex items-center text-xs font-medium transition-colors"
          >
            <ArrowRight className="h-3.5 w-3.5 ml-1" />
            بازگشت
          </button>
        )}
      </div>
      <div className="h-1.5 w-full bg-white/50 border border-white/60 rounded-full overflow-hidden shadow-inner">
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
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-slate-900 leading-snug">
        {question.question}
      </h3>
      <div className="flex flex-col gap-2.5">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(question.id, option)}
            className="w-full text-right px-5 py-3.5 rounded-2xl border border-white/50 bg-white/60 hover:bg-white/80 active:bg-teal-50 text-slate-700 font-semibold transition-colors text-sm shadow-sm"
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
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-1.5">
          اطلاعات تماس
        </h3>
        <p className="text-slate-600 text-xs leading-relaxed">
          شماره خود را وارد کنید تا کارشناسان ما با شما تماس بگیرند.
        </p>
      </div>
      <div className="space-y-3">
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
            className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-white/50 bg-white/60 text-left focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-colors text-sm shadow-sm"
          />
          <PhoneCall className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
        </div>
        <div className="relative group">
          <textarea
            rows={2}
            value={contactData.description}
            onChange={(e) =>
              setContactData({ ...contactData, description: e.target.value })
            }
            placeholder="توضیحات تکمیلی (اختیاری)"
            className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-white/50 bg-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white transition-colors text-sm shadow-sm"
          />
          <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || !contactData.phone}
        className="w-full h-12 rounded-2xl bg-gradient-to-l from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-base flex items-center justify-center gap-2 shadow-md shadow-teal-500/20 transition-opacity disabled:opacity-70"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ArrowLeft className="h-4 w-4" />
        )}
        {isSubmitting ? "در حال ارسال..." : "ثبت درخواست"}
      </Button>
    </form>
  );
}

function SuccessStep({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 h-full py-6">
      <div className="relative isolate">
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-60 pointer-events-none"
          aria-hidden="true"
        />
        <div className="h-20 w-20 bg-gradient-to-br from-teal-100 to-white border border-white rounded-full flex items-center justify-center text-teal-500 mb-2 shadow-lg relative z-10">
          <CheckCircle2 className="h-10 w-10" />
        </div>
      </div>
      <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
        با تشکر از شما!
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm max-w-[260px] mx-auto">
        اطلاعات شما ثبت شد. کارشناسان ما به زودی با شما تماس خواهند گرفت.
      </p>
      <Button
        variant="outline"
        onClick={onReset}
        className="mt-4 rounded-full border-white/50 bg-white/60 text-teal-700 hover:bg-white/80 active:bg-teal-50 shadow-sm transition-colors text-sm h-10 px-6"
      >
        ثبت درخواست جدید
      </Button>
    </div>
  );
}
