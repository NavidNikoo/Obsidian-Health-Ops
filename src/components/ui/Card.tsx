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
        "transition-[transform,box-shadow,background-color,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        hover
          ? "hover:bg-[var(--color-surface-2)] hover:ring-white/[0.10] hover:-translate-y-[3px] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_24px_60px_-28px_rgba(0,0,0,0.65),0_0_0_1px_rgba(79,209,197,0.10)]"
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
