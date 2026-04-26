"use client";

import CountUp from "@/components/motion/CountUp";
import { useT } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Metrics() {
  const t = useT(translations).metrics;
  return (
    <section className="section-pad relative border-y border-[var(--border-subtle)]">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10">
          {t.items.map((m, i) => (
            <div key={i} className="flex flex-col gap-5">
              <span className="font-mono-label">/ {String(i + 1).padStart(2, "0")}</span>
              <div className="font-display flex items-baseline">
                <CountUp
                  to={m.value}
                  className="text-grad text-[clamp(64px,9vw,144px)] leading-none"
                  format={m.value >= 1000 ? (n: number) => Math.round(n).toLocaleString("en-US").replace(/,/g, " ") : undefined}
                />
                <span className="text-grad text-[clamp(48px,7vw,108px)] leading-none">
                  {m.suffix}
                </span>
              </div>
              <p className="max-w-[28ch] text-[15px] leading-[1.5] text-[var(--fg-secondary)]">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
