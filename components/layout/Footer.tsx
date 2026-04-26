"use client";

import { useT } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Footer() {
  const t = useT(translations).footer;
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="container-x px-[clamp(20px,5vw,80px)] pt-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {t.columns.map((c) => (
            <div key={c.title}>
              <h4 className="font-mono-label mb-5">{c.title}</h4>
              <ul className="space-y-3 text-[14px] text-[var(--fg-secondary)]">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" data-cursor="LINK" className="transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex items-end justify-between gap-6 border-t border-[var(--border-subtle)] pt-8">
          <p
            className="text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]"
            style={{ fontFamily: "var(--font-jb-mono), ui-monospace, monospace" }}
          >
            {t.legal}
          </p>
          <p
            className="hidden text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)] md:block"
            style={{ fontFamily: "var(--font-jb-mono), ui-monospace, monospace" }}
          >
            {t.version}
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none mt-8 select-none overflow-hidden text-center"
        style={{ transform: "translateY(15%)" }}
      >
        <span
          className="font-display block leading-none tracking-[-0.06em] text-grad opacity-90"
          style={{ fontSize: "clamp(120px, 22vw, 360px)" }}
        >
          NEXORA
        </span>
      </div>
    </footer>
  );
}
