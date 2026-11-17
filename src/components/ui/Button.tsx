import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/motion/Magnetic";
import type { ReactNode } from "react";

const buttonStyles = cva(
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none",
    "font-medium tracking-tight",
    "transition-[background-color,color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050714]",
    "disabled:opacity-50 disabled:pointer-events-none",
  ),
  {
    variants: {
      variant: {
        primary:
          "bg-white text-[#050714] hover:bg-white/90 shadow-[0_10px_30px_-10px_rgba(245,181,68,0.35)]",
        ghost:
          "border border-white/15 text-white hover:bg-white/[0.04] hover:border-white/25",
        accent:
          "bg-[var(--accent-amber)] text-[#050714] hover:brightness-110",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-11 px-6 text-sm rounded-full",
        lg: "h-12 px-7 text-[15px] rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonStyles> & {
  children: ReactNode;
  className?: string;
  magnetic?: boolean;
};

type ButtonAsLinkProps = ButtonBaseProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export function Button(props: ButtonProps) {
  const { variant, size, className, magnetic, children } = props;
  const classes = cn(buttonStyles({ variant, size }), className);

  const inner = "href" in props && props.href !== undefined ? (
    <Link
      href={props.href}
      target={props.external ? "_blank" : undefined}
      rel={props.external ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {children}
    </Link>
  ) : (
    <button
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {children}
    </button>
  );

  return magnetic ? <Magnetic strength={0.18}>{inner}</Magnetic> : inner;
}
