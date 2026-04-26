"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplitReveal from "@/components/motion/SplitReveal";
import { useT } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Faq() {
  const t = useT(translations).faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative">
      <div className="container-x">
        <header className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <span className="font-mono-label">{t.eyebrow}</span>
          <SplitReveal
            as="h2"
            text={t.title}
            className="font-display max-w-[18ch] text-[clamp(40px,6vw,96px)]"
          />
        </header>

        <ul className="border-t border-[var(--border-subtle)]">
          {t.items.map((item, i) => {
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
