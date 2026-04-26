"use client";

import { motion } from "framer-motion";
import SplitReveal from "@/components/motion/SplitReveal";
import { useT } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Pricing() {
  const t = useT(translations).pricing;
  return (
    <section id="pricing" className="section-pad relative">
      <div className="container-x">
        <header className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <span className="font-mono-label">{t.eyebrow}</span>
          <SplitReveal
            as="h2"
            text={t.title}
            className="font-display max-w-[18ch] text-[clamp(40px,6vw,96px)]"
          />
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              className={`gradient-border ${tier.highlight ? "spin-border glow-violet" : ""} relative flex flex-col rounded-2xl bg-[var(--bg-elevated)] p-8 md:p-10`}
              data-cursor={tier.highlight ? "TOP PICK" : "VIEW"}
            >
              {tier.highlight && (
                <span
                  className="absolute -top-3 left-8 rounded-full border border-[var(--accent-cyan)]/40 bg-[var(--bg-base)] px-3 py-1 text-[10px] tracking-[0.2em] text-[var(--accent-cyan)]"
                  style={{ fontFamily: "var(--font-jb-mono), ui-monospace, monospace" }}
                >
                  {t.mostChosen}
                </span>
              )}
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-[36px]">{tier.name}</h3>
                <span className="font-mono-label">/ {String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-3 max-w-[36ch] text-[14px] text-[var(--fg-secondary)]">
                {tier.audience}
              </p>
              <div className="my-8 border-y border-[var(--border-subtle)] py-7">
                <span className="font-display text-[clamp(40px,5vw,72px)]">{tier.price}</span>
                {tier.cadence && (
                  <span className="ml-2 text-[var(--fg-muted)]">{tier.cadence}</span>
                )}
              </div>
              <ul className="mb-10 space-y-3 text-[15px]">
                {tier.features.map((f) => (
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
                  tier.highlight
                    ? "bg-gradient-to-br from-[var(--accent-violet)] to-[var(--accent-cyan)] text-black"
                    : "border border-[var(--border-strong)] bg-white/[0.02] hover:border-[var(--accent-cyan)]"
                }`}
              >
                <span>{t.startWith} {tier.name}</span>
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
