"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color,box-shadow,height] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-b border-white/[0.07] backdrop-blur-xl bg-[rgba(7,9,26,0.78)] shadow-[0_1px_0_0_rgba(255,255,255,0.02)_inset,0_16px_40px_-32px_rgba(0,0,0,0.7)]"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-8",
          "transition-[height] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "h-[60px]" : "h-16",
        ].join(" ")}
      >
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            {primaryNav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative rounded-md px-3 py-2 text-[14px] tracking-tight transition-colors duration-200",
                    active
                      ? "text-[var(--color-fg)]"
                      : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]",
                  ].join(" ")}
                >
                  {item.label}
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--color-accent-line)] to-transparent"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="/contact" variant="primary" size="sm" trailingIcon>
            Talk to us
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-md text-[var(--color-fg-muted)] hover:bg-white/5 hover:text-[var(--color-fg)] md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/[0.06] bg-[var(--color-bg-raised)] md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-6 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-[15px] text-[var(--color-fg-muted)] hover:bg-white/5 hover:text-[var(--color-fg)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/[0.06] pt-4">
              <Button href="/contact" variant="primary" size="md" trailingIcon>
                Talk to us
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
