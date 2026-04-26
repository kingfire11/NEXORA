"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitReveal from "@/components/motion/SplitReveal";
import { useT } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Process() {
  const t = useT(translations).process;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const railH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="section-pad relative" ref={ref}>
      <div className="container-x">
        <header className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <span className="font-mono-label">{t.eyebrow}</span>
          <SplitReveal
            as="h2"
            text={t.title}
            className="font-display max-w-[20ch] text-[clamp(40px,6vw,96px)]"
          />
        </header>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div className="md:sticky md:top-32 md:self-start">
            <div className="relative h-1 w-full bg-[var(--border-subtle)] md:h-[60vh] md:w-1">
              <motion.div
                style={{ height: railH }}
                className="absolute left-0 top-0 w-full bg-gradient-to-b from-[var(--accent-violet)] to-[var(--accent-cyan)]"
              />
            </div>
            <p className="font-mono-label mt-6">{t.railLabel}</p>
            <p className="mt-4 max-w-[36ch] text-[var(--fg-secondary)]">
              {t.railSub}
            </p>
          </div>

          <ol className="space-y-20 md:space-y-32">
            {t.steps.map((s) => (
              <motion.li
                key={s.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative border-t border-[var(--border-subtle)] pt-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono-label text-[var(--accent-cyan)]">{s.num}</span>
                  <span className="font-mono-label">{s.duration}</span>
                </div>
                <h3 className="font-display mt-6 text-[clamp(40px,6vw,84px)]">{s.title}</h3>
                <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.55] text-[var(--fg-secondary)]">
                  {s.desc}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
