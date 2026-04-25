"use client";

import CountUp from "@/components/motion/CountUp";

const METRICS = [
  {
    value: 50,
    suffix: "+",
    label: "teams operating on NEXORA infrastructure",
  },
  {
    value: 12000,
    suffix: "h",
    label: "of human work automated annually",
    format: (n: number) => Math.round(n).toLocaleString("en-US").replace(/,/g, " "),
  },
  {
    value: 87,
    suffix: "%",
    label: "average reduction in first-response time",
  },
];

export default function Metrics() {
  return (
    <section className="section-pad relative border-y border-[var(--border-subtle)]">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-10">
          {METRICS.map((m, i) => (
            <div key={i} className="flex flex-col gap-5">
              <span className="font-mono-label">/ {String(i + 1).padStart(2, "0")}</span>
              <div className="font-display flex items-baseline">
                <CountUp
                  to={m.value}
                  className="text-grad text-[clamp(64px,9vw,144px)] leading-none"
                  format={m.format}
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
