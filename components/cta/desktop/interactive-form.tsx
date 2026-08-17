"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import type { EvaluationQuestion } from "../evaluation-constants";

interface ContactData {
  phone: string;
  description: string;
}

export function InteractiveForm({
  questions,
}: {
  questions: EvaluationQuestion[];
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactData, setContactData] = useState<ContactData>({
    phone: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = questions.length + 1;
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
    <>
      {!isComplete && (
        <ProgressBar
          currentStep={currentStep}
          totalSteps={totalSteps}
          onBack={() => setCurrentStep((prev) => prev - 1)}
        />
      )}

      <div className="relative flex flex-1 flex-col justify-center">
        {/* Using `key` to trigger the CSS entry animation on every step change */}
        <div key={currentStep} className="w-full animate-fade-up">
          {currentStep < questions.length && (
            <QuestionStep
              question={questions[currentStep]}
              onSelect={handleOptionSelect}
            />
          )}

          {currentStep === questions.length && (
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
        </div>
      </div>
    </>
  );
}

// --- Internal Step Components (No changes to logic, safely kept in the client file) ---

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
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full border border-teal-100 bg-teal-50/50 px-3 py-1 text-sm font-bold text-teal-600">
          مرحله {currentStep + 1} از {totalSteps}
        </span>
        {currentStep > 0 && (
          <button
            type="button"
            onClick={onBack}
            className="flex items-center rounded-full px-3 py-1.5 text-sm font-medium text-slate-500 transition-all hover:bg-white/50 hover:text-slate-900"
          >
            <ArrowRight className="ml-1.5 h-4 w-4" />
            بازگشت
          </button>
        )}
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full border border-white/60 bg-white/50">
        <div
          className="h-full rounded-full bg-gradient-to-l from-teal-300 to-teal-500 transition-all duration-500 ease-out"
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
      <h3 className="leading-snug text-2xl font-bold text-slate-900">
        {question.question}
      </h3>
      <div className="flex flex-col gap-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(question.id, option)}
            className="w-full rounded-2xl border border-white/60 bg-white/50 px-6 py-4 text-right font-semibold text-slate-700 transition-all duration-300 hover:border-teal-300 hover:bg-white/80"
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
        <h3 className="mb-2 text-2xl font-bold text-slate-900">اطلاعات تماس</h3>
        <p className="text-sm text-slate-600">
          لطفاً شماره خود را وارد کنید تا کارشناسان ما با شما تماس بگیرند.
        </p>
      </div>
      <div className="space-y-4">
        <div className="group relative">
          <input
            type="tel"
            required
            value={contactData.phone}
            onChange={(e) =>
              setContactData({ ...contactData, phone: e.target.value })
            }
            placeholder="0912 345 6789"
            dir="ltr"
            className="w-full rounded-2xl border border-white/60 bg-white/50 py-4 pl-10 pr-4 text-left transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 transition-colors group-focus-within:text-teal-500" />
        </div>
        <div className="group relative">
          <textarea
            rows={3}
            value={contactData.description}
            onChange={(e) =>
              setContactData({ ...contactData, description: e.target.value })
            }
            placeholder="توضیحات تکمیلی (اختیاری)"
            className="w-full resize-none rounded-2xl border border-white/60 bg-white/50 py-4 pl-10 pr-4 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-slate-400 transition-colors group-focus-within:text-teal-500" />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || !contactData.phone}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-teal-400 to-teal-500 text-lg font-bold text-white transition-all hover:from-teal-500 hover:to-teal-600 disabled:opacity-50"
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
    <div className="flex h-full flex-col items-center justify-center space-y-4 py-8 text-center">
      <div className="relative isolate">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40"
          aria-hidden="true"
        />
        <div className="relative z-10 mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-white bg-gradient-to-br from-teal-100 to-white text-teal-500">
          <CheckCircle2 className="h-12 w-12" />
        </div>
      </div>
      <h3 className="mb-2 text-3xl font-extrabold text-slate-900">
        با تشکر از شما!
      </h3>
      <p className="mx-auto max-w-sm leading-relaxed text-slate-600">
        اطلاعات شما با موفقیت ثبت شد. کارشناسان ما به زودی جهت هماهنگی و
        راهنمایی با شما تماس خواهند گرفت.
      </p>
      <Button
        variant="outline"
        onClick={onReset}
        className="mt-6 rounded-full border-white/60 bg-white/50 text-teal-700 transition-all hover:bg-white/80 hover:text-teal-800"
      >
        ثبت درخواست جدید
      </Button>
    </div>
  );
}
