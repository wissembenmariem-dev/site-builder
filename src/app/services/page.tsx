import { Check } from "lucide-react";
import { categories, services } from "@/content/services";
import { icons } from "@/content/icons";
import { servicesPage, site } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = {
  title: servicesPage.title,
  description: site.description,
};

export default function ServicesPage() {
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
          <Eyebrow>{servicesPage.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-5xl text-white leading-[1]">
            {servicesPage.heading[0]}
            <br />
            <span className="italic font-light text-white/70">{servicesPage.heading[1]}</span>
            <br />
            {servicesPage.heading[2]}
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-[var(--muted)] leading-relaxed">
            {servicesPage.intro}
          </p>
        </div>
      </section>

      {categories.map((cat) => {
        const items = services.filter((s) => s.category === cat);
        return (
          <section key={cat} className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <Reveal className="flex items-baseline justify-between flex-wrap gap-4 mb-12 border-b border-white/10 pb-6">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight text-white">
                {cat}
              </h2>
              <span className="text-xs uppercase tracking-[0.22em] text-white/45 font-mono">
                {String(items.length).padStart(2, "0")} services
              </span>
            </Reveal>

            <div className="grid gap-px md:grid-cols-2 bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
              {items.map((s, i) => {
                const Icon = icons[s.icon];
                return (
                  <Reveal
                    as="article"
                    key={s.slug}
                    delay={(i % 2) * 0.08}
                  >
                    <article
                      id={s.slug}
                      className="group h-full bg-[#050714] p-10 md:p-12 hover:bg-white/[0.02] transition-colors scroll-mt-32"
                    >
                      <div className="flex items-start justify-between gap-6 mb-8">
                        <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/10 grid place-items-center text-white/85 group-hover:text-white transition-colors">
                          <Icon size={20} />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 mt-3">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl tracking-tight text-white">
                        {s.title}
                      </h3>
                      <p className="mt-4 text-[var(--muted)] leading-relaxed">{s.description}</p>
                      <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm text-white/80">
                            <Check size={14} className="mt-1 text-[var(--accent-amber)] shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-20 text-center">
            <div
              className="absolute inset-0 opacity-[0.16]"
              style={{ background: "radial-gradient(50% 60% at 50% 0%, rgba(245,181,68,0.5) 0%, transparent 70%)" }}
              aria-hidden
            />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-5xl tracking-tight text-white leading-tight">
                {servicesPage.cta.title[0]}
                <br />
                <span className="italic font-light text-white/70">{servicesPage.cta.title[1]}</span>
              </h2>
              <div className="mt-10">
                <Button href="/contact" size="lg" magnetic>
                  {servicesPage.cta.button}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
