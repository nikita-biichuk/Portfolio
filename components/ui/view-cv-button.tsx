"use client";
import React from "react";

const CheckCvButton = ({
  title,
  onClick,
  icon,
  position,
}: {
  title: string;
  onClick: () => void;
  icon?: React.ReactNode;
  position?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
    >
      <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-muted)_0%,var(--color-muted-foreground)_50%,var(--color-muted)_100%)] opacity-60" />
      <span className="inline-flex h-full w-full cursor-pointer items-center gap-2 justify-center rounded-full bg-background hover:bg-card duration-300 ease-in-out px-5 py-1 text-sm font-medium text-foreground backdrop-blur-3xl relative z-10">
        {icon && position === "left" && icon}
        {title}
        {icon && position === "right" && icon}
      </span>
    </button>
  );
};

export default CheckCvButton;
