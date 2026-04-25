import Link from "next/link";
import { notFound } from "next/navigation";

const CASES: Record<string, {
  client: string;
  category: string;
  metric: string;
  metricLabel: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string[];
  palette: [string, string];
}> = {
  "telco-operator": {
    client: "Telco Operator",
    category: "Support automation",
    metric: "−87%",
    metricLabel: "first-response time",
    summary:
      "A national telco was drowning in 14 000 monthly WhatsApp tickets across three languages. We replaced their first-line response with a multilingual RAG agent.",
    challenge:
      "The legacy IVR + outsourced contact center couldn't keep up with WhatsApp-first customers. Avg first response was 18 minutes, CSAT was sliding under 70%.",
    approach:
      "Built a RAG layer over their billing, plans, and FAQ knowledge. Wired Twilio + WhatsApp Business API. Added human handoff with full audit logs and a guardrail layer for billing actions.",
    outcome:
      "First response dropped to 2.3 minutes. 80% deflection rate. 92% CSAT after 60 days. Contact-center headcount reallocated to retention work.",
    stack: ["Claude", "WhatsApp API", "Twilio", "Supabase", "Vercel AI SDK"],
    palette: ["#6E3AFF", "#00F0FF"],
  },
  "b2b-saas": {
    client: "B2B SaaS",
    category: "Sales pipeline",
    metric: "+312%",
    metricLabel: "qualified leads / month",
    summary:
      "A vertical SaaS was capping growth on outbound. Their AEs were the bottleneck. We built an AI-SDR system feeding HubSpot end-to-end.",
    challenge:
      "Manual prospecting limited the team to 30 outbound touches/day per AE. Reply rates were inconsistent and lead enrichment was a part-time role.",
    approach:
      "Apollo + Clay enrichment, sequenced LinkedIn + email cadences, intent-aware persona snippets, all routed into HubSpot with bidirectional state sync.",
    outcome:
      "Qualified leads grew 4.1x in 90 days. Reply rate doubled. AEs spend time on demos, not on lookups.",
    stack: ["HubSpot", "Apollo", "Clay", "Claude", "n8n"],
    palette: ["#00F0FF", "#6E3AFF"],
  },
  "fnb-chain": {
    client: "F&B Chain",
    category: "Internal ops",
    metric: "12 000h",
    metricLabel: "saved annually",
    summary:
      "23 venues, 4 manual reporting roles, weekly Excel chaos. We replaced the entire stack with n8n workflows feeding a single dashboard.",
    challenge:
      "Each venue manager submitted weekly reports in incompatible formats. Consolidation took 4 FTE-equivalents. Errors compounded by the time they hit leadership.",
    approach:
      "Standardized intake via a Telegram-based form bot. n8n pipelines normalized + validated data. Outputs landed in Postgres with a Metabase layer for execs.",
    outcome:
      "12 000 manual hours / year removed. Weekly reports landed by Monday 09:00 with zero human assembly. The 4 reporting roles moved to ops projects.",
    stack: ["n8n", "Postgres", "Metabase", "Telegram", "Supabase"],
    palette: ["#FFB547", "#6E3AFF"],
  },
};

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export default async function CasePage({ params }: { params: Params }) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return notFound();

  return (
    <article className="relative">
      <section className="relative isolate overflow-hidden pt-[clamp(140px,16vw,200px)]">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(60% 70% at 30% 30%, ${c.palette[0]}, transparent 65%), radial-gradient(60% 70% at 70% 80%, ${c.palette[1]}, transparent 65%), #0A0A0F`,
          }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-20" />

        <div className="container-x px-[clamp(20px,5vw,80px)] pb-[clamp(60px,10vw,140px)]">
          <Link href="/#work" data-cursor="BACK" className="font-mono-label inline-flex items-center gap-2 text-[var(--fg-secondary)] hover:text-white">
            <span aria-hidden>←</span> ALL WORK
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono-label">CASE</span>
            <span className="font-mono-label">·</span>
            <span className="font-mono-label">{c.category}</span>
          </div>

          <h1 className="font-display mt-6 max-w-[18ch] text-[clamp(48px,9vw,160px)]">
            {c.client}.
          </h1>

          <p className="mt-10 max-w-[60ch] text-[clamp(16px,1.2vw,20px)] leading-[1.5] text-[var(--fg-secondary)]">
            {c.summary}
          </p>

          <div className="mt-16 flex items-baseline gap-6">
            <span className="font-display text-grad text-[clamp(72px,10vw,180px)] leading-none">
              {c.metric}
            </span>
            <span className="font-mono-label">{c.metricLabel}</span>
          </div>
        </div>
      </section>

      <section className="section-pad container-x grid grid-cols-1 gap-16 px-[clamp(20px,5vw,80px)] md:grid-cols-2 md:gap-20">
        <Block title="Challenge" body={c.challenge} num="01" />
        <Block title="Approach" body={c.approach} num="02" />
        <Block title="Outcome" body={c.outcome} num="03" />
        <div>
          <span className="font-mono-label">04 / STACK</span>
          <h2 className="font-display mt-3 text-[clamp(28px,3vw,48px)]">Built on</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-[var(--border-strong)] bg-white/[0.02] px-3 py-1.5 text-[12px] uppercase tracking-[0.14em] text-[var(--fg-secondary)]"
                style={{ fontFamily: "var(--font-jb-mono), ui-monospace, monospace" }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x section-pad px-[clamp(20px,5vw,80px)] text-center">
        <span className="font-mono-label">/ NEXT</span>
        <h2 className="font-display mt-6 text-[clamp(48px,9vw,140px)]">Build yours.</h2>
        <Link
          href="/#cta"
          data-cursor="START"
          className="btn-primary mt-10 inline-flex"
        >
          Start automating <span aria-hidden>→</span>
        </Link>
      </section>
    </article>
  );
}

function Block({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div>
      <span className="font-mono-label">{num} / {title.toUpperCase()}</span>
      <h2 className="font-display mt-3 text-[clamp(28px,3vw,48px)]">{title}</h2>
      <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.6] text-[var(--fg-secondary)]">
        {body}
      </p>
    </div>
  );
}
