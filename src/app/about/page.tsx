import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "We are a small, focused billing operation built specifically for behavioral health practices.",
};

const principles = [
  {
    title: "Specialization over scale",
    body:
      "We will never bill for orthopedics. Behavioral health has its own rules and its own pace, and we are built around it.",
  },
  {
    title: "Transparency by default",
    body:
      "Every claim, every dollar, every denial is visible to you. No black boxes, no monthly mystery numbers.",
  },
  {
    title: "Calm operations",
    body:
      "Billing should feel boring. Predictable cadence, clean data, fewer surprises. That is the whole product.",
  },
  {
    title: "Real humans on real accounts",
    body:
      "You will know the name of the person who works your AR. They will know the name of your office manager.",
  },
];

const team = [
  {
    name: "Avery Chen",
    role: "Founder",
    bio: "Ten years running RCM for outpatient psychiatric and ABA practices. Started Meridian after watching a third multi-site group get burned by a generalist biller.",
  },
  {
    name: "Marcus Reyes",
    role: "Head of Operations",
    bio: "Former operations lead at a national clearinghouse. Obsessive about workflow design and the small details that compound into clean claim rates.",
  },
  {
    name: "Priya Sundaram",
    role: "Head of Coding",
    bio: "CPC with two decades of behavioral health coding experience. Owns our payer rule library and trains every billing pod.",
  },
  {
    name: "Daniel Okafor",
    role: "Client Success",
    bio: "Spent six years inside a regional therapy group. Speaks fluent EHR and even more fluent practice owner.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            <span className="text-gradient">A small team that takes</span>{" "}
            <span className="text-gradient-accent">behavioral health seriously.</span>
          </>
        }
        description="We started Meridian because we kept watching good practices lose money to billing companies that did not understand the specialty. Now we run the billing operation we wish existed."
      />

      <Section>
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
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {principles.map((p) => (
            <Card key={p.title} hover>
              <div className="p-7">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                  {p.body}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--color-bg-raised)]/50">
        <SectionHeader
          eyebrow="The team"
          tone="violet"
          title="People you can actually call."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-[var(--radius-lg)] border border-white/[0.06] bg-[var(--color-surface)] p-6"
            >
              <div className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-violet)] text-sm font-semibold text-[#06121A]">
                {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-4 text-[16px] font-semibold tracking-tight">
                {m.name}
              </h3>
              <div className="text-sm text-[var(--color-accent)]">{m.role}</div>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
                {m.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Work with us"
        title="If our principles match your practice, let us talk."
        description="No long sales cycle. A short call, an honest assessment, a clear next step."
        primaryLabel="Reach out"
      />
    </>
  );
}
