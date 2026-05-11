import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/content/siteCopy";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader
        eyebrow="What practices say"
        title={
          <>
            The kind of partner you{" "}
            <span className="text-gradient-accent">stop thinking about.</span>
          </>
        }
        description="Quietly competent. That is the bar we hold ourselves to."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="relative flex h-full flex-col rounded-[var(--radius-lg)] border border-white/[0.06] bg-[var(--color-surface)] p-7"
          >
            <Quote
              aria-hidden="true"
              className="size-5 text-[var(--color-accent)] opacity-80"
            />
            <blockquote className="mt-5 text-[15px] leading-relaxed text-[var(--color-fg)]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-white/[0.05] pt-5 text-sm">
              <div className="font-medium text-[var(--color-fg)]">{t.name}</div>
              <div className="text-[var(--color-fg-subtle)]">{t.title}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
