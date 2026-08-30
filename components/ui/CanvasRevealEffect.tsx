"use client";

import { cn } from "@/utils/cn";

export const CanvasRevealEffect = ({
  containerClassName,
  showGradient = true,
}: {
  containerClassName?: string;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("relative h-full w-full", containerClassName)}>
      {showGradient ? (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      ) : null}
    </div>
  );
};
