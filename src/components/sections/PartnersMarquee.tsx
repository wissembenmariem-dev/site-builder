"use client";

import Image from "next/image";
import { BlurredInfiniteSlider } from "@/components/ui/InfiniteSlider";
import { site } from "@/content/site";

export function PartnersMarquee() {
  const { label, sublabel, logos } = site.partners;
  return (
    <section className="border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10">
          <div className="md:max-w-[14rem] md:border-r md:border-white/10 md:pr-8 mb-6 md:mb-0">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">{label}</p>
            <p className="text-sm text-white/80 mt-2">{sublabel}</p>
          </div>

          <div className="flex-1">
            <BlurredInfiniteSlider speed={35} speedOnHover={12} gap={88} fadeWidth={64}>
              {logos.map((p) => (
                <div key={p.alt} className="flex items-center justify-center min-w-[110px]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={120}
                    height={p.h}
                    style={{ height: `${p.h + 6}px`, width: "auto" }}
                    className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                    unoptimized
                  />
                </div>
              ))}
            </BlurredInfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
