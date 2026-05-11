import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { resourceArticles } from "@/content/siteCopy";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Plain-language writing on behavioral health billing operations, denial reduction, coding, and reporting.",
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
        description="No SEO fluff. Just useful notes from people who run billing operations every day."
      />

      <Section className="!pt-12 sm:!pt-16">
        <ul className="grid gap-5 md:grid-cols-2">
          {resourceArticles.map((a) => (
            <li key={a.title}>
              <Link
                href="#"
                className="group block h-full rounded-[var(--radius-xl)] border border-white/[0.06] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-[var(--color-surface-2)]"
              >
                <div className="flex items-center justify-between">
                  <Badge tone="violet">{a.category}</Badge>
                  <span className="text-xs text-[var(--color-fg-subtle)]">
                    {a.readTime}
                  </span>
                </div>
                <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-balance text-[var(--color-fg)]">
                  {a.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                  {a.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)]">
                  Read article
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-[var(--color-fg-subtle)]">
          More articles coming soon. Subscribe to be notified when we publish.
        </p>
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
