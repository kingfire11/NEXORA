import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 70% at 30% 30%, rgba(110,58,255,0.40), transparent 65%), radial-gradient(60% 70% at 70% 80%, rgba(0,240,255,0.20), transparent 65%), #0A0A0F",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-20" />

      <div className="container-x flex min-h-[100svh] flex-col items-center justify-center px-[clamp(20px,5vw,80px)] text-center">
        <span className="font-mono-label">/ ERR_NOT_FOUND</span>
        <h1
          className="font-display mt-8 leading-[0.85] tracking-[-0.05em] text-grad"
          style={{ fontSize: "clamp(120px, 28vw, 480px)" }}
        >
          404
        </h1>
        <p className="mt-8 max-w-[40ch] text-[var(--fg-secondary)]">
          This route hasn’t been wired into the operating layer.
        </p>
        <Link href="/" data-cursor="HOME" className="btn-primary mt-10">
          Back to the studio <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
