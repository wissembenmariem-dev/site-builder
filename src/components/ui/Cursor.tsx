"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch || reduce) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const hot = target.closest<HTMLElement>(
        "a, button, [role='button'], [data-cursor='hover']",
      );
      setHovering(Boolean(hot));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: hovering ? 56 : 14,
          height: hovering ? 56 : 14,
          opacity: hovering ? 0.85 : 0.55,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ mixBlendMode: "difference" }}
        className="rounded-full bg-white"
      />
    </motion.div>
  );
}
