"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;

  whileInView?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function TextReveal({
  text,
  className,
  as = "h2",
  delay = 0,
  stagger = 0.06,
  whileInView = true,
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const Tag = motion[as];

  const containerProps = whileInView
    ? {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-10% 0px" },
      }
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
      };

  if (reduce) {
    const Static = as;
    return <Static className={className}>{text}</Static>;
  }

  return (
    <Tag
      className={cn("inline-block", className)}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren: delay, staggerChildren: stagger } },
      }}
      {...containerProps}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pb-[0.12em]"
          style={{ marginRight: i < words.length - 1 ? "0.25em" : 0 }}
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%" },
              visible: { y: "0%", transition: { duration: 0.8, ease } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
