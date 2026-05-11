import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MotionSection } from "@/components/motion/MotionSection";

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  eyebrow = "Ready when you are",
  title = "Let us take billing off your plate.",
  description = "A 30-minute call is enough for us to tell you, honestly, whether we can help your practice.",
  primaryHref = "/contact",
  primaryLabel = "Book a call",
  secondaryHref = "/services",
  secondaryLabel = "See how we work",
}: Props) {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <MotionSection className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-white/[0.07] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg-raised)] p-10 sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-radial-fade ambient-drift"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[var(--color-violet-soft)] blur-3xl ambient-drift-reverse"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -bottom-24 size-72 rounded-full bg-[var(--color-accent-soft)] blur-3xl ambient-drift"
          />

          <div className="relative max-w-2xl">
            <Badge tone="accent">{eyebrow}</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-fg-muted)]">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primaryHref} size="lg" trailingIcon>
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
