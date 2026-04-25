"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

interface SplitRevealProps {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: "word" | "char";
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function SplitReveal({
  text,
  className,
  delay = 0,
  splitBy = "word",
  as = "span",
}: SplitRevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  const parts = useMemo(() => {
    if (splitBy === "word") {
      return text.split(/(\s+)/);
    }
    return text.split("");
  }, [text, splitBy]);

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ staggerChildren: splitBy === "char" ? 0.018 : 0.045, delayChildren: delay }}
    >
      {parts.map((p, i) => {
        if (/^\s+$/.test(p)) return <span key={i}>{p}</span>;
        return (
          <span key={i} className="inline-block overflow-hidden align-baseline" style={{ paddingBottom: "0.06em" }}>
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0 },
                show: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {p}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
