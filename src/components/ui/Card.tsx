import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section" | "li";
};

export function Card({
  children,
  className = "",
  hover = false,
  as: As = "div",
}: Props) {
  return (
    <As
      className={[
        "relative rounded-[var(--radius-lg)] bg-[var(--color-surface)] ring-1 ring-inset ring-white/[0.06]",
        "shadow-[var(--shadow-soft)]",
        hover
          ? "transition-all duration-300 hover:bg-[var(--color-surface-2)] hover:ring-white/[0.10] hover:-translate-y-0.5"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </As>
  );
}

export function CardHeader({ children, className = "" }: Props) {
  return <div className={`p-6 sm:p-7 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = "" }: Props) {
  return <div className={`p-6 sm:p-7 pt-0 ${className}`}>{children}</div>;
}
