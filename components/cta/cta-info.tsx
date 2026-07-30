import React from "react";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { MessageSquare } from "lucide-react";

export function CtaInfo() {
  return (
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
        بگیریم، یا برای پاسخ سریع‌تر مستقیماً در پیام‌رسان‌ها به ما پیام دهید.
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
            پشتیبانی تلگرام
          </Button>

          <Button
            className="h-12 px-6 rounded-full bg-[#25D366]/90 hover:bg-[#25D366] backdrop-blur-md border border-white/20 text-white flex items-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          >
            پشتیبانی واتس‌اپ
          </Button>
        </div>
      </div>
    </div>
  );
}
