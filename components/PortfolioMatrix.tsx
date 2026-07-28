"use client";

import { useState } from "react";
import Button from "./Button";

type PortfolioItem = { slug: string; name: string; desc: string };

export default function PortfolioMatrix({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState(items[0]?.slug);
  const current = items.find((p) => p.slug === active) ?? items[0];
  if (!current) return null;

  return (
    <div>
      <div className="flex flex-wrap gap-x-7 border-b border-ivory/15" role="tablist" aria-label="OLIJE business lines">
        {items.map((p) => (
          <button
            key={p.slug}
            role="tab"
            aria-selected={active === p.slug}
            onClick={() => setActive(p.slug)}
            className={`text-[0.82rem] font-semibold py-3.5 border-b-2 transition-colors ${
              active === p.slug ? "text-ivory border-gold" : "text-ivory/55 border-transparent hover:text-ivory/80"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start pt-11">
        <div>
          <h3 className="font-serif text-[1.7rem] text-ivory mb-3.5">{current.name}</h3>
          <p className="text-ivory/75 text-[0.94rem] leading-[1.75] mb-6">{current.desc}</p>
          <Button href="/services" variant="outline-light">
            Related Services &rarr;
          </Button>
        </div>
        <div
          className="aspect-[1/0.8] border border-ivory/15 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(177,118,63,0.14), rgba(16,42,67,0.06))" }}
        >
          <span className="font-serif text-[1.1rem] text-goldLight tracking-[0.05em]">{current.name}</span>
        </div>
      </div>
    </div>
  );
}
