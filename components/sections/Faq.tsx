"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplitReveal from "@/components/motion/SplitReveal";

const FAQ = [
  { q: "How fast can we go live?", a: "First workflow in production within 14 days. Full system in 6 weeks." },
  { q: "Do you replace our team?", a: "No. We replace the parts of their day that drain them. Your people get back to work that compounds." },
  { q: "What about data privacy?", a: "Self-hosted options on AWS / GCP / your own infra. We sign NDA before the first call and DPA before any data flows." },
  { q: "Which CRMs do you integrate with?", a: "Bitrix24, amoCRM, HubSpot, Salesforce, Pipedrive, Zoho. Anything with an API — we wire it." },
  { q: "Can the bots speak Russian and Kazakh?", a: "Yes. Native-quality output in 40+ languages out of the box, including KZ, RU, UZ, TR, AR." },
  { q: "What if the AI gets it wrong?", a: "Every agent has guardrails, fallbacks to humans, and full audit logs. You see every decision, every input, every output." },
  { q: "Do we own the workflows?", a: "Yes. Code, prompts, and infra are yours from day one. No lock-in, no rev-share." },
  { q: "What's not a good fit?", a: "Highly regulated workflows requiring deterministic output (legal contracts, medical diagnosis). We'll tell you upfront." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative">
      <div className="container-x">
        <header className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <span className="font-mono-label">( 07 — FREQUENTLY ASKED )</span>
          <SplitReveal
            as="h2"
            text="Quick answers."
            className="font-display max-w-[18ch] text-[clamp(40px,6vw,96px)]"
          />
        </header>

        <ul className="border-t border-[var(--border-subtle)]">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="border-b border-[var(--border-subtle)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-cursor={isOpen ? "CLOSE" : "OPEN"}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start justify-between gap-8 py-7 text-left transition-colors"
                >
                  <span className="flex items-start gap-6">
                    <span className="font-mono-label mt-2 hidden md:inline">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-[clamp(22px,2.6vw,36px)] leading-[1.05]">{item.q}</span>
                  </span>
                  <span
                    aria-hidden
                    className="mt-2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] transition-all group-hover:border-[var(--accent-cyan)]"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .35s ease" }}
                  >
                    <span className="block h-px w-3 bg-white" />
                    <span className="absolute block h-3 w-px bg-white" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[60ch] pb-8 pl-0 text-[16px] leading-[1.6] text-[var(--fg-secondary)] md:pl-[68px]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
