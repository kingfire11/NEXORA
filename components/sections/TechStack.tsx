"use client";

import Marquee from "@/components/motion/Marquee";
import SplitReveal from "@/components/motion/SplitReveal";
import { useT } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const ROW_A = ["CLAUDE","OPENAI","GEMINI","VERCEL","SUPABASE","POSTGRES","N8N","MAKE","ZAPIER"];
const ROW_B = ["BITRIX24","AMOCRM","HUBSPOT","TWILIO","WHATSAPP","TELEGRAM","SLACK","NOTION","LINEAR"];

function Item({ label }: { label: string }) {
  return (
    <span
      className="px-2 text-[clamp(20px,2.4vw,32px)] tracking-[0.06em] text-[var(--fg-secondary)] transition-colors duration-300 hover:text-white"
      style={{ fontFamily: "var(--font-jb-mono), ui-monospace, monospace", fontWeight: 500 }}
    >
      {label}
    </span>
  );
}

export default function TechStack() {
  const t = useT(translations).stack;
  return (
    <section className="section-pad relative">
      <div className="container-x">
        <header className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-end">
          <span className="font-mono-label">{t.eyebrow}</span>
          <SplitReveal
            as="h2"
            text={t.title}
            className="font-display max-w-[20ch] text-[clamp(40px,6vw,96px)]"
          />
        </header>
      </div>
      <div className="space-y-6">
        <Marquee
          duration={50}
          items={ROW_A.map((c) => <Item key={c} label={c} />)}
          separator={<span aria-hidden className="mx-6 text-[var(--accent-violet)]">●</span>}
        />
        <Marquee
          reverse
          duration={60}
          items={ROW_B.map((c) => <Item key={c} label={c} />)}
          separator={<span aria-hidden className="mx-6 text-[var(--accent-cyan)]">●</span>}
        />
      </div>
    </section>
  );
}
