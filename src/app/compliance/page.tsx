import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { trustBadges } from "@/content/siteCopy";
import { Lock, ShieldCheck, KeyRound, FileSearch, Users, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance and Security",
  description:
    "Our HIPAA-aligned operational safeguards: encryption, access controls, BAAs, audit logging, and incident response.",
};

const safeguards = [
  {
    icon: Lock,
    title: "Encryption",
    body: "All client data is encrypted in transit using TLS 1.2+ and at rest using AES-256 on supported infrastructure.",
  },
  {
    icon: KeyRound,
    title: "Access controls",
    body: "Role-based access with least privilege. Multi-factor authentication is required for every team member.",
  },
  {
    icon: Users,
    title: "Vendor management",
    body: "We sign Business Associate Agreements (BAAs) with every subprocessor that may handle client information.",
  },
  {
    icon: FileSearch,
    title: "Audit logging",
    body: "Access to client EHRs and internal systems is logged. Logs are retained according to our data retention policy.",
  },
  {
    icon: AlertTriangle,
    title: "Incident response",
    body: "We maintain a documented incident response plan with defined roles, escalation paths, and notification timelines.",
  },
  {
    icon: ShieldCheck,
    title: "Workforce training",
    body: "All team members complete HIPAA awareness training at hire and on a recurring annual cadence.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Compliance and Security"
        title={
          <>
            <span className="text-gradient">HIPAA-aligned operations,</span>{" "}
            <span className="text-gradient-accent">documented and reviewed.</span>
          </>
        }
        description="We are a service organization, not a software vendor. The safeguards below describe how our team operates day to day when working with client information."
      />

      <Section id="security">
        <SectionHeader
          eyebrow="Our safeguards"
          title={
            <>
              How we protect{" "}
              <span className="text-gradient-accent">your data and your patients.</span>
            </>
          }
          description="Our practices are aligned with the HIPAA Security Rule. We continuously refine them as our operations and client base grow."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {safeguards.map((s) => (
            <div
              key={s.title}
              className="rounded-[var(--radius-lg)] border border-white/[0.06] bg-[var(--color-surface)] p-6"
            >
              <div className="grid size-10 place-items-center rounded-[var(--radius-md)] border border-white/[0.06] bg-[var(--color-bg-raised)] text-[var(--color-accent)]">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-[16px] font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {trustBadges.map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
      </Section>

      <Section id="privacy" className="bg-[var(--color-bg-raised)]/50">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Badge tone="violet">Privacy</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              How we handle protected health information.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-fg-muted)]">
              We treat PHI as a privilege, not a convenience. Our default is to
              collect the minimum information necessary to perform the billing
              services you contract us for.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)] p-7 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              <ul className="space-y-4">
                <li>
                  <span className="font-medium text-[var(--color-fg)]">
                    Data minimization.
                  </span>{" "}
                  We only access the patient records required to bill, post, and
                  follow up on claims for your practice.
                </li>
                <li>
                  <span className="font-medium text-[var(--color-fg)]">
                    Purpose limitation.
                  </span>{" "}
                  We use client data exclusively to perform our contracted
                  billing services. We do not sell or share client data.
                </li>
                <li>
                  <span className="font-medium text-[var(--color-fg)]">
                    Retention.
                  </span>{" "}
                  We retain records consistent with applicable regulatory
                  requirements and our service agreements with you.
                </li>
                <li>
                  <span className="font-medium text-[var(--color-fg)]">
                    Patient rights.
                  </span>{" "}
                  We support your obligations under HIPAA for patient access,
                  amendment, and accounting of disclosures.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[var(--radius-xl)] border border-white/[0.07] bg-[var(--color-surface)] p-7 text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
            Disclaimer
          </div>
          <p className="mt-3">
            This page describes our operational safeguards and intended
            practices. It is not a legal opinion or a guarantee of compliance
            with any specific law or regulation. We are happy to provide our
            current Business Associate Agreement and a summary of our security
            program upon request as part of your evaluation process.
          </p>
        </div>
      </Section>

      <CTASection
        eyebrow="Talk to security"
        title="Want our security and compliance documentation?"
        description="We are happy to walk through our BAA, our security overview, and our subprocessor list with your team."
        primaryLabel="Request documentation"
      />
    </>
  );
}
