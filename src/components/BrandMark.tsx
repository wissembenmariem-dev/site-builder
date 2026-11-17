import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function BrandMark({ className, size = 36 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-label={site.name}
    >
      <defs>
        <linearGradient id="brand-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22D3EE" />
          <stop offset="0.55" stopColor="#6366F1" />
          <stop offset="1" stopColor="#F5B544" />
        </linearGradient>
        <linearGradient id="brand-grad-2" x1="40" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5B544" stopOpacity="0.8" />
          <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="10" fill="#0B0F1F" stroke="url(#brand-grad)" strokeWidth="1.2" />
      <rect x="1" y="1" width="38" height="38" rx="10" fill="url(#brand-grad-2)" opacity="0.18" />
      <circle cx="11" cy="13" r="1.6" fill="#22D3EE" />
      <circle cx="29" cy="13" r="1.6" fill="#F5B544" />
      <circle cx="20" cy="27" r="1.6" fill="#6366F1" />
      <path d="M11 13 L20 27 L29 13" stroke="url(#brand-grad)" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M11 13 L29 13" stroke="url(#brand-grad)" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
      <path
        d="M27.5 20.5 A8 8 0 1 0 27.5 19.5"
        stroke="url(#brand-grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
