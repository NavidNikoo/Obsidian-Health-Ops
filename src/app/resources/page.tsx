import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { resourceArticles } from "@/content/siteCopy";
import { ArrowUpRight } from "lucide-react";
import { MotionStagger } from "@/components/motion/MotionStagger";
import { MotionItem } from "@/components/motion/MotionItem";
import { MotionSection } from "@/components/motion/MotionSection";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Roadmap articles on behavioral health billing operations, credentialing, payer combinations, switching billers, and reporting.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title={
          <>
            <span className="text-gradient">Plain-language writing for</span>{" "}
            <span className="text-gradient-accent">behavioral health operators.</span>
          </>
        }
        description="A preview of the topics we are building our resources library around. No SEO fluff, no padding."
      />

      <Section className="!pt-12 sm:!pt-16">
        <MotionStagger as="ul" className="grid gap-5 md:grid-cols-2">
          {resourceArticles.map((a) => (
            <MotionItem key={a.title} as="li">
              <Link
                href="#"
                className="group block h-full rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-[var(--color-surface-2)] hover:shadow-[0_20px_56px_-32px_rgba(79,209,197,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <Badge tone="violet">{a.category}</Badge>
                  <span className="text-xs uppercase tracking-[0.14em] text-[var(--color-fg-subtle)]">
                    Upcoming
                  </span>
                </div>
                <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-balance text-[var(--color-fg)]">
                  {a.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                  {a.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)]">
                  Notify me when published
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </MotionItem>
          ))}
        </MotionStagger>

        <MotionSection>
          <p className="mt-10 text-center text-sm text-[var(--color-fg-subtle)]">
            These are topics in our publishing roadmap. Subscribe to be notified
            when we publish the first articles.
          </p>
        </MotionSection>
      </Section>

      <CTASection
        eyebrow="Want it in your inbox?"
        title="Get our quarterly behavioral health billing brief."
        description="Short, specific, and actually useful. No drip campaigns, no resold lists."
        primaryLabel="Get the brief"
      />
    </>
  );
}
