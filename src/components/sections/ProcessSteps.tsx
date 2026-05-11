import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/content/siteCopy";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";

export function ProcessSteps() {
  return (
    <Section id="process" className="bg-[var(--color-bg-raised)]/50">
      <MotionSection>
        <SectionHeader
          eyebrow="How we work"
          tone="violet"
          title={
            <>
              A calm, repeatable process from{" "}
              <span className="text-gradient-accent">audit to scale.</span>
            </>
          }
          description="No mystery. You always know what we are doing this week and what it is moving for your practice."
        />
      </MotionSection>

      <MotionStagger className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((s) => (
          <MotionItem
            key={s.step}
            className="group relative bg-[var(--color-surface)] p-7 transition-colors duration-300 hover:bg-[var(--color-surface-2)]"
          >
            <div className="font-mono text-xs tracking-[0.2em] text-[var(--color-fg-subtle)]">
              STEP {s.step}
            </div>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-[var(--color-fg)]">
              {s.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">
              {s.body}
            </p>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-line)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </MotionItem>
        ))}
      </MotionStagger>
    </Section>
  );
}
