import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { featurePillars, specialties } from "@/content/siteCopy";
import { ArrowRight, Check } from "lucide-react";
import { MotionSection } from "@/components/motion/MotionSection";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End to end revenue cycle management for behavioral health practices: eligibility, claims, posting, AR, reporting, and credentialing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            <span className="text-gradient">Every step of your revenue</span>{" "}
            <span className="text-gradient-accent">cycle, owned end to end.</span>
          </>
        }
        description="We are not a software vendor. We are an outsourced billing operation built specifically for behavioral health, and we run inside your existing EHR."
      />

      <Section>
        <MotionStagger className="grid gap-5 md:grid-cols-2">
          {featurePillars.map((pillar, idx) => (
            <MotionItem key={pillar.title}>
              <Card hover className="overflow-hidden">
                <div className="p-7">
                  <Badge tone={idx % 2 === 0 ? "accent" : "violet"}>
                    {pillar.eyebrow}
                  </Badge>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                    {pillar.body}
                  </p>
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

      <Section className="bg-[var(--color-bg-raised)]/50">
        <MotionSection>
          <SectionHeader
            eyebrow="Specialties"
            tone="violet"
            title={
              <>
                We focus on{" "}
                <span className="text-gradient-accent">
                  behavioral health only.
                </span>
              </>
            }
            description="Each specialty has its own coding and authorization quirks. Here is what we work in every day."
          />
        </MotionSection>
        <MotionStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s) => (
            <MotionItem
              key={s.title}
              className="rounded-[var(--radius-lg)] border border-white/[0.06] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]"
            >
              <h3 className="text-[16px] font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">
                {s.body}
              </p>
            </MotionItem>
          ))}
        </MotionStagger>
        <MotionSection className="mt-10">
          <Link
            href="/services/behavioral-health-billing"
            className="group inline-flex items-center gap-2 text-[var(--color-accent)] transition-colors duration-200 hover:text-[var(--color-accent-strong)]"
          >
            Read the deep dive on behavioral health billing
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </MotionSection>
      </Section>

      <CTASection
        title="Have a specific situation in mind?"
        description="Whether you are scaling from one provider to twelve or migrating from another biller, we have probably seen something like it. Tell us about it."
        primaryLabel="Talk to our team"
      />
    </>
  );
}
