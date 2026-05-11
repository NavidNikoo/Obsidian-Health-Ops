import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion tokens for Meridian Billing.
 *
 * Direction: calm precision, opacity + small translate, GPU-friendly transforms only.
 * No bounce, no overshoot, no parallax, no decorative loops.
 */

export const easings = {
  /** Smooth premium ease-out. Use for reveals and most transitions. */
  smooth: [0.22, 1, 0.36, 1] as const,
  /** Slightly snappier for hovers. */
  snap: [0.32, 0.72, 0, 1] as const,
};

export const durations = {
  fast: 0.18,
  base: 0.28,
  reveal: 0.55,
  slow: 0.75,
};

export const stagger = {
  card: 0.08,
  text: 0.05,
};

/** Sentinel transitions used across primitives. */
export const transitions = {
  reveal: {
    duration: durations.reveal,
    ease: easings.smooth,
  } satisfies Transition,
  hover: {
    duration: durations.base,
    ease: easings.snap,
  } satisfies Transition,
} as const;

/* ------------------------------------------------------------------ */
/* Variants                                                            */
/* ------------------------------------------------------------------ */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.reveal,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.reveal, ease: easings.smooth },
  },
};

/** Container that staggers its children's reveals. */
export function staggerContainer(
  staggerChildren: number = stagger.card,
  delayChildren: number = 0
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

/* ------------------------------------------------------------------ */
/* Reduced motion helpers                                              */
/* ------------------------------------------------------------------ */

/**
 * Build variants that respect prefers-reduced-motion.
 *
 * When reduced motion is requested, transforms are removed and only an
 * instantaneous opacity change remains.
 */
export function reduceMotionVariants(
  variants: Variants,
  prefersReducedMotion: boolean
): Variants {
  if (!prefersReducedMotion) return variants;
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.01 },
    },
  };
}

/** Default viewport behavior for reveal-on-scroll. */
export const revealViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -10% 0px",
} as const;
