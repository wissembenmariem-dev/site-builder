import { caseStudies } from "@/content/caseStudies";
import { caseStudiesPage, site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = {
  title: caseStudiesPage.title,
  description: site.description,
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div
          className="absolute -top-1/3 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full opacity-[0.14] blur-3xl"
          style={{ background: "radial-gradient(circle, #f5b544 0%, transparent 65%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-20 md:pt-48 md:pb-28">
          <Eyebrow>{caseStudiesPage.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-5xl text-white leading-[1]">
            {caseStudiesPage.heading[0]}
            <br />
            <span className="italic font-light text-white/70">{caseStudiesPage.heading[1]}</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-[var(--muted)] leading-relaxed">
            {caseStudiesPage.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <ul className="border-t border-white/10">
          {caseStudies.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 3) * 0.05}>
              <article className="group grid grid-cols-12 gap-6 md:gap-10 border-b border-white/10 py-10 md:py-12 hover:bg-white/[0.015] transition-colors px-2 md:px-4 -mx-2 md:-mx-4">
                <div className="col-span-12 md:col-span-1 font-mono text-xs uppercase tracking-[0.22em] text-white/35">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-white/45 mb-3">
                    {c.industry}
                  </div>
                  <div className="font-display text-2xl md:text-3xl text-white tracking-tight leading-tight">
                    {c.client}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <h2 className="font-display text-xl md:text-2xl text-white leading-snug tracking-tight">
                    {c.title}
                  </h2>
                  <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">{c.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/55"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2 grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-3 md:border-l md:border-white/10 md:pl-6">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <div className="font-display text-lg md:text-xl text-white leading-none tabular-nums">
                        {r.value}
                      </div>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-white/45 mt-1.5">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-16 text-center">
            <div
              className="absolute inset-0 opacity-[0.14]"
              style={{ background: "radial-gradient(60% 70% at 50% 0%, rgba(245,181,68,0.5) 0%, transparent 70%)" }}
              aria-hidden
            />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight text-white leading-tight">
                {caseStudiesPage.cta.title[0]}
                <br />
                <span className="italic font-light text-white/70">{caseStudiesPage.cta.title[1]}</span>
              </h2>
              <p className="mt-5 text-[var(--muted)] max-w-xl mx-auto">
                {caseStudiesPage.cta.lede}
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <Button href="/contact" size="lg" magnetic>
                  {caseStudiesPage.cta.button}
                </Button>
                <LinkArrow href="/services">{caseStudiesPage.cta.link}</LinkArrow>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
