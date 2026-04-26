"use client";

import { useLang } from "@/lib/i18n";

export default function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-0 rounded-full border border-[var(--border-strong)] bg-white/[0.02] p-0.5 ${compact ? "text-[10px]" : "text-[11px]"}`}
      style={{ fontFamily: "var(--font-jb-mono), ui-monospace, monospace" }}
    >
      {(["en", "ru"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            data-cursor={l.toUpperCase()}
            aria-pressed={active}
            className={`relative rounded-full px-2.5 py-1 uppercase tracking-[0.2em] transition-all ${
              active
                ? "bg-gradient-to-br from-[var(--accent-violet)] to-[var(--accent-cyan)] text-black"
                : "text-[var(--fg-secondary)] hover:text-white"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
