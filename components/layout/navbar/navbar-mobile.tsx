"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { ArrowLeft, ChevronDown, Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const menuLinks = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/#about", label: "درباره من" },
  { href: "/#journey", label: "مسیر درمان" },
  { href: "/#faq", label: "سوالات متداول" },
];

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

export function NavbarMobile() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0 z-40 h-20 w-full border-b border-primary/10 bg-white/80       "
        dir="rtl"
      >
        <div className="flex h-full w-full items-center justify-between px-5">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary   ">
              <Leaf className="h-5 w-5" />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-base font-bold leading-tight text-foreground">
                دکتر رضا سرورزاده
              </span>

              <span className="mt-0.5 text-[10px] text-muted-foreground">
                تغذیه بالینی و رژیم‌درمانی
              </span>
            </div>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-primary/10 focus:outline-none"
            aria-label="باز کردن منو"
            aria-expanded={isOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-50 bg-black/20   "
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col bg-white   "
              dir="rtl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-border/50 p-5">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-2"
                >
                  <Leaf className="h-5 w-5 text-primary" />

                  <span className="text-base font-bold text-foreground">
                    منو
                  </span>
                </Link>

                <button
                  onClick={closeMenu}
                  className="rounded-full bg-secondary/50 p-2 text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
                  aria-label="بستن منو"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="flex flex-col space-y-1 px-4">
                  {menuLinks.slice(0, 1).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Services Dropdown */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen((previous) => !previous)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      aria-expanded={isServicesOpen}
                    >
                      <span>خدمات</span>

                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mr-3 border-r border-primary/20 py-1 pr-3">
                            <Link
                              href="/#specialties"
                              onClick={closeMenu}
                              className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-primary/10 hover:text-primary"
                            >
                              همه خدمات
                            </Link>

                            {diseaseCategories
                              .filter((disease) => disease.active)
                              .map((disease) => (
                                <Link
                                  key={disease.href}
                                  href={disease.href}
                                  onClick={closeMenu}
                                  className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-primary/10 hover:text-primary"
                                >
                                  {disease.label}
                                </Link>
                              ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Remaining Links */}
                  {menuLinks.slice(1).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="border-t border-border/50 bg-slate-50/50 p-5">
                <Button
                  variant="pillPrimary"
                  size="pill"
                  className="h-12 w-full justify-center gap-2 px-5"
                >
                  <Link
                    href="/#contact"
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center gap-2 whitespace-nowrap"
                  >
                    رزرو مشاوره
                    <ArrowLeft className="h-5 w-5 shrink-0" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
