import type { ReactNode } from "react";
import { Container } from "./Container";
import { Badge } from "./Badge";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "neutral" | "accent" | "violet";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "accent",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.05]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="absolute inset-0 bg-radial-fade" />
      </div>
      <Container>
        <div className={`max-w-3xl pt-24 pb-16 sm:pt-32 sm:pb-20 ${alignment}`}>
          {eyebrow ? (
            <Badge tone={tone} className="mb-5">
              {eyebrow}
            </Badge>
          ) : null}
          <h1 className="text-balance text-[40px] leading-[1.05] font-semibold tracking-[-0.025em] sm:text-[52px]">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed text-[var(--color-fg-muted)] sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
