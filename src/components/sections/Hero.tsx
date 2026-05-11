"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { heroCopy } from "@/content/siteCopy";
import { HeroDashboard } from "./HeroDashboard";
import { durations, easings, stagger } from "@/lib/motion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : stagger.text,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const item = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } },
      }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: durations.reveal, ease: easings.smooth },
        },
      };

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute inset-0 bg-radial-fade ambient-drift" />
        <div className="absolute inset-0 bg-violet-fade ambient-drift-reverse" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Container>
        <div className="grid items-center gap-16 pt-24 pb-20 md:pt-32 md:pb-28 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="lg:col-span-6"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.div variants={item}>
              <Badge tone="accent">{heroCopy.eyebrow}</Badge>
            </motion.div>
            <motion.h1
              variants={item}
              className="mt-6 text-balance text-[44px] leading-[1.05] font-semibold tracking-[-0.025em] sm:text-[56px] lg:text-[64px]"
            >
              <span className="text-gradient">{heroCopy.title}</span>{" "}
              <span className="text-gradient-accent">{heroCopy.titleAccent}</span>
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-[var(--color-fg-muted)] sm:text-lg"
            >
              {heroCopy.subtitle}
            </motion.p>
            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href={heroCopy.primaryCta.href} size="lg" trailingIcon>
                {heroCopy.primaryCta.label}
              </Button>
              <Button
                href={heroCopy.secondaryCta.href}
                variant="secondary"
                size="lg"
              >
                {heroCopy.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-fg-subtle)]"
            >
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
                Specialized in behavioral health
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[var(--color-violet)]" />
                Works inside your EHR
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[var(--color-fg-subtle)]" />
                HIPAA-aligned operations
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : durations.slow,
              ease: easings.smooth,
              delay: prefersReducedMotion ? 0 : 0.15,
            }}
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
