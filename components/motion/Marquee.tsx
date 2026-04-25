"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
  separator?: ReactNode;
}

export default function Marquee({
  items,
  duration = 60,
  reverse = false,
  className,
  itemClassName,
  separator,
}: MarqueeProps) {
  const sep = separator ?? (
    <span aria-hidden className="mx-8 inline-block h-1.5 w-1.5 rounded-full bg-[var(--fg-muted)]" />
  );

  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <div key={i} className={`flex shrink-0 items-center ${itemClassName ?? ""}`}>
          {it}
          {sep}
        </div>
      ))}
    </div>
  );

  return (
    <div className={`fade-edges-x overflow-hidden ${className ?? ""}`}>
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ ["--duration" as never]: `${duration}s` }}
      >
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
