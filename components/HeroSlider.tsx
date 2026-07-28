"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Default photography (Unsplash License — free for commercial use, no
// attribution required) used until a real hero photo is uploaded via
// /admin → Home Page → "Hero background photo". Once that's set, this
// slider is skipped in favor of the single CMS image (see page.tsx).
const DEFAULT_SLIDES = [
  { src: "https://images.unsplash.com/photo-1726111262949-e22631a8c376?auto=format&fit=crop&w=1920&q=75", alt: "Oil refinery at night" },
  { src: "https://images.unsplash.com/photo-1759272840712-c7e5ea852367?auto=format&fit=crop&w=1920&q=75", alt: "Aerial view of a shipping port" },
  { src: "https://images.unsplash.com/photo-1744113627248-8c9ba859be91?auto=format&fit=crop&w=1920&q=75", alt: "Industrial infrastructure" },
  { src: "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=1920&q=75", alt: "Modern city skyline at dusk" },
];

const SLIDE_DURATION = 6500;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<Set<number>>(new Set());

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => {
        // Skip any slide whose image failed to load
        let next = (i + 1) % DEFAULT_SLIDES.length;
        let guard = 0;
        while (failed.has(next) && guard < DEFAULT_SLIDES.length) {
          next = (next + 1) % DEFAULT_SLIDES.length;
          guard++;
        }
        return next;
      });
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [failed]);

  const allFailed = failed.size === DEFAULT_SLIDES.length;

  return (
    <>
      {/* Solid fallback gradient — only visible if every photo fails to
          load (e.g. offline), so the hero never shows a blank/broken area */}
      {allFailed && (
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #12314f 0%, #0A1D30 60%, #081627 100%)" }}
        />
      )}
      <div className="absolute inset-0">
        {DEFAULT_SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-[1600ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`relative w-full h-full ${i === active ? "animate-heroZoom" : ""}`}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
                onError={() => setFailed((prev) => new Set(prev).add(i))}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-6 sm:right-8 bottom-24 sm:bottom-32 z-20 flex flex-col gap-2.5">
        {DEFAULT_SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setActive(i)}
            aria-label={`Show slide: ${slide.alt}`}
            className={`w-2 h-2 rounded-full border border-ivory/60 transition-all ${
              i === active ? "bg-goldLight border-goldLight scale-125" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </>
  );
}
