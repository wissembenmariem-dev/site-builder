"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface BentoItem {
  title: string;
  description: string;
  icon: ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  href?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-3", className)}>
      {items.map((item, index) => {
        const content = (
          <div
            className={cn(
              "group relative h-full p-7 rounded-2xl overflow-hidden",
              "border border-white/10 bg-white/[0.015]",
              "transition-[border-color,background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "hover:border-white/25 hover:bg-white/[0.035] hover:-translate-y-0.5",
              "will-change-transform",
              item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
              item.hasPersistentHover && "border-white/20 bg-white/[0.03]",
            )}
          >
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              )}
              aria-hidden
            >
              <div
                className="absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-40"
                style={{ background: "radial-gradient(circle, rgba(245,181,68,0.35) 0%, transparent 70%)" }}
              />
            </div>

            <div className="relative flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 text-white/85 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                {item.status && (
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/55">
                    {item.status}
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl md:text-3xl tracking-tight text-white leading-tight">
                {item.title}
              </h3>
              {item.meta && (
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/45 font-mono">
                  {item.meta}
                </p>
              )}
              <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed mb-6">{item.description}</p>

              <div className="mt-auto flex items-end justify-between gap-4">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {item.tags?.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium uppercase tracking-[0.18em] px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-white/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {item.cta && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/85 translate-x-[-6px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    {item.cta} <ArrowUpRight size={12} />
                  </span>
                )}
              </div>
            </div>
          </div>
        );

        return item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded-2xl",
              item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            )}
          >
            {content}
          </Link>
        ) : (
          <div key={index} className={cn(item.colSpan === 2 ? "md:col-span-2" : "col-span-1")}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
