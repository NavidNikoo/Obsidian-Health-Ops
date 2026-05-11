import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { approachCards } from "@/content/siteCopy";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";

export function OurApproach() {
  return (
    <Section id="approach">
      <MotionSection>
        <SectionHeader
          eyebrow="Our approach"
          title={
            <>
              How we{" "}
              <span className="text-gradient-accent">think about the work.</span>
            </>
          }
          description="We are a modern boutique billing firm. Here is the lens we bring to every practice we partner with."
        />
      </MotionSection>

      <MotionStagger className="mt-14 grid gap-5 md:grid-cols-3">
        {approachCards.map((c) => (
          <MotionItem
            key={c.title}
            as="article"
            className="group relative flex h-full flex-col rounded-[var(--radius-lg)] border border-white/[0.06] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]"
          >
            <div className="grid size-9 place-items-center rounded-[var(--radius-md)] border border-white/[0.06] bg-[var(--color-bg-raised)] transition-colors duration-300 group-hover:border-[var(--color-accent-line)]">
              <span className="block size-2 rounded-full bg-[var(--color-accent)]" />
            </div>
            <h3 className="mt-5 text-[18px] font-semibold tracking-tight text-[var(--color-fg)]">
              {c.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              {c.body}
            </p>
          </MotionItem>
        ))}
      </MotionStagger>
    </Section>
  );
}
