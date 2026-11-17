import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { icons } from "@/content/icons";
import { about, site } from "@/content/site";

export const metadata = {
  title: about.title,
  description: site.description,
};

export default function AboutPage() {
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
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-5xl text-white leading-[1]">
            {about.heading[0]}
            <br />
            <span className="italic font-light text-white/70">{about.heading[1]}</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg text-[var(--muted)] leading-relaxed">
            {about.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-7">
            <Eyebrow className="mb-4">{about.story.eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-white leading-tight">
              {about.story.title[0]}
              <br />
              <span className="italic font-light text-white/70">{about.story.title[1]}</span>
            </h2>
            <div className="mt-8 space-y-5 text-[var(--muted)] leading-relaxed max-w-xl">
              {about.story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-8 md:p-10">
              <Eyebrow className="mb-6">By the numbers</Eyebrow>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
                {about.numbers.map((s) => (
                  <div key={s.l} className="border-t border-white/10 pt-4">
                    <dt className="font-display text-3xl md:text-4xl text-white tabular-nums leading-none">
                      {s.v}
                    </dt>
                    <dd className="text-[10px] uppercase tracking-[0.2em] text-white/45 mt-2">
                      {s.l}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <SectionHeader
          eyebrow={about.standards.eyebrow}
          title={about.standards.title}
          punchline={about.standards.punchline}
          align="left"
        />
        <div className="mt-14 grid gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-4">
          {about.standards.values.map((v, i) => {
            const Icon = icons[v.icon as keyof typeof icons];
            return (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full bg-[#050714] p-8 md:p-10">
                  <div className="h-10 w-10 rounded-lg bg-white/[0.04] border border-white/10 grid place-items-center text-white/85 mb-6">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-xl text-white tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-20">
            <div
              className="absolute inset-0 opacity-[0.16]"
              style={{ background: "radial-gradient(70% 60% at 20% 0%, rgba(245,181,68,0.45) 0%, transparent 60%)" }}
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl tracking-tight text-white leading-[1.05]">
                {about.cta.title[0]}
                <br />
                <span className="italic font-light text-white/70">{about.cta.title[1]}</span>
              </h2>
              <p className="mt-5 text-[var(--muted)] text-lg leading-relaxed max-w-xl">
                {about.cta.lede}
              </p>
              <div className="mt-10">
                <Button href="/contact" size="lg" magnetic>
                  {about.cta.button}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
