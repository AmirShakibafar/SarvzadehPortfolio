import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { motion } from "framer-motion";

export function ImmuneSystemProcess({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const steps = [
    { title: "سیستم ایمنی", desc: "عملکرد طبیعی دفاعی بدن" },
    { title: "فعال‌شدن نابجا", desc: "تشخیص اشتباه بافت خودی" },
    { title: "التهاب", desc: "تجمع سلول‌های ایمنی" },
    { title: "آسیب بافتی", desc: "بروز علائم بیماری" },
  ];

  return (
    <section id="mechanism" className="py-24 relative z-10 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <Heading size="h2" className="mb-4">
            {title}
          </Heading>
          <Paragraph>{description}</Paragraph>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-6 right-16 left-16 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />
          <div className="lg:hidden absolute right-6 top-8 bottom-16 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-row lg:flex-col items-start lg:items-center lg:text-center gap-6 lg:gap-4 relative"
              >
                <div className="text-primary/40 font-light text-4xl lg:text-5xl leading-none shrink-0 bg-[#FAFAFA] pr-2 lg:pr-0 lg:px-4">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-col lg:items-center mt-1 lg:mt-2">
                  <h4 className="text-slate-900 font-bold mb-1.5 text-lg">
                    {step.title}
                  </h4>
                  <Paragraph size="sm" className="max-w-[200px]">
                    {step.desc}
                  </Paragraph>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
