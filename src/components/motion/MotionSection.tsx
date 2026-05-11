"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useMemo, type ElementType } from "react";
import {
  fadeUp,
  reduceMotionVariants,
  revealViewport,
} from "@/lib/motion";

type MotionSectionProps = HTMLMotionProps<"div"> & {
  as?: ElementType;
  /** Optional delay (seconds) before this section reveals. */
  delay?: number;
};

/**
 * Single-element reveal-on-scroll wrapper.
 *
 * Uses a small opacity + translateY transform that respects
 * prefers-reduced-motion (falls back to a tiny fade only).
 */
export function MotionSection({
  as = "div",
  delay = 0,
  children,
  ...rest
}: MotionSectionProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const variants = reduceMotionVariants(fadeUp, prefersReducedMotion);
  // Memoize so the motion component identity is stable across renders.
  const Component = useMemo(() => motion(as), [as]);

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={variants}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </Component>
  );
}
