import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "neutral" | "accent" | "violet";
  className?: string;
};

const tones = {
  neutral:
    "bg-white/[0.04] text-[var(--color-fg-muted)] ring-1 ring-inset ring-white/10",
  accent:
    "bg-[var(--color-accent-soft)] text-[var(--color-accent)] ring-1 ring-inset ring-[var(--color-accent-line)]",
  violet:
    "bg-[var(--color-violet-soft)] text-[var(--color-violet)] ring-1 ring-inset ring-[var(--color-violet-line)]",
} as const;

export function Badge({ children, tone = "neutral", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-tight ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
