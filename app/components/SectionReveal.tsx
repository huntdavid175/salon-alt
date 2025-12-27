"use client";

import { MotionConfig, motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
} & Omit<MotionProps, "children">;

export function SectionReveal({
  children,
  className,
  delay = 0,
  y = 18,
  once = true,
  ...motionProps
}: Props) {
  return (
    <MotionConfig reducedMotion="never">
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        {...motionProps}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}


