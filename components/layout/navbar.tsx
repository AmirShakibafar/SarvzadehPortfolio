"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowLeft, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/components/ui/nav-item";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide header if scrolling down and past 150px, otherwise show it
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
      className="sticky top-0 z-50 w-full h-24 bg-white/80 backdrop-blur-md"
    >
      <div className="flex h-full items-center justify-between w-full max-w-7xl mx-auto px-[56px]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 bg-primary/5 text-primary">
            <Leaf className="w-6 h-6" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold text-lg text-foreground leading-tight">
              دکتر رضا سرورزاده
            </span>
            <span className="text-xs text-muted-foreground mt-0.5">
              تغذیه بالینی و رژیم‌درمانی
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
          <NavItem
            href="#"
            label="صفحه اصلی"
            isActive={true}
            className="text-base"
          />
          <NavItem href="#" label="خدمات" className="text-base" />
          <NavItem href="#" label="درباره من" className="text-base" />
          <NavItem href="#" label="شرایط تحت درمان" className="text-base" />
          <NavItem href="#" label="مقالات" className="text-base" />
          <NavItem href="#" label="تماس با من" className="text-base" />
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <Button
            variant="pillPrimary"
            size="pill"
            className="gap-2 hidden md:flex"
          >
            رزرو مشاوره
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
