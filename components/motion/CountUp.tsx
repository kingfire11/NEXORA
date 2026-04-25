"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  format?: (n: number) => string;
}

export default function CountUp({ to, from = 0, duration = 1.6, className, format }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [v, setV] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (val) => setV(val),
    });
    return () => controls.stop();
  }, [inView, from, to, duration]);

  const display = format ? format(v) : Math.round(v).toLocaleString("en-US");
  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
