"use client";

import { motion } from "framer-motion";
import SplitReveal from "@/components/motion/SplitReveal";
import { useT } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const ILLUS = [<PipelineIllu key="0" />, <ChatIllu key="1" />, <NodesIllu key="2" />, <OrbIllu key="3" />];

interface Service {
  num: string;
  title: string;
  desc: string;
  chips: string[];
  illustration: React.ReactNode;
}

export default function Services() {
  const t = useT(translations).services;
  const services: Service[] = t.items.map((it, i) => ({ ...it, illustration: ILLUS[i] }));
  return (
    <section id="services" className="section-pad relative">
      <div className="container-x">
        <header className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <span className="font-mono-label">{t.eyebrow}</span>
          <SplitReveal
            as="h2"
            text={t.title}
            className="font-display max-w-[18ch] text-[clamp(40px,6vw,96px)]"
          />
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:auto-rows-[minmax(0,1fr)]">
          <Card service={services[0]} className="md:col-span-7" />
          <Card service={services[1]} className="md:col-span-5" />
          <Card service={services[2]} className="md:col-span-5" />
          <Card service={services[3]} className="md:col-span-7" />
        </div>
      </div>
    </section>
  );
}

function Card({ service, className }: { service: Service; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`gradient-border group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl bg-[var(--bg-elevated)] p-8 md:p-10 ${className ?? ""}`}
      data-cursor="HOVER"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 80% at var(--mx,50%) var(--my,0%), rgba(110,58,255,0.18), transparent 65%)",
        }}
      />
      <div className="relative flex items-start justify-between gap-6">
        <span className="font-mono-label">{service.num}</span>
        <div className="h-24 w-24 transition-transform duration-700 ease-out group-hover:scale-105">
          {service.illustration}
        </div>
      </div>

      <div className="relative mt-12">
        <h3 className="font-display text-[clamp(28px,3.4vw,44px)]">{service.title}</h3>
        <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.6] text-[var(--fg-secondary)]">
          {service.desc}
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {service.chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-[var(--border-strong)] bg-white/[0.02] px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--fg-secondary)] transition-colors group-hover:border-[var(--accent-cyan)]/40"
              style={{ fontFamily: "var(--font-jb-mono), ui-monospace, monospace" }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PipelineIllu() {
  return (
    <svg viewBox="0 0 96 96" fill="none" className="h-full w-full">
      <defs>
        <linearGradient id="pl" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6E3AFF" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>
      </defs>
      <rect x="6" y="14" width="84" height="6" rx="3" fill="url(#pl)" opacity="0.9" />
      <rect x="14" y="32" width="64" height="6" rx="3" fill="url(#pl)" opacity="0.7" />
      <rect x="22" y="50" width="48" height="6" rx="3" fill="url(#pl)" opacity="0.5" />
      <rect x="32" y="68" width="32" height="6" rx="3" fill="url(#pl)" opacity="0.3" />
      <circle cx="48" cy="86" r="3" fill="#00F0FF" />
    </svg>
  );
}

function ChatIllu() {
  return (
    <svg viewBox="0 0 96 96" fill="none" className="h-full w-full">
      <defs>
        <linearGradient id="ch" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6E3AFF" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>
      </defs>
      <rect x="6" y="10" width="56" height="36" rx="10" stroke="url(#ch)" strokeWidth="1.4" />
      <rect x="34" y="48" width="56" height="36" rx="10" fill="none" stroke="url(#ch)" strokeWidth="1.4" />
      <circle cx="22" cy="28" r="2" fill="#fff" />
      <circle cx="32" cy="28" r="2" fill="#fff" />
      <circle cx="42" cy="28" r="2" fill="#fff" />
    </svg>
  );
}

function NodesIllu() {
  return (
    <svg viewBox="0 0 96 96" fill="none" className="h-full w-full">
      <defs>
        <linearGradient id="nd" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6E3AFF" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>
      </defs>
      <line x1="20" y1="20" x2="76" y2="48" stroke="url(#nd)" strokeWidth="1.2" />
      <line x1="76" y1="48" x2="20" y2="76" stroke="url(#nd)" strokeWidth="1.2" />
      <line x1="20" y1="20" x2="20" y2="76" stroke="url(#nd)" strokeWidth="1.2" />
      <circle cx="20" cy="20" r="6" fill="#0A0A0F" stroke="url(#nd)" strokeWidth="1.4" />
      <circle cx="76" cy="48" r="6" fill="#0A0A0F" stroke="url(#nd)" strokeWidth="1.4" />
      <circle cx="20" cy="76" r="6" fill="#0A0A0F" stroke="url(#nd)" strokeWidth="1.4" />
    </svg>
  );
}

function OrbIllu() {
  return (
    <svg viewBox="0 0 96 96" fill="none" className="h-full w-full">
      <defs>
        <radialGradient id="orb" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="60%" stopColor="#6E3AFF" />
          <stop offset="100%" stopColor="#0A0A0F" />
        </radialGradient>
      </defs>
      <circle cx="48" cy="48" r="34" fill="url(#orb)" />
      <ellipse cx="48" cy="48" rx="44" ry="10" fill="none" stroke="#00F0FF" strokeOpacity="0.5" strokeWidth="0.8" />
      <ellipse cx="48" cy="48" rx="44" ry="10" fill="none" stroke="#6E3AFF" strokeOpacity="0.5" strokeWidth="0.8" transform="rotate(60 48 48)" />
      <ellipse cx="48" cy="48" rx="44" ry="10" fill="none" stroke="#6E3AFF" strokeOpacity="0.5" strokeWidth="0.8" transform="rotate(-60 48 48)" />
    </svg>
  );
}
