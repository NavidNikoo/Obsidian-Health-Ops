import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { pricingPlans, faqs } from "@/content/siteCopy";
import { Check } from "lucide-react";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import { MotionSection } from "@/components/motion/MotionSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, scoped pricing based on specialty, claim volume, and operational complexity—usually a percentage of collections. No setup fees, no per-claim fees.",
};

const pricingFaqs = faqs.filter((f) =>
  ["How do you charge?", "Do you handle credentialing?"].includes(f.q)
);

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            <span className="text-gradient">Collections-based.</span>{" "}
            <span className="text-gradient-accent">Scoped before you commit.</span>
          </>
        }
        description="No setup fees or per-claim add-ons. Rates are agreed after we understand how your practice runs."
      />

      <Section className="!pt-10 sm:!pt-14">
        <MotionStagger className="grid gap-5 lg:grid-cols-3 lg:gap-6 lg:items-stretch">
          {pricingPlans.map((plan) => (
            <MotionItem
              key={plan.name}
              as="article"
              className={[
                "group relative flex h-full flex-col rounded-[var(--radius-xl)] border p-8 transition-all duration-300 hover:-translate-y-0.5",
                plan.highlight
                  ? "border-[var(--color-accent-line)] bg-gradient-to-b from-[var(--color-surface-2)] to-[var(--color-surface)] shadow-[0_28px_70px_-32px_rgba(79,209,197,0.38)] hover:shadow-[0_36px_84px_-32px_rgba(79,209,197,0.48)]"
                  : "border-white/[0.06] bg-[var(--color-surface)] shadow-[var(--shadow-soft)] hover:border-white/[0.12]",
              ].join(" ")}
            >
              <div className="flex min-h-7 items-end">
                {plan.highlight ? (
                  <Badge tone="accent">Most popular</Badge>
                ) : null}
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--color-fg)]">
                {plan.name}
              </h3>
              <p className="mt-2 text-[13px] leading-snug text-[var(--color-fg-muted)]">
                {plan.blurb}
              </p>

              <div className="mt-8 border-b border-white/[0.06] pb-7">
                <div className="min-h-[112px] sm:min-h-[120px]">
                  <div className="text-[40px] font-semibold tracking-[-0.035em] leading-[1.05] tabular-nums text-[var(--color-fg)] sm:text-[44px]">
                    {plan.amount}
                  </div>
                  <p className="mt-2 text-[13px] font-medium tracking-tight leading-snug text-[var(--color-fg-muted)]">
                    {plan.basis}
                  </p>
                  {plan.note ? (
                    <p className="mt-2 max-w-[22rem] text-xs leading-snug text-[var(--color-fg-subtle)]">
                      {plan.note}
                    </p>
                  ) : null}
                </div>
              </div>

              <ul className="mt-7 flex flex-1 flex-col gap-2.5 text-[13px] leading-snug text-[var(--color-fg-muted)]">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check
                      className="mt-0.5 size-3.5 shrink-0 text-[var(--color-accent)]"
                      strokeWidth={2.25}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 pt-px">
                <Button
                  href={plan.cta.href}
                  variant={plan.highlight ? "primary" : "secondary"}
                  size="md"
                  trailingIcon
                  className="w-full"
                >
                  {plan.cta.label}
                </Button>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>

        <div className="mt-12">
          <p className="text-center text-[12px] leading-relaxed tracking-tight text-[var(--color-fg-subtle)]">
            Every plan ships with onboarding support, connected EHR work, and a
            documented monthly cadence—in writing.
          </p>
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-raised)]/50">
        <Container size="md">
          <MotionSection>
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              Pricing FAQs
            </h2>
          </MotionSection>
          <MotionStagger
            className="mt-10 divide-y divide-white/[0.05] rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)]"
            staggerChildren={0.05}
          >
            {pricingFaqs.map((f) => (
              <MotionItem key={f.q}>
                <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-medium text-[var(--color-fg)] transition-colors duration-200 hover:text-[var(--color-accent)]">
                    {f.q}
                    <span className="grid size-7 place-items-center rounded-full border border-white/[0.06] text-[var(--color-fg-subtle)] transition-all duration-300 group-open:rotate-45 group-open:border-[var(--color-accent-line)] group-open:text-[var(--color-accent)]">
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
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">
                    {f.a}
                  </p>
                </details>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </Section>

      <CTASection
        eyebrow="Curious about your number?"
        title="We will model your specific economics on a discovery call."
        description="Send us a recent month of collections and we will walk through what working with us would look like for your practice, in real numbers."
      />
    </>
  );
}
