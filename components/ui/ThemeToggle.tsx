"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-8 shrink-0 sm:h-10 sm:w-10" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-[0px_2px_18px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors duration-200 hover:bg-accent sm:h-10 sm:w-10 ${className ?? ""}`}
    >
      {isDark ? (
        <MdOutlineLightMode className="h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]" />
      ) : (
        <MdOutlineDarkMode className="h-[14px] w-[14px] sm:h-[18px] sm:w-[18px]" />
      )}
    </button>
  );
}
