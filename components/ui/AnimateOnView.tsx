"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";

function isElementInView(element: HTMLElement, margin = 0) {
  const rect = element.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.bottom >= margin &&
    rect.top <= viewHeight - margin &&
    rect.right >= margin &&
    rect.left <= viewWidth - margin
  );
}

export function AnimateOnView({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reveal = () => {
      setIsVisible(true);
    };

    if (isElementInView(element)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const hiddenOffset = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
  }[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={cn(
        "transition-[opacity,transform] duration-[600ms] ease-out",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : cn("opacity-0", hiddenOffset),
        className
      )}
    >
      {children}
    </div>
  );
}
