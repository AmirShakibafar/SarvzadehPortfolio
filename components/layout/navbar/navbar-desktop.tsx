"use client";

import { act, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowLeft, ChevronDown, Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavItem } from "@/components/ui/nav-item";

const diseaseCategories = [
  {
    href: "/diseases/autoimmune",
    label: "خودایمنی",
    active: true,
  },
  {
    href: "/diseases/cancer",
    label: "سرطان",
    active: false,
  },
  {
    href: "/diseases/hormonal-metabolic",
    label: "هورمونی و متابولیک",
    active: true,
  },
  {
    href: "/diseases/allergy",
    label: "آلرژی",
    active: true,
  },
];

export function NavbarDesktop() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 h-24 w-full border-b border-primary/10 bg-white/20       "
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6 md:px-[56px]">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary   ">
            <Leaf className="h-6 w-6" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-lg font-bold leading-tight text-foreground">
              دکتر رضا سرورزاده
            </span>

            <span className="mt-0.5 text-xs text-muted-foreground">
              تغذیه بالینی و رژیم‌درمانی
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden h-full items-center gap-6 lg:flex xl:gap-8">
          <NavItem
            href="/"
            label="صفحه اصلی"
            isActive={true}
            className="text-base"
          />

          {/* Services + Dropdown */}
          <div className="group relative flex h-full items-center">
            <NavItem
              href="/"
              label="خدمات"
              className="text-base"
              hasDropdown={true}
            />
            <div className="pointer-events-none absolute right-0 top-[calc(100%-8px)] w-64 translate-y-2 rounded-2xl border border-white/40 bg-white/80 p-2 opacity-0     transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              {diseaseCategories
                .filter((disease) => disease.active)
                .map((disease) => (
                  <Link
                    key={disease.href}
                    href={disease.href}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-700 transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {disease.label}
                  </Link>
                ))}
            </div>
          </div>

          <NavItem href="/#about" label="درباره من" className="text-base" />

          <NavItem href="/#journey" label="مسیر درمان" className="text-base" />

          <NavItem href="/#faq" label="سوالات متداول" className="text-base" />
        </nav>

        {/* CTA */}
        <div className="flex shrink-0 items-center">
          <Button
            variant="pillPrimary"
            size="pill"
            className="hidden gap-2 px-6 md:flex"
          >
            <Link
              href="/#contact"
              className="flex items-center gap-2 whitespace-nowrap"
            >
              رزرو مشاوره
              <ArrowLeft className="h-5 w-5 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
