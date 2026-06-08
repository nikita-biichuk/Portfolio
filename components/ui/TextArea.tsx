"use client";
import * as React from "react";
import { cn } from "@/utils/cn";
import { useMotionTemplate, useMotionValue, m } from "framer-motion";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <m.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--color-primary),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/textarea"
      >
        <textarea
          className={cn(
            `flex w-full border-none bg-background dark:bg-input text-foreground shadow-input rounded-md px-3 py-2 text-sm resize-none
          file:border-0 file:bg-transparent
          file:text-sm file:font-medium placeholder:text-muted-foreground
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-ring
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_0px_1px_var(--color-border)]
           transition duration-400
           `,
            className
          )}
          ref={ref}
          {...props}
        />
      </m.div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
