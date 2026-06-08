"use client";
import React, { useEffect, useId, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

import { SparklesCore } from "./sparkles";

export const Cover = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  type BeamData = { position: number; duration: number; delay: number };
  const [beamPositions, setBeamPositions] = useState<BeamData[]>([]);

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current.clientWidth ?? 0);

      const height = ref.current.clientHeight ?? 0;
      const numberOfBeams = Math.floor(height / 10);
      const data = Array.from<unknown, BeamData>({ length: numberOfBeams }, (_, i) => ({
        position: (i + 1) * (height / (numberOfBeams + 1)),
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 2 + 1,
      }));
      setBeamPositions(data);
    }
    // ref.current is intentionally used as dep to re-measure after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/refs
  }, [ref.current]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      className="relative group/cover inline-block bg-neutral-100 dark:bg-neutral-900 hover:bg-primary dark:hover:bg-neutral-900 px-2 py-2 transition duration-200 rounded-sm"
    >
      <AnimatePresence>
        {hovered && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: 0.2,
              },
            }}
            className="h-full w-full overflow-hidden absolute inset-0"
          >
            <m.div
              animate={{
                translateX: ["-50%", "0%"],
              }}
              transition={{
                translateX: {
                  duration: 10,
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
              className="w-[200%] h-full flex"
            >
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={180}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={180}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
      {beamPositions.map((beam, index) => (
        <Beam
          key={index}
          hovered={hovered}
          duration={beam.duration}
          delay={beam.delay}
          width={containerWidth}
          style={{
            top: `${beam.position}px`,
          }}
        />
      ))}
      <m.span
        key={String(hovered)}
        animate={{
          scale: hovered ? 0.8 : 1,
          x: hovered ? [0, -30, 30, -30, 30, 0] : 0,
          y: hovered ? [0, 30, -30, 30, -30, 0] : 0,
        }}
        exit={{
          filter: "none",
          scale: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.2,
          x: {
            duration: 0.2,
            repeat: Infinity,
            repeatType: "loop",
          },
          y: {
            duration: 0.2,
            repeat: Infinity,
            repeatType: "loop",
          },
          scale: {
            duration: 0.2,
          },
          filter: {
            duration: 0.2,
          },
        }}
        className={cn(
          "dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white transition duration-200",
          className
        )}
      >
        {children}
      </m.span>
    </div>
  );
};

export const Beam = ({
  className,
  delay,
  duration,
  hovered,
  width = 600,
  ...svgProps
}: {
  className?: string;
  delay?: number;
  duration?: number;
  hovered?: boolean;
  width?: number;
} & React.ComponentProps<typeof m.svg>) => {
  const id = useId();
  // eslint-disable-next-line react-hooks/purity
  const randomDelay = useRef(Math.random() * 0.8 + 0.2);
  // eslint-disable-next-line react-hooks/purity
  const randomRepeatDelay = useRef(Math.random() + 1);

  return (
    <m.svg
      width={width ?? "600"}
      height="1"
      viewBox={`0 0 ${width ?? "600"} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute inset-x-0 w-full", className)}
      {...svgProps}
    >
      <m.path d={`M0 0.5H${width ?? "600"}`} stroke={`url(#svgGradient-${id})`} />

      <defs>
        <m.linearGradient
          id={`svgGradient-${id}`}
          key={String(hovered)}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: hovered ? "-10%" : "-5%",
            y1: 0,
            y2: 0,
          }}
          animate={{
            x1: "110%",
            x2: hovered ? "100%" : "105%",
            y1: 0,
            y2: 0,
          }}
          /* eslint-disable react-hooks/refs */
          transition={{
            duration: hovered ? 0.5 : (duration ?? 2),
            ease: "linear",
            repeat: Infinity,
            delay: hovered ? randomDelay.current : 0,
            repeatDelay: hovered ? randomRepeatDelay.current : (delay ?? 1),
          }}
          /* eslint-enable react-hooks/refs */
        >
          <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </m.linearGradient>
      </defs>
    </m.svg>
  );
};
