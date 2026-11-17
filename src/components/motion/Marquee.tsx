"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;

  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

export function Marquee({
  children,
  speed = 40,
  reverse = false,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "marquee group relative flex w-full overflow-hidden",
        className,
      )}
      style={
        {
          "--marquee-duration": `${speed}s`,
          "--marquee-direction": reverse ? "reverse" : "normal",
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "marquee-track flex shrink-0 items-center gap-12 pr-12",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "marquee-track flex shrink-0 items-center gap-12 pr-12",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
