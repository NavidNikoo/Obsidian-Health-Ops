import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  className?: string;
  withWordmark?: boolean;
};

export function Logo({ className = "", withWordmark = true }: Props) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative grid size-8 place-items-center rounded-[10px] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-violet)] shadow-[0_6px_20px_-8px_rgba(79,209,197,0.7)]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-4 text-[#06121A]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 18 L9 8 L13 16 L17 11 L20 14" />
        </svg>
      </span>
      {withWordmark ? (
        <span className="text-[15px] font-semibold tracking-tight text-[var(--color-fg)]">
          {site.shortName}
          <span className="ml-1 text-[var(--color-fg-subtle)] font-normal">
            Billing
          </span>
        </span>
      ) : null}
    </Link>
  );
}
