"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SplitReveal from "@/components/motion/SplitReveal";

const CASES = [
  {
    slug: "telco-operator",
    num: "01",
    client: "Telco Operator",
    category: "Support automation",
    metric: "−87%",
    metricLabel: "response time",
    desc: "24/7 multilingual WhatsApp agent answering 14 000 tickets/month with 92% CSAT.",
    palette: ["#6E3AFF", "#00F0FF"],
  },
  {
    slug: "b2b-saas",
    num: "02",
    client: "B2B SaaS",
    category: "Sales pipeline",
    metric: "+312%",
    metricLabel: "qualified leads",
    desc: "AI-SDR sequences across LinkedIn + email, fully integrated with HubSpot.",
    palette: ["#00F0FF", "#6E3AFF"],
  },
  {
    slug: "fnb-chain",
    num: "03",
    client: "F&B Chain",
    category: "Internal ops",
    metric: "12 000h",
    metricLabel: "saved per year",
    desc: "n8n workflows replaced 4 manual reporting roles across 23 venues.",
    palette: ["#FFB547", "#6E3AFF"],
  },
];

export default function Cases() {
  return (
    <section id="work" className="section-pad relative">
      <div className="container-x">
        <header className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <span className="font-mono-label">( 04 — SELECTED WORK )</span>
          <SplitReveal
            as="h2"
            text="Numbers do the talking."
            className="font-display max-w-[18ch] text-[clamp(40px,6vw,96px)]"
          />
        </header>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {CASES.map((c) => (
            <motion.li
              key={c.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/case/${c.slug}`}
                data-cursor="OPEN"
                className="group relative block overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] transition-colors hover:border-[var(--border-strong)]"
              >
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden"
                  style={{
                    background: `radial-gradient(60% 80% at 30% 30%, ${c.palette[0]}, transparent 60%), radial-gradient(60% 80% at 70% 70%, ${c.palette[1]}, transparent 60%), #0A0A0F`,
                  }}
                >
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]" />
                  <div className="absolute left-6 top-6 flex items-center gap-3">
                    <span className="font-mono-label">{c.num}</span>
                    <span className="font-mono-label">{c.category}</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="font-display text-[clamp(40px,6vw,80px)] text-grad leading-none">
                      {c.metric}
                    </div>
                    <div className="font-mono-label mt-2">{c.metricLabel}</div>
                  </div>
                </div>
                <div className="border-t border-[var(--border-subtle)] p-6">
                  <h3 className="font-display text-[26px]">{c.client}</h3>
                  <p className="mt-3 max-w-[40ch] text-[14px] leading-[1.55] text-[var(--fg-secondary)]">
                    {c.desc}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-mono-label">READ CASE</span>
                    <span aria-hidden className="text-lg transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
