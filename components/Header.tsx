"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { mainNav } from "@/lib/data";

// Header nav model: the same items as before, plus a plain "Contact" link at
// the end instead of two competing CTA buttons.
const navWithContact = [...mainNav, { label: "Contact", href: "/contact" }];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/*
        Header is always solid white with navy text — never transparent, so
        there's no contrast issue possible against any hero content behind
        it. Hover fills a pill with the hero's navy colour, matching the
        client-approved treatment. No buttons in the header (previously two
        buttons plus a full nav bar overflowed the viewport on real screen
        widths) — nav links plus a plain "Contact" link instead, matching
        how corporate sites like dangote.com structure their header. The
        "Partner With OLIJE" CTA still appears prominently in the hero and
        in the CTA band on every page.
      */}
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-ivory transition-[padding,box-shadow] duration-300 ${
          scrolled ? "py-3.5 shadow-[0_8px_24px_rgba(13,28,46,0.08)]" : "py-5 shadow-[0_1px_0_rgba(177,118,63,0.28)]"
        }`}
      >
        <div className="container-wrap flex items-center justify-between gap-8">
          <Link href="/" className="shrink-0" aria-label="OLIJE home">
            <Logo wordmarkColor="#102A43" size={32} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navWithContact.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-[0.85rem] font-semibold text-navy px-4 py-2.5 rounded-full inline-block transition-colors duration-200 group-hover:bg-navy group-hover:text-ivory"
                >
                  {item.label}
                </Link>
                {"columns" in item && item.columns && (
                  <div className="absolute top-full left-0 mt-3 w-[520px] max-w-[min(520px,calc(100vw-48px))] rounded-sm bg-navy p-7 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 shadow-2xl grid grid-cols-2 gap-x-7">
                    {item.columns.map((col) => (
                      <Link
                        key={col.label}
                        href={col.href}
                        className="block text-[0.82rem] py-2 text-ivory/80 border-b border-ivory/10 hover:text-goldLight hover:pl-1.5 transition-all"
                      >
                        {col.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2 shrink-0"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <span className="block w-6 h-px bg-navy" />
            <span className="block w-6 h-px bg-navy" />
            <span className="block w-6 h-px bg-navy" />
          </button>
        </div>
      </header>

      {/* Mobile drawer — white background, navy text, navy fill on tap/focus */}
      <div
        className={`fixed inset-0 z-[60] bg-ivory transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="container-wrap flex items-center justify-between py-5 border-b border-[rgba(177,118,63,0.28)]">
          <Logo wordmarkColor="#102A43" size={30} />
          <button
            aria-label="Close menu"
            className="text-navy text-2xl leading-none p-2 -mr-2"
            onClick={() => setMobileOpen(false)}
          >
            &times;
          </button>
        </div>
        <nav className="container-wrap flex flex-col gap-1 pt-3 pb-10 px-2 overflow-y-auto max-h-[calc(100vh-84px)]" aria-label="Mobile">
          {navWithContact.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-xl font-serif font-semibold text-navy px-3 py-4 rounded-lg transition-colors active:bg-navy active:text-ivory focus:bg-navy focus:text-ivory"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
