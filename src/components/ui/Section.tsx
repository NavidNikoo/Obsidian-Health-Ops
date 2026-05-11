import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  children: ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl";
  id?: string;
  bare?: boolean;
};

export function Section({
  children,
  className = "",
  containerSize = "xl",
  id,
  bare = false,
}: Props) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 ${className}`}
    >
      {bare ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  );
}
