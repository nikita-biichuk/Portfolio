"use client";
import { useScroll, m } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <m.div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-primary origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
