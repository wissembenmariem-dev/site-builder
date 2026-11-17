"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "./variants";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  margin?: string;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({
  children,
  className,
  delay = 0,
  margin = "-15% 0px",
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={fadeUp}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
