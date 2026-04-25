"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplitReveal from "@/components/motion/SplitReveal";

const STEPS = [
  {
    num: "01",
    title: "Audit",
    duration: "Week 1",
    desc: "We map every manual touchpoint in your sales and support funnel and quantify hours lost. You get a heatmap and a savings forecast.",
  },
  {
    num: "02",
    title: "Design",
    duration: "Week 2",
    desc: "We architect the automation: which agents, which integrations, which guardrails. You approve before a single line of code.",
  },
  {
    num: "03",
    title: "Build",
    duration: "Weeks 3–5",
    desc: "We ship in weekly increments. You see workflows running on staging by week 3 and start training your team.",
  },
  {
    num: "04",
    title: "Scale",
    duration: "Week 6+",
    desc: "We hand off with full documentation, dashboards, and a 30-day SLA. Then we come back monthly to push the next 10x.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const railH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="section-pad relative" ref={ref}>
      <div className="container-x">
        <header className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <span className="font-mono-label">( 03 — HOW WE WORK )</span>
          <SplitReveal
            as="h2"
            text="From audit to autopilot in 6 weeks."
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
            <p className="font-mono-label mt-6">04 STEPS · 6 WEEKS · ONE SYSTEM</p>
            <p className="mt-4 max-w-[36ch] text-[var(--fg-secondary)]">
              A repeatable runway from messy ops to autonomous workflows — without freezing your team for a quarter.
            </p>
          </div>

          <ol className="space-y-20 md:space-y-32">
            {STEPS.map((s) => (
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
