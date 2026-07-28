import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline-dark" | "outline-light";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 text-[0.82rem] font-semibold tracking-[0.02em] px-6 py-3.5 rounded-[2px] transition-all duration-200 whitespace-nowrap";

const variants: Record<string, string> = {
  solid: "bg-gold text-ivory hover:bg-[#96622F] active:bg-[#7d5127]",
  "outline-dark": "border border-navy text-navy hover:bg-navy hover:text-ivory",
  "outline-light": "border border-ivory/50 text-ivory hover:bg-ivory hover:text-navy",
};

export default function Button({ href, children, variant = "solid", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
