"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useMemo, type ElementType } from "react";
import { fadeUp, reduceMotionVariants } from "@/lib/motion";

type MotionItemProps = HTMLMotionProps<"div"> & {
  as?: ElementType;
};

/**
 * Child item used inside <MotionStagger />. Inherits its parent's variant state.
 */
export function MotionItem({ as = "div", children, ...rest }: MotionItemProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const variants = reduceMotionVariants(fadeUp, prefersReducedMotion);
  const Component = useMemo(() => motion(as), [as]);

  return (
    <Component variants={variants} {...rest}>
      {children}
    </Component>
  );
}
