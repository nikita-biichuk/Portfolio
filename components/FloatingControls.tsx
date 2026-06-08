"use client";

import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function FloatingControls() {
  return (
    <div className="fixed top-3 right-3 z-[9999] flex items-center justify-center gap-2 sm:top-4 sm:right-4 sm:gap-3">
      <LocaleSwitcher />
      <ThemeToggle className="hidden sm:inline-flex" />
    </div>
  );
}
