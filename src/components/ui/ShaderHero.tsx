"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { site } from "@/content/site";

export default function ShaderHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#050714]"
    >
      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute -top-1/4 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full opacity-[0.18] blur-3xl animate-float"
          style={{ background: "radial-gradient(circle, #f5b544 0%, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/4 h-[70vh] w-[70vh] rounded-full opacity-[0.10] blur-3xl"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#050714]" />
      </motion.div>

      <motion.div
        style={{ y }}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-32 md:pt-44 md:pb-40"
      >
        <div className="mb-10">
          <Eyebrow>{site.hero.eyebrow}</Eyebrow>
        </div>

        <h1 className="font-display tracking-tight text-white max-w-5xl leading-[0.95] text-[clamp(2.75rem,7.5vw,6rem)]">
          <TextReveal as="span" text={site.hero.title[0]} className="block" />
          <TextReveal
            as="span"
            text={site.hero.title[1]}
            className="block italic font-light text-white/65"
            delay={0.25}
          />
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-2xl text-lg md:text-xl text-white/65 leading-relaxed"
        >
          {site.hero.lede}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <Button href={site.hero.primaryCta.href} size="lg" variant="primary" magnetic>
            {site.hero.primaryCta.label}
          </Button>
          <LinkArrow href={site.hero.secondaryCta.href} arrow="up-right" className="text-[15px]">
            {site.hero.secondaryCta.label}
          </LinkArrow>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-20 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/45"
        >
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent-amber)] opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-amber)]" />
            </span>
            {site.hero.status}
          </span>
          <span className="hidden md:inline text-white/20">/</span>
          <span>{site.hero.statusNote}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
