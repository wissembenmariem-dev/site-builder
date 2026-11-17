import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  withDot?: boolean;
};

export function Eyebrow({ children, className, withDot = true }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-white/55",
        className,
      )}
    >
      {withDot && (
        <span
          aria-hidden
          className="inline-block h-1 w-1 rounded-full bg-[var(--accent-amber)]"
        />
      )}
      <span>{children}</span>
    </p>
  );
}
