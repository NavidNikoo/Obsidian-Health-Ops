"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useMemo, type ElementType } from "react";
import {
  reduceMotionVariants,
  revealViewport,
  stagger as staggerTokens,
  staggerContainer,
} from "@/lib/motion";

type MotionStaggerProps = HTMLMotionProps<"div"> & {
  as?: ElementType;
  /** Time between each child reveal in seconds. */
  staggerChildren?: number;
  /** Delay before the first child reveals. */
  delayChildren?: number;
};

/**
 * Reveal container that staggers its children using shared motion tokens.
 *
 * Wrap with this and use <MotionItem /> for each child you want to reveal.
 */
export function MotionStagger({
  as = "div",
  staggerChildren = staggerTokens.card,
  delayChildren = 0,
  children,
  ...rest
}: MotionStaggerProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const variants = reduceMotionVariants(
    staggerContainer(staggerChildren, delayChildren),
    prefersReducedMotion
  );
  const Component = useMemo(() => motion(as), [as]);

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={variants}
      {...rest}
    >
      {children}
    </Component>
  );
}
