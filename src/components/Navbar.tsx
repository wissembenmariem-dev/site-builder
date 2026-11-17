"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

const links: { href: string; label: string }[] = [...site.nav];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 pt-4 md:pt-6">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className={cn(
            "pointer-events-auto group flex items-center gap-3 rounded-full",
            "px-3 py-2 transition-colors duration-300",
            scrolled
              ? "bg-[rgba(5,7,20,0.7)] backdrop-blur-xl border border-white/10"
              : "border border-transparent",
          )}
        >
          <BrandMark size={28} className="transition-transform duration-300 group-hover:scale-105" />
          <div className="leading-tight pr-2">
            <div className="font-display text-[15px] tracking-tight text-white">{site.shortName}</div>
            <div className="text-[8px] uppercase tracking-[0.24em] text-white/50">
              {site.descriptor}
            </div>
          </div>
        </Link>

        <motion.nav
          initial={false}
          animate={{
            backgroundColor: scrolled ? "rgba(5,7,20,0.7)" : "rgba(5,7,20,0.35)",
            borderColor: scrolled
              ? "rgba(255,255,255,0.12)"
              : "rgba(255,255,255,0.06)",
          }}
          transition={{ duration: 0.3 }}
          className={cn(
            "pointer-events-auto hidden md:flex items-center gap-1 rounded-full border backdrop-blur-xl px-1.5 py-1.5",
          )}
        >
          {links.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative text-[13px] px-4 py-2 rounded-full transition-colors",
                  active
                    ? "text-white"
                    : "text-white/65 hover:text-white",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </Link>
            );
          })}
        </motion.nav>

        <div className="pointer-events-auto hidden md:block">
          <Magnetic strength={0.18}>
            <Button href="/contact" size="sm" variant="primary">
              Book a call
            </Button>
          </Magnetic>
        </div>

        <button
          className={cn(
            "pointer-events-auto md:hidden rounded-full p-2.5 text-white border border-white/10",
            "bg-[rgba(5,7,20,0.7)] backdrop-blur-xl",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40",
          )}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto md:hidden mx-4 mt-3 rounded-2xl border border-white/10 bg-[rgba(5,7,20,0.92)] backdrop-blur-xl px-5 py-5"
          >
            <ul className="space-y-1">
              {links.map((l) => {
                const active = pathname.startsWith(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={cn(
                        "block rounded-xl px-3 py-3 text-[15px]",
                        active
                          ? "text-white bg-white/[0.06]"
                          : "text-white/75 hover:text-white",
                      )}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <Button href="/contact" size="md" variant="primary" className="w-full">
                Book a call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
