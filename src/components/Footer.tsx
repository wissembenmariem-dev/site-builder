import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { site } from "@/content/site";
import { serviceBySlug } from "@/content/services";

export default function Footer() {
  const featured = site.footer.featured.map(serviceBySlug).filter((s) => s !== undefined);
  return (
    <footer className="mt-32 border-t border-white/10 bg-[#040611]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <BrandMark size={36} />
            <div>
              <div className="font-display text-base text-white">{site.shortName}</div>
              <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--muted)]">{site.descriptor}</div>
            </div>
          </div>
          <p className="text-sm text-[var(--muted)] max-w-sm leading-relaxed">{site.footer.blurb}</p>
          <p className="text-xs text-[var(--muted)]/70 mt-6">
            {site.contact.locations} · {site.contact.regionNote}
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {site.nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white text-[var(--muted)]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Practices</h4>
          <ul className="space-y-2 text-sm">
            {featured.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-white text-[var(--muted)]">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            <li className="flex items-center gap-2">
              <Mail size={13} /> {site.contact.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={13} /> {site.contact.phone}
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={13} className="mt-0.5" /> {site.contact.locations}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-[var(--muted)]/80 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="font-mono text-[var(--muted)]/60">{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
