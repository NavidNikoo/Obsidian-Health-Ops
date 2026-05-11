import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { pricingPlans, faqs } from "@/content/siteCopy";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing as a percentage of monthly collections. No setup fees, no per-claim fees.",
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
            <span className="text-gradient">Simple, transparent,</span>{" "}
            <span className="text-gradient-accent">aligned with your collections.</span>
          </>
        }
        description="No setup fees. No per-claim fees. No surprise add-ons. You see what we collect, and you see what you pay."
      />

      <Section className="!pt-12 sm:!pt-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={[
                "relative flex flex-col rounded-[var(--radius-xl)] border p-7",
                plan.highlight
                  ? "border-[var(--color-accent-line)] bg-gradient-to-b from-[var(--color-surface-2)] to-[var(--color-surface)] shadow-[0_30px_80px_-30px_rgba(79,209,197,0.45)]"
                  : "border-white/[0.06] bg-[var(--color-surface)]",
              ].join(" ")}
            >
              {plan.highlight ? (
                <div className="absolute -top-3 left-7">
                  <Badge tone="accent">Most popular</Badge>
                </div>
              ) : null}

              <h3 className="text-lg font-semibold tracking-tight">
                {plan.name}
              </h3>
              <p className="mt-1.5 text-sm text-[var(--color-fg-muted)]">
                {plan.blurb}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-[-0.03em] tabular-nums text-[var(--color-fg)]">
                  {plan.price}
                </span>
                <span className="text-sm text-[var(--color-fg-subtle)]">
                  {plan.unit}
                </span>
              </div>

              <ul className="mt-7 flex-1 space-y-3 text-sm text-[var(--color-fg-muted)]">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
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
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-center text-xs text-[var(--color-fg-subtle)]">
            All plans include onboarding, EHR integration, and a written
            performance review every month.
          </p>
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-raised)]/50">
        <Container size="md">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Pricing FAQs
          </h2>
          <div className="mt-10 divide-y divide-white/[0.05] rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)]">
            {pricingFaqs.map((f) => (
              <details
                key={f.q}
                className="group p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-medium text-[var(--color-fg)]">
                  {f.q}
                  <span className="grid size-7 place-items-center rounded-full border border-white/[0.06] text-[var(--color-fg-subtle)] transition-transform group-open:rotate-45">
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
            ))}
          </div>
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
