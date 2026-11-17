import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

type SectionHeaderProps = {
  eyebrow?: string;

  title: string;

  punchline?: string;
  lede?: string;
  align?: "split" | "center" | "left";
  cta?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  punchline,
  lede,
  align = "split",
  cta,
  className,
}: SectionHeaderProps) {
  const heading = (
    <h2
      className={cn(
        "font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-white",
        "leading-[1.05]",
      )}
    >
      {title}
      {punchline && (
        <>
          <br />
          <span className="italic font-light text-white/70">{punchline}</span>
        </>
      )}
    </h2>
  );

  if (align === "center") {
    return (
      <Reveal className={cn("mx-auto max-w-3xl text-center", className)}>
        {eyebrow && (
          <div className="mb-5 flex justify-center">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        {heading}
        {lede && (
          <p className="mt-6 text-base md:text-lg text-[var(--muted)] leading-relaxed">
            {lede}
          </p>
        )}
        {cta && <div className="mt-8 flex justify-center">{cta}</div>}
      </Reveal>
    );
  }

  if (align === "left") {
    return (
      <Reveal className={cn("max-w-3xl", className)}>
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        {heading}
        {lede && (
          <p className="mt-6 max-w-xl text-base text-[var(--muted)] leading-relaxed">
            {lede}
          </p>
        )}
        {cta && <div className="mt-8">{cta}</div>}
      </Reveal>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16",
        className,
      )}
    >
      <Reveal className="md:max-w-2xl">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        {heading}
      </Reveal>
      {(lede || cta) && (
        <Reveal
          delay={0.1}
          className="md:max-w-sm md:pb-2 flex flex-col items-start gap-5"
        >
          {lede && (
            <p className="text-[var(--muted)] leading-relaxed">{lede}</p>
          )}
          {cta}
        </Reveal>
      )}
    </div>
  );
}
