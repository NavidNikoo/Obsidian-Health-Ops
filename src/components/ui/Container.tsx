import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const widths = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
} as const;

export function Container({ children, className = "", size = "xl" }: Props) {
  return (
    <div className={`mx-auto w-full px-6 sm:px-8 ${widths[size]} ${className}`}>
      {children}
    </div>
  );
}
