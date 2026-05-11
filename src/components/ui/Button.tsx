import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-[transform,box-shadow,background-color,color,border-color] duration-[280ms] ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform select-none disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0 active:duration-100";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[#06121A] hover:bg-[var(--color-accent-strong)] shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_8px_24px_-12px_rgba(79,209,197,0.55)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset,0_14px_36px_-12px_rgba(79,209,197,0.7)] hover:-translate-y-[2px]",
  secondary:
    "bg-[var(--color-surface)] text-[var(--color-fg)] ring-line hover:bg-[var(--color-surface-2)] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)]",
  ghost:
    "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm rounded-[var(--radius-md)]",
  md: "h-11 px-5 text-[15px] rounded-[var(--radius-md)]",
  lg: "h-12 px-6 text-base rounded-[var(--radius-lg)]",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  trailingIcon?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export function Button(props: LinkProps | NativeButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    trailingIcon = false,
  } = props;

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {trailingIcon ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 opacity-80 transition-transform duration-[280ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
        />
      ) : null}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={`group ${classes}`}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${classes}`}>
        {inner}
      </Link>
    );
  }

  const { href: _ignored, trailingIcon: _ti, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as NativeButtonProps;
  void _ignored; void _ti; void _v; void _s; void _c; void _ch;
  return (
    <button className={`group ${classes}`} {...rest}>
      {inner}
    </button>
  );
}
