import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  sub,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative pt-[170px] md:pt-[190px] pb-20 bg-gradient-to-b from-navy to-navyDeep text-ivory overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
      <div className="container-wrap relative z-10">
        <div className="text-[0.76rem] text-ivory/55 mb-5 flex flex-wrap gap-1">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1">
              {c.href ? (
                <Link href={c.href} className="text-ivory/75 hover:text-goldLight">
                  {c.label}
                </Link>
              ) : (
                <span>{c.label}</span>
              )}
              {i < crumbs.length - 1 && <span className="mx-1">/</span>}
            </span>
          ))}
        </div>
        <div className="text-[0.75rem] tracking-[0.28em] uppercase font-semibold text-goldLight mb-3">
          {eyebrow}
        </div>
        <h1 className="font-serif text-[2.2rem] md:text-[3.4rem] leading-[1.08] max-w-[20ch]">{title}</h1>
        <p className="text-ivory/72 max-w-[560px] text-[1rem] leading-[1.7] mt-5">{sub}</p>
      </div>
    </section>
  );
}
