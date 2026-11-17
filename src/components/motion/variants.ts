import type { Variants, Transition } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;
export const easeIn = [0.7, 0, 0.84, 0] as const;

export const duration = {
  hover: 0.2,
  tap: 0.08,
  reveal: 0.7,
  page: 0.5,
} as const;

export const baseTransition: Transition = {
  duration: duration.reveal,
  ease,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

export const stagger = (delayChildren = 0, staggerChildren = 0.06): Variants => ({
  hidden: {},
  visible: { transition: { delayChildren, staggerChildren } },
});

export const wordReveal: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease },
  },
};
