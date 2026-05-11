import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";

export const metadata: Metadata = {
  title: "About",
  description:
    "A modern, boutique revenue cycle partner focused on behavioral health practices.",
};

const principles = [
  {
    title: "Specialization over scale",
    body:
      "We focus on behavioral health. Therapy, psychiatry, ABA, and substance use practices each have their own coding and authorization patterns, and we are intentionally built around them.",
  },
  {
    title: "Transparency by default",
    body:
      "Charges, payments, denials, and AR aging should be visible to you in plain language. We design our workflows around shared visibility, not monthly mystery numbers.",
  },
  {
    title: "Calm operations",
    body:
      "Billing should feel boring. Predictable cadence, clean data, fewer surprises. That is the philosophy we are building the firm around.",
  },
  {
    title: "Real humans on real accounts",
    body:
      "As a boutique firm, our default is real conversations with the people who actually work your account, not a help-desk queue.",
  },
];

const expectations = [
  {
    title: "A modern, software-minded approach",
    body:
      "We treat billing as an operational system, not a bag of spreadsheets. Clean workflows, clear ownership, and tooling that supports the people running it.",
  },
  {
    title: "Behavioral-health-first thinking",
    body:
      "From eligibility to denial follow-up, every workflow is designed with behavioral health payer behavior in mind, not retrofitted from a generalist playbook.",
  },
  {
    title: "Honest scope and pacing",
    body:
      "As an early-stage boutique firm, we are intentional about who we partner with and how we grow. We would rather tell you we are not the right fit than overpromise.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            <span className="text-gradient">A modern, boutique partner</span>{" "}
            <span className="text-gradient-accent">for behavioral health billing.</span>
          </>
        }
        description="Meridian is a boutique revenue cycle partner focused exclusively on behavioral health. Our goal is simple: build the billing operation we wish more practices had access to."
      />

      <Section>
        <MotionSection>
          <SectionHeader
            eyebrow="Why Meridian exists"
            title={
              <>
                Built for practices tired of{" "}
                <span className="text-gradient-accent">black-box billing.</span>
              </>
            }
            description="Behavioral health billing is not hard because it is complicated. It is hard because it is operational: authorizations, payer rules, handoffs, and consistent follow-up."
          />
        </MotionSection>
        <MotionStagger className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <MotionItem className="lg:col-span-7">
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)] p-7 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              <p>
                Meridian exists to make billing feel boring: a clear cadence, clean
                queues, and the same small set of repeatable actions every week.
                We prioritize visibility over heroics—so you can see what is happening,
                what is stuck, and what is changing next.
              </p>
              <p className="mt-4">
                As a boutique firm, we stay intentional about scope. We partner with
                practices where operational clarity matters, and we build the system
                alongside you instead of pretending one template fits everyone.
              </p>
            </div>
          </MotionItem>
          <MotionItem className="lg:col-span-5">
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-bg-raised)] p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
                What we prioritize
              </div>
              <ul className="mt-5 space-y-3 text-sm text-[var(--color-fg-muted)]">
                <li className="flex gap-3">
                  <span className="font-mono text-[var(--color-accent)]">01</span>
                  <span>First-pass clean claims through design, not luck</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[var(--color-accent)]">02</span>
                  <span>Authorization and eligibility tracked like operations</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[var(--color-accent)]">03</span>
                  <span>Transparent AR and denial follow-up with clear ownership</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-[var(--color-accent)]">04</span>
                  <span>Reporting that makes the next decision obvious</span>
                </li>
              </ul>
            </div>
          </MotionItem>
        </MotionStagger>
      </Section>

      <Section>
        <MotionSection>
          <SectionHeader
            eyebrow="What we believe"
            title={
              <>
                The principles that keep us{" "}
                <span className="text-gradient-accent">honest.</span>
              </>
            }
            description="A short list, because we want to be measured against it."
          />
        </MotionSection>
        <MotionStagger className="mt-12 grid gap-5 md:grid-cols-2">
          {principles.map((p) => (
            <MotionItem key={p.title}>
              <Card hover>
                <div className="p-7">
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                    {p.body}
                  </p>
                </div>
              </Card>
            </MotionItem>
          ))}
        </MotionStagger>
      </Section>

      <Section className="bg-[var(--color-bg-raised)]/50">
        <MotionSection>
          <SectionHeader
            eyebrow="What to expect"
            tone="violet"
            title={
              <>
                How we work with{" "}
                <span className="text-gradient-accent">the practices we partner with.</span>
              </>
            }
            description="We are happy to talk about our approach in detail on a call. Until then, here is the shape of it."
          />
        </MotionSection>
        <MotionSection className="mt-10 rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)] p-7">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
            Built by operators
          </div>
          <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">
            We approach revenue cycle like an ops team: clear queues, explicit handoffs,
            defined ownership, and a review cadence that does not depend on memory or
            “checking when there’s time.”
          </p>
        </MotionSection>
        <MotionStagger className="mt-12 grid gap-5 md:grid-cols-3">
          {expectations.map((e) => (
            <MotionItem
              key={e.title}
              className="group rounded-[var(--radius-lg)] border border-white/[0.06] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]"
            >
              <h3 className="text-[16px] font-semibold tracking-tight">
                {e.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">
                {e.body}
              </p>
            </MotionItem>
          ))}
        </MotionStagger>
      </Section>

      <CTASection
        eyebrow="Work with us"
        title="If our principles match your practice, let us talk."
        description="No long sales cycle. A short call, an honest assessment, and a clear next step."
        primaryLabel="Reach out"
      />
    </>
  );
}
