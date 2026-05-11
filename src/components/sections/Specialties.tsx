import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { specialties } from "@/content/siteCopy";
import {
  Brain,
  HeartPulse,
  Sparkles,
  Stethoscope,
  Video,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Brain, Stethoscope, Sparkles, HeartPulse, Video, Building2];

export function Specialties() {
  return (
    <Section id="specialties">
      <SectionHeader
        eyebrow="Specialties we serve"
        title={
          <>
            Built for the{" "}
            <span className="text-gradient-accent">behavioral health stack.</span>
          </>
        }
        description="Coding, authorization patterns, and payer behavior in behavioral health are unique. We focus exclusively on this work."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {specialties.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-white/[0.06] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]"
            >
              <div className="flex size-10 items-center justify-center rounded-[var(--radius-md)] border border-white/[0.06] bg-[var(--color-bg-raised)] text-[var(--color-accent)]">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-[var(--color-fg)]">
                {s.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">
                {s.body}
              </p>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--color-accent-line)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
