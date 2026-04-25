"use client";

import { motion } from "framer-motion";
import SplitReveal from "@/components/motion/SplitReveal";

const TIERS = [
  {
    name: "Starter",
    price: "$2 400",
    cadence: "/ mo",
    audience: "Founders shipping their first automation",
    features: [
      "1 workflow live",
      "Weekly check-in",
      "Email support",
      "30-day SLA",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$6 800",
    cadence: "/ mo",
    audience: "Teams scaling support and sales",
    features: [
      "Up to 4 workflows",
      "Dedicated PM",
      "Slack channel",
      "Monthly strategy",
      "99% uptime SLA",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Let’s talk",
    cadence: "",
    audience: "Operators with 50+ employees",
    features: [
      "Unlimited workflows",
      "Embedded engineer",
      "Custom agents",
      "24/7 on-call",
      "Quarterly roadmap",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad relative">
      <div className="container-x">
        <header className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <span className="font-mono-label">( 06 — ENGAGEMENT MODELS )</span>
          <SplitReveal
            as="h2"
            text="Pick a tempo. Switch any time."
            className="font-display max-w-[18ch] text-[clamp(40px,6vw,96px)]"
          />
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              className={`gradient-border ${t.highlight ? "spin-border glow-violet" : ""} relative flex flex-col rounded-2xl bg-[var(--bg-elevated)] p-8 md:p-10`}
              data-cursor={t.highlight ? "TOP PICK" : "VIEW"}
            >
              {t.highlight && (
                <span
                  className="absolute -top-3 left-8 rounded-full border border-[var(--accent-cyan)]/40 bg-[var(--bg-base)] px-3 py-1 text-[10px] tracking-[0.2em] text-[var(--accent-cyan)]"
                  style={{ fontFamily: "var(--font-jb-mono), ui-monospace, monospace" }}
                >
                  MOST CHOSEN
                </span>
              )}
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-[36px]">{t.name}</h3>
                <span className="font-mono-label">/ {String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-3 max-w-[36ch] text-[14px] text-[var(--fg-secondary)]">
                {t.audience}
              </p>
              <div className="my-8 border-y border-[var(--border-subtle)] py-7">
                <span className="font-display text-[clamp(40px,5vw,72px)]">{t.price}</span>
                {t.cadence && (
                  <span className="ml-2 text-[var(--fg-muted)]">{t.cadence}</span>
                )}
              </div>
              <ul className="mb-10 space-y-3 text-[15px]">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[var(--fg-secondary)]">
                    <span className="mt-[7px] h-px w-4 bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent-cyan)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                data-cursor="START"
                className={`mt-auto inline-flex items-center justify-between rounded-full px-5 py-3 text-[14px] font-medium transition-all ${
                  t.highlight
                    ? "bg-gradient-to-br from-[var(--accent-violet)] to-[var(--accent-cyan)] text-black"
                    : "border border-[var(--border-strong)] bg-white/[0.02] hover:border-[var(--accent-cyan)]"
                }`}
              >
                <span>Start with {t.name}</span>
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
