"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { ArrowLeft, Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const menuLinks = [
  { href: "#", label: "صفحه اصلی" },
  { href: "#", label: "خدمات" },
  { href: "#", label: "درباره من" },
  { href: "#", label: "شرایط تحت درمان" },
  { href: "#", label: "مقالات" },
  { href: "#", label: "تماس با من" },
];

export function NavbarMobile() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Lower threshold for mobile viewports
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "unset";
    }

    // Cleanup ensures scrolling is restored if the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0 z-40 w-full h-20 bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-[0_8px_32px_-8px] shadow-primary/10 transform-gpu"
        dir="rtl"
      >
        <div className="flex h-full items-center justify-between w-full px-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-primary/5 text-primary shadow-[inset_0_0_12px_rgba(13,220,213,0.1)]">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-base text-foreground leading-tight">
                دکتر رضا سرورزاده
              </span>
              <span className="text-[10px] text-muted-foreground mt-0.5">
                تغذیه بالینی و رژیم‌درمانی
              </span>
            </div>
          </div>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-foreground focus:outline-none"
            aria-label="باز کردن منو"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transform-gpu"
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-[280px] bg-white shadow-2xl flex flex-col transform-gpu"
              dir="rtl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="font-bold text-base text-foreground">
                    منو
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground focus:outline-none bg-secondary/50 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="flex flex-col space-y-1 px-4">
                  {menuLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-sm font-medium text-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* CTA Section */}
              <div className="p-5 border-t border-border/50 bg-slate-50/50">
                <Button
                  variant="pillPrimary"
                  size="pill"
                  className="w-full justify-center gap-2 h-12"
                >
                  رزرو مشاوره
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
