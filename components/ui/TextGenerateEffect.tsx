"use client";
import { useEffect } from "react";
import { m, stagger, useAnimate } from "framer-motion";

import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  numberForColor,
}: {
  words: string;
  className?: string;
  numberForColor: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/refs
  }, [scope.current]);

  const renderWords = () => {
    return (
      <m.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <m.span
              key={word + idx}
              className={`${idx > numberForColor ? "text-primary" : "text-foreground"} opacity-0`}
            >
              {word}{" "}
            </m.span>
          );
        })}
      </m.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-foreground leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
