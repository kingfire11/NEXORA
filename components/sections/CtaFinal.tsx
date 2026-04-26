"use client";

import { useState } from "react";
import SplitReveal from "@/components/motion/SplitReveal";
import { useT } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function CtaFinal() {
  const t = useT(translations).cta;
  const [email, setEmail] = useState("");
  return (
    <section id="cta" className="section-pad relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 80% at 30% 20%, rgba(110,58,255,0.30), transparent 70%), radial-gradient(60% 80% at 80% 80%, rgba(0,240,255,0.18), transparent 70%), #0A0A0F",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid opacity-[0.06]"
      />

      <div className="container-x">
        <span className="font-mono-label">{t.eyebrow}</span>
        <SplitReveal
          as="h2"
          text={t.title}
          className="font-display mt-6 text-[clamp(80px,14vw,220px)] leading-[0.86] tracking-[-0.04em]"
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const subject = encodeURIComponent(t.mailSubject);
            const body = encodeURIComponent(`From: ${email}\n\n—`);
            window.location.href = `mailto:hi@nexora.studio?subject=${subject}&body=${body}`;
          }}
          className="mt-14 flex w-full max-w-2xl flex-col gap-4 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-2 sm:flex-row sm:items-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.placeholder}
            data-cursor="TYPE"
            className="w-full bg-transparent px-5 py-3 text-[16px] text-white placeholder:text-[var(--fg-muted)]"
          />
          <button
            type="submit"
            data-cursor="SEND"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[var(--accent-violet)] to-[var(--accent-cyan)] px-7 py-3 text-[14px] font-semibold text-black transition-shadow hover:shadow-[0_0_60px_-10px_rgba(110,58,255,0.7)]"
          >
            {t.submit}
            <span aria-hidden>→</span>
          </button>
        </form>

        <p className="font-mono-label mt-8">{t.orLine}</p>
      </div>
    </section>
  );
}
