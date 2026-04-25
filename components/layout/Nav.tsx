"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(140%)" : "blur(0px)",
        background: scrolled ? "rgba(10,10,15,0.55)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
      }}
    >
      <div className="container-x flex items-center justify-between gap-6 px-[clamp(20px,5vw,80px)] py-5">
        <div className="flex items-center gap-5">
          <Link href="/" data-cursor="HOME" className="flex items-center gap-3">
            <span className="font-display text-[22px] tracking-tight">NEXORA</span>
          </Link>
          <span className="hidden md:inline font-mono-label">[ AI · Automation · 2026 ]</span>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="VIEW"
              className="group relative px-4 py-2 text-[13px] tracking-[0.06em] text-[var(--fg-secondary)] transition-colors hover:text-white"
            >
              <span className="font-mono-label normal-case tracking-[0.14em]">{l.label}</span>
              <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent-cyan)] transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            data-cursor="BOOK"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/[0.02] px-4 py-2 text-[13px] font-medium tracking-[0.04em] transition-all hover:border-[var(--accent-cyan)] hover:bg-[rgba(0,240,255,0.04)]"
          >
            Book intro call
            <span aria-hidden>→</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            data-cursor="MENU"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)]"
          >
            <span className="block h-px w-4 bg-white" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-base)]">
          <div className="flex flex-col gap-1 px-[clamp(20px,5vw,80px)] py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border-subtle)] py-4 font-display text-3xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-violet)] to-[var(--accent-cyan)] px-5 py-3 text-sm font-semibold text-black"
            >
              Book intro call →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
