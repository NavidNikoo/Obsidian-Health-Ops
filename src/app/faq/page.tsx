import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { faqs } from "@/content/siteCopy";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about our behavioral health billing services, onboarding, EHR support, and pricing.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="Frequently asked"
        title={
          <>
            <span className="text-gradient">The questions practice owners</span>{" "}
            <span className="text-gradient-accent">actually ask us.</span>
          </>
        }
        description="If yours is not answered here, we will answer it on a 30-minute call."
      />

      <Section className="!pt-12 sm:!pt-16">
        <Container size="md">
          <MotionStagger
            className="divide-y divide-white/[0.05] overflow-hidden rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)]"
            staggerChildren={0.04}
          >
            {faqs.map((f) => (
              <MotionItem key={f.q}>
                <details className="group p-6 sm:p-7 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 text-[16px] font-medium text-[var(--color-fg)] transition-colors duration-200 hover:text-[var(--color-accent)]">
                    <span>{f.q}</span>
                    <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-white/[0.06] text-[var(--color-fg-subtle)] transition-all duration-300 group-open:rotate-45 group-open:border-[var(--color-accent-line)] group-open:text-[var(--color-accent)]">
                      <svg
                        viewBox="0 0 12 12"
                        className="size-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                    {f.a}
                  </p>
                </details>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </Section>

      <CTASection
        eyebrow="Still wondering?"
        title="Ask us anything in plain language."
        description="We will answer honestly, even if the honest answer is that we are not the right fit."
      />
    </>
  );
}
