import ShaderHero from "@/components/ui/ShaderHero";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { BentoGrid, type BentoItem } from "@/components/ui/BentoGrid";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { caseStudies } from "@/content/caseStudies";
import { icons } from "@/content/icons";
import { serviceBySlug } from "@/content/services";
import { home } from "@/content/site";

const bentoItems: BentoItem[] = home.services.featured.flatMap((f) => {
  const s = serviceBySlug(f.slug);
  if (!s) return [];
  const Icon = icons[s.icon];
  return [{
    title: s.title,
    meta: f.meta,
    description: s.description,
    icon: <Icon className="h-5 w-5" />,
    status: f.status,
    tags: f.tags,
    cta: "Learn more",
    href: `/services#${s.slug}`,
    colSpan: f.colSpan,
    hasPersistentHover: f.highlight,
  }];
});

export default function Home() {
  return (
    <>
      <ShaderHero />

      <PartnersMarquee />

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-32">
        <SectionHeader
          eyebrow={home.services.eyebrow}
          title={home.services.title}
          punchline={home.services.punchline}
          lede={home.services.lede}
        />
        <div className="mt-14">
          <BentoGrid items={bentoItems} />
        </div>
        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <LinkArrow href="/services">{home.services.link}</LinkArrow>
        </Reveal>
      </section>

      <section className="border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {home.stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className="bg-[#050714] p-8 text-center md:text-left"
              >
                <div className="flex items-baseline justify-center md:justify-start text-white">
                  <AnimatedCounter
                    end={s.value}
                    suffix={s.suffix}
                    fontSize={56}
                    duration={1600}
                    className="font-display"
                  />
                </div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-white/45">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeader
              eyebrow={home.approach.eyebrow}
              title={home.approach.title}
              punchline={home.approach.punchline}
              lede={home.approach.lede}
              align="left"
            />
          </div>

          <ul className="lg:col-span-7 space-y-3">
            {home.approach.steps.map((step, i) => (
              <Reveal as="li" key={step.t} delay={i * 0.06}>
                <div className="group flex gap-6 rounded-2xl border border-white/10 bg-white/[0.015] p-7 hover:border-white/25 hover:bg-white/[0.03] transition-colors">
                  <div className="font-display text-3xl text-white/75 w-12 shrink-0 leading-none tabular-nums">
                    0{i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-2xl text-white tracking-tight">{step.t}</div>
                    <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">{step.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-32">
        <SectionHeader
          eyebrow={home.work.eyebrow}
          title={home.work.title}
          punchline={home.work.punchline}
          cta={<LinkArrow href="/case-studies">{home.work.link}</LinkArrow>}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((c, i) => (
            <Reveal as="article" key={c.slug} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.015] p-8 md:p-10 hover:border-white/25 hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/45">
                  <span>{c.industry}</span>
                  <span className="text-white/25">/</span>
                  <span>{c.client}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl md:text-3xl tracking-tight text-white leading-snug">
                  {c.title}
                </h3>
                <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">{c.summary}</p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {c.results.map((r) => (
                    <div key={r.label} className="border-t border-white/10 pt-3">
                      <div className="font-display text-2xl text-white leading-none tabular-nums">
                        {r.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.18em] text-white/45 mt-2">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-20">
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{ background: "radial-gradient(80% 50% at 80% 0%, rgba(245,181,68,0.5) 0%, transparent 60%)" }}
              aria-hidden
            />
            <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-4xl md:text-6xl tracking-tight text-white leading-[1.05]">
                {home.cta.title[0]}
                <br />
                <span className="italic font-light text-white/70">{home.cta.title[1]}</span>
              </h2>
              <p className="mt-6 text-[var(--muted)] text-lg max-w-xl leading-relaxed">
                {home.cta.lede}
              </p>
              <ul className="mt-8 space-y-2.5 text-sm">
                {home.cta.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/80">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--accent-amber)]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/contact" size="lg" magnetic>
                  {home.cta.button}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
