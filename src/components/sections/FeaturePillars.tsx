import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Check } from "lucide-react";
import { featurePillars } from "@/content/siteCopy";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";

export function FeaturePillars() {
  return (
    <Section id="how-it-works">
      <MotionSection>
        <SectionHeader
          eyebrow="The system"
          title={
            <>
              One operating layer for the{" "}
              <span className="text-gradient-accent">entire revenue cycle.</span>
            </>
          }
          description="Each step is owned, instrumented, and measured. No more black-box billing companies sending you a number at the end of the month."
        />
      </MotionSection>

      <MotionStagger className="mt-14 grid gap-5 md:grid-cols-2">
        {featurePillars.map((pillar, idx) => (
          <MotionItem key={pillar.title}>
            <Card hover className="overflow-hidden">
              <div className="flex items-start justify-between gap-4 p-7">
                <div>
                  <Badge tone={idx % 2 === 0 ? "accent" : "violet"}>
                    {pillar.eyebrow}
                  </Badge>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--color-fg)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                    {pillar.body}
                  </p>
                </div>
                <div className="hidden sm:grid size-10 shrink-0 place-items-center rounded-[var(--radius-md)] border border-white/[0.06] bg-[var(--color-bg-raised)] font-mono text-xs text-[var(--color-fg-subtle)] tabular-nums">
                  0{idx + 1}
                </div>
              </div>
              <ul className="border-t border-white/[0.05] bg-[var(--color-surface-2)]/40 px-7 py-5 text-sm text-[var(--color-fg-muted)]">
                {pillar.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 py-1.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </MotionItem>
        ))}
      </MotionStagger>
    </Section>
  );
}
