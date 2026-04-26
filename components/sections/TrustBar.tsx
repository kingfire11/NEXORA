"use client";

import Marquee from "@/components/motion/Marquee";
import { useT } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const COMPANIES = [
  "KASPI", "CHOCOFAMILY", "KOLESA", "AIRBA", "JUSAN", "FORTE",
  "INDRIVE", "BTS DIGITAL", "BEELINE", "KCELL", "HALYK", "BI GROUP",
];

export default function TrustBar() {
  const t = useT(translations).trust;
  return (
    <section className="relative border-y border-[var(--border-subtle)] bg-[var(--bg-base)] py-10">
      <div className="container-x grid grid-cols-1 items-center gap-6 px-[clamp(20px,5vw,80px)] md:grid-cols-[auto_1fr]">
        <span className="font-mono-label whitespace-nowrap pr-6 md:border-r md:border-[var(--border-subtle)]">
          {t.label}
        </span>
        <Marquee
          duration={70}
          items={COMPANIES.map((c) => (
            <span
              key={c}
              className="font-display text-[clamp(20px,2vw,28px)] tracking-tight text-[var(--fg-secondary)] transition-colors duration-300 hover:text-white"
              style={{ fontWeight: 800 }}
            >
              {c}
            </span>
          ))}
        />
      </div>
    </section>
  );
}
