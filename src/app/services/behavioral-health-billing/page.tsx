import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Behavioral Health Billing",
  description:
    "Specialized billing for psychiatry, outpatient therapy, ABA, substance use, and IOP programs. Built on the realities of behavioral health payers.",
};

const challenges = [
  {
    title: "Authorizations that move",
    body:
      "BH benefits change mid-cycle. Sessions reset. Carve-outs surface. We track every authorization and flag renewals 30 days out.",
  },
  {
    title: "Modifiers that matter",
    body:
      "Telehealth modifier policy still varies by payer. We maintain a per-payer rule set and apply the right combination on every claim.",
  },
  {
    title: "Concurrent billing",
    body:
      "ABA and group therapy require careful unit and provider attribution. We model it the way payers actually expect to see it.",
  },
  {
    title: "Documentation alignment",
    body:
      "When a denial is documentation-driven, we surface it back to the clinical team in plain language with a fix, not a complaint.",
  },
];

const codeExamples = [
  { code: "90791", desc: "Psychiatric diagnostic evaluation" },
  { code: "90834", desc: "Psychotherapy, 45 minutes" },
  { code: "90837", desc: "Psychotherapy, 60 minutes" },
  { code: "90853", desc: "Group psychotherapy" },
  { code: "97153", desc: "Adaptive behavior treatment by protocol" },
  { code: "97155", desc: "Adaptive behavior treatment with protocol modification" },
  { code: "H0015", desc: "Substance abuse intensive outpatient" },
  { code: "99214", desc: "E/M, established patient" },
];

export default function BehavioralHealthBillingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Behavioral Health Billing"
        title={
          <>
            <span className="text-gradient">Built on the realities of</span>{" "}
            <span className="text-gradient-accent">
              behavioral health payers.
            </span>
          </>
        }
        description="We are not a generalist billing company that also takes therapy clients. Behavioral health is the only thing we do."
      />

      <Section>
        <SectionHeader
          eyebrow="What is different"
          title="Why generalist billing fails behavioral health"
          description="The codes look simple from the outside. The payer behavior around them is anything but."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {challenges.map((c) => (
            <Card key={c.title} hover>
              <div className="p-7">
                <h3 className="text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                  {c.body}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-raised)]/50">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Badge tone="accent">Coding focus</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Codes we are built around.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-fg-muted)]">
              From outpatient psychotherapy to ABA protocol work and IOP per
              diems, our workflows are designed around the behavioral health
              code set rather than retrofitted from a generalist playbook.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-[var(--color-fg-muted)]">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 text-[var(--color-accent)]" />
                Aligned with current CPT and HCPCS guidance
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 text-[var(--color-accent)]" />
                Per-payer modifier and POS rule sets
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 text-[var(--color-accent)]" />
                Add-on code logic considered as part of the scrub
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)]">
              <div className="grid grid-cols-12 border-b border-white/[0.05] px-5 py-3 text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
                <div className="col-span-3">Code</div>
                <div className="col-span-9">Description</div>
              </div>
              <ul className="divide-y divide-white/[0.04]">
                {codeExamples.map((c) => (
                  <li
                    key={c.code}
                    className="grid grid-cols-12 items-center gap-2 px-5 py-3.5 text-sm"
                  >
                    <div className="col-span-3 font-mono tabular-nums text-[var(--color-accent)]">
                      {c.code}
                    </div>
                    <div className="col-span-9 text-[var(--color-fg-muted)]">
                      {c.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Move with confidence"
        title="A free 30-minute audit of your behavioral health billing."
        description="Send us a recent month of remits and we will tell you, specifically, where money is leaking and what we would change first."
        primaryLabel="Request your audit"
      />
    </>
  );
}
