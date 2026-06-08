"use client";

import React, { useState } from "react";
import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./dialog";

type NavItem = {
  name: string;
  link: string;
  icon?: React.JSX.Element;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return;
    const direction = current - scrollYProgress.getPrevious()!;

    if (current < 0.05) {
      setVisible(false);
    } else if (direction < 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    const scrollY = window.scrollY;
    if (scrollY < 100) {
      setActiveSection("");
      return;
    }
    const sectionIds = navItems.map((item) => item.link.replace("#", "")).filter(Boolean);
    let current2 = "";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop - 240 <= scrollY) current2 = id;
    }
    setActiveSection(current2);
  });

  const homeHref = navItems[0]?.link ?? "#";

  return (
    <>
      <div className="fixed top-3 left-3 z-[5001] sm:hidden">
        <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label="Open navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/85 text-foreground shadow-[0px_2px_18px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors duration-200 hover:bg-accent"
            >
              <Menu className="h-[18px] w-[18px]" />
            </button>
          </DialogTrigger>
          <DialogContent className="left-3 right-3 top-16 translate-x-0 translate-y-0 w-auto max-w-none rounded-3xl border-border bg-background/95 p-4 sm:hidden">
            <DialogTitle className="sr-only">Navigation menu</DialogTitle>
            <div className="flex flex-col gap-2">
              {navItems.map((navItem) => (
                <Link
                  key={navItem.name}
                  href={navItem.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/70 px-4 py-3 text-base font-medium text-foreground transition-colors duration-200 hover:bg-accent"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 text-primary">
                    {navItem.icon}
                  </span>
                  <span>{navItem.name}</span>
                </Link>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <AnimatePresence mode="wait">
        <m.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "hidden sm:flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-border rounded-lg dark:bg-background shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-3 items-center justify-center space-x-8",
            className
          )}
        >
          <Link
            href={homeHref}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/70 transition-colors duration-200 hover:bg-accent"
          >
            <Image
              src="/favicon/favicon.svg"
              alt="Site logo"
              width={22}
              height={22}
              priority
            />
          </Link>

          {navItems.map((navItem, idx) => {
            const isActive =
              navItem.link === "#"
                ? activeSection === ""
                : "#" + activeSection === navItem.link;
            return (
              <div key={navItem.name}>
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative items-center flex space-x-1 transition-colors ease-in-out duration-200",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
                  )}
                >
                  <span className="text-xl">{navItem.name}</span>
                </Link>
              </div>
            );
          })}
        </m.div>
      </AnimatePresence>
    </>
  );
};
