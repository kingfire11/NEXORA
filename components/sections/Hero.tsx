"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Magnetic from "@/components/motion/Magnetic";
import SplitReveal from "@/components/motion/SplitReveal";
import { motion } from "framer-motion";

const HeroShader = dynamic(() => import("@/components/webgl/HeroShader"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(60% 70% at 50% 35%, rgba(110,58,255,0.35), transparent 70%), radial-gradient(50% 60% at 70% 80%, rgba(0,240,255,0.18), transparent 70%), #0A0A0F",
      }}
    />
  ),
});

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <HeroShader />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-base)]"
        />
      </div>

      <div className="container-x relative flex min-h-[100svh] flex-col justify-end px-[clamp(20px,5vw,80px)] pb-[clamp(60px,10vw,140px)] pt-[clamp(140px,18vw,220px)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-mono-label mb-6"
        >
          ( 01 — AUTOMATION STUDIO )
        </motion.div>

        <SplitReveal
          as="h1"
          text="We automate the work that scales your business."
          className="font-display max-w-[18ch] text-[clamp(48px,9vw,160px)]"
        />

        <div className="mt-10 grid max-w-6xl grid-cols-1 items-end gap-10 md:grid-cols-[1.2fr_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="max-w-[60ch] text-[clamp(16px,1.2vw,19px)] leading-[1.55] text-[var(--fg-secondary)]"
          >
            NEXORA builds AI agents, sales workflows, and support bots that replace your most repetitive hours — so your team ships the work only humans can.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link href="#cta" data-cursor="START" className="btn-primary">
                Start automating
                <span aria-hidden>→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link href="#work" data-cursor="VIEW" className="btn-ghost">
                See our work
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.85 }}
          className="font-mono-label mt-12 flex flex-wrap items-center gap-x-8 gap-y-2"
        >
          <span>Trusted by 50+ teams</span>
          <span aria-hidden className="opacity-30">·</span>
          <span>12 000+ hours saved annually</span>
          <span aria-hidden className="opacity-30">·</span>
          <span>87% faster support</span>
        </motion.div>

        <div className="pointer-events-none absolute bottom-8 right-[clamp(20px,5vw,80px)] hidden flex-col items-center gap-3 md:flex">
          <span className="font-mono-label" style={{ writingMode: "vertical-rl" }}>
            SCROLL
          </span>
          <span className="scroll-indicator-line h-10 w-px" />
        </div>
      </div>
    </section>
  );
}
