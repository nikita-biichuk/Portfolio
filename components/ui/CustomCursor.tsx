"use client";
import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const opacity = useMotionValue(0);

  const dotX = useSpring(cursorX, { stiffness: 600, damping: 35, mass: 0.4 });
  const dotY = useSpring(cursorY, { stiffness: 600, damping: 35, mass: 0.4 });
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 20, mass: 0.8 });
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 20, mass: 0.8 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTouch(false);

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      opacity.set(1);
    };
    const onLeave = () => opacity.set(0);
    const onEnter = () => opacity.set(1);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [cursorX, cursorY, opacity]);

  if (isTouch) return null;

  return (
    <>
      <m.div
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%", opacity }}
        className="fixed top-0 left-0 z-[99999] h-2.5 w-2.5 rounded-full bg-primary pointer-events-none will-change-transform"
      />
      <m.div
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", opacity }}
        className="fixed top-0 left-0 z-[99998] h-9 w-9 rounded-full border border-primary/40 pointer-events-none will-change-transform"
      />
    </>
  );
}
