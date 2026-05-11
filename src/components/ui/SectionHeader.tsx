import type { ReactNode } from "react";
import { Badge } from "./Badge";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "neutral" | "accent" | "violet";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  tone = "accent",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <Badge tone={tone} className="mb-4">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-fg-muted)] text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
