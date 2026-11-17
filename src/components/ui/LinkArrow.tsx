import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type LinkArrowProps = {
  href: string;
  children: ReactNode;
  arrow?: "up-right" | "right";
  className?: string;
  external?: boolean;
};

export function LinkArrow({
  href,
  children,
  arrow = "right",
  className,
  external,
}: LinkArrowProps) {
  const Icon = arrow === "up-right" ? ArrowUpRight : ArrowRight;
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group/link inline-flex items-center gap-2 text-sm text-white/85 hover:text-white",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050714] rounded-sm",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white/60 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100"
        />
      </span>
      <Icon
        size={14}
        className={cn(
          "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          arrow === "up-right"
            ? "group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            : "group-hover/link:translate-x-1",
        )}
      />
    </Link>
  );
}
