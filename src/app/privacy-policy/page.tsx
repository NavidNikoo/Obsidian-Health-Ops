import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/lib/site";
import {
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_EFFECTIVE_DATE_ISO,
  privacySections,
} from "@/content/privacyPolicy";

const displaySiteUrl = site.url.replace(/^https?:\/\//i, "").replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}: how we collect, use, and protect information submitted through ${displaySiteUrl}.`,
};

export default function PrivacyPolicyPage() {
  const sections = privacySections({
    companyName: site.name,
    websiteUrlDisplay: displaySiteUrl,
    contactEmail: site.contactEmail,
  });

  return (
    <div className="relative isolate overflow-hidden border-b border-white/[0.05]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-35"
      >
        <div className="absolute inset-0 bg-grid mask-fade-b" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>

      <Section className="!py-16 sm:!py-20">
        <Container size="md">
          <div className="max-w-3xl">
            <Badge tone="accent">Legal</Badge>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-[44px]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-[var(--color-fg-subtle)]">
              Effective date:{" "}
              <time dateTime={PRIVACY_EFFECTIVE_DATE_ISO}>
                {PRIVACY_EFFECTIVE_DATE}
              </time>
            </p>
            <p className="mt-6 border-l-2 border-[var(--color-accent-line)] pl-5 text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
              This Privacy Policy summarizes how visitors and prospective clients
              interacting with{" "}
              <span className="text-[var(--color-fg)]">{site.name}</span>
              ’s Site should expect their information to be treated. Operational
              services involving protected health information are governed separately
              by agreements such as BAAs where applicable—not by this standalone
              website notice alone.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-[22px]">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 border-t border-white/[0.06] pt-7">
                  {section.blocks.map((block, i) => {
                    if (block.type === "p") {
                      return (
                        <p
                          key={i}
                          className="text-[14px] leading-[1.7] text-[var(--color-fg-muted)]"
                        >
                          {block.text}
                        </p>
                      );
                    }
                    return (
                      <ul
                        key={i}
                        className="list-disc space-y-2.5 pl-5 text-[14px] leading-[1.65] text-[var(--color-fg-muted)] marker:text-[var(--color-accent)]"
                      >
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
