"use client";

import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  start?: number;
  end: number;
  duration?: number;
  className?: string;
  fontSize?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  start = 0,
  end,
  duration = 2000,
  className,
  fontSize = 48,
  suffix = "",
  prefix = "",
}: CounterProps) {
  const [value, setValue] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const padding = Math.max(6, Math.round(fontSize * 0.2));
  const height = fontSize + padding;

  useEffect(() => {
    if (!inView) return;
    let current = start;
    const totalSteps = Math.max(end - start, 1);
    const stepTime = Math.max(duration / totalSteps, 16);
    const interval = setInterval(() => {
      current += 1;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setValue(current);
    }, stepTime);
    return () => clearInterval(interval);
  }, [inView, start, end, duration]);

  const places = (() => {
    const arr: number[] = [];
    let v = Math.max(end, 1);
    let p = 1;
    while (v > 0) {
      arr.unshift(p);
      v = Math.floor(v / 10);
      p *= 10;
    }
    return arr.length ? arr : [1];
  })();

  return (
    <div
      ref={ref}
      style={{ fontSize, height }}
      className={cn(
        "flex items-baseline overflow-hidden leading-none font-display tabular-nums tracking-tighter",
        className,
      )}
    >
      {prefix && <span className="mr-1">{prefix}</span>}
      {places.map((p) => (
        <Digit key={p} place={p} value={value} fontSize={fontSize} height={height} />
      ))}
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  );
}

function Digit({
  place,
  value,
  fontSize,
  height,
}: {
  place: number;
  value: number;
  fontSize: number;
  height: number;
}) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace, { stiffness: 80, damping: 20 });

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height, fontSize }} className="relative w-[0.6em] tabular-nums">
      {[...Array(10)].map((_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

function Number({ mv, number, height }: { mv: MotionValue<number>; number: number; height: number }) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) memo -= 10 * height;
    return memo;
  });

  return (
    <motion.span style={{ y }} className="absolute inset-0 flex items-center justify-center">
      {number}
    </motion.span>
  );
}
