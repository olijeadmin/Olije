import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import HeroSlider from "@/components/HeroSlider";
import { getHome, getServices, getNews, getSiteSettings } from "@/lib/content";
import { urlFor } from "@/sanity/lib/image";

// Default themed photography for service tiles (Unsplash License — free
// commercial use). Grouped by theme since 9 services don't need 9 unique
// shoots to look intentional: refining/trading, gas/infra, marine/logistics,
// and corporate/real-estate each share one representative photo.
const SERVICE_PHOTOS: Record<string, string> = {
  "crude-oil-trading": "https://images.unsplash.com/photo-1726111262949-e22631a8c376?auto=format&fit=crop&w=900&q=70",
  "refined-petroleum-products": "https://images.unsplash.com/photo-1726111262949-e22631a8c376?auto=format&fit=crop&w=900&q=70",
  lubricants: "https://images.unsplash.com/photo-1726111262949-e22631a8c376?auto=format&fit=crop&w=900&q=70",
  lng: "https://images.unsplash.com/photo-1744113627248-8c9ba859be91?auto=format&fit=crop&w=900&q=70",
  infrastructure: "https://images.unsplash.com/photo-1744113627248-8c9ba859be91?auto=format&fit=crop&w=900&q=70",
  "marine-logistics": "https://images.unsplash.com/photo-1759272840712-c7e5ea852367?auto=format&fit=crop&w=900&q=70",
  procurement: "https://images.unsplash.com/photo-1759272840712-c7e5ea852367?auto=format&fit=crop&w=900&q=70",
  "energy-consulting": "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=900&q=70",
  "real-estate": "https://images.unsplash.com/photo-1760259203238-01708384f7a2?auto=format&fit=crop&w=900&q=70",
  default: "https://images.unsplash.com/photo-1726111262949-e22631a8c376?auto=format&fit=crop&w=900&q=70",
};

const whyUs = [
  { title: "Integrity Without Compromise", desc: "Every engagement is measured against a single, non-negotiable standard of conduct." },
  { title: "Disciplined Execution", desc: "Structured processes and rigorous risk controls, applied consistently at every scale." },
  { title: "Strategic Partnerships", desc: "Long-standing relationships with counterparties, regulators and communities alike." },
  { title: "Global Standards", desc: "Operations aligned to international HSE, quality and governance frameworks." },
  { title: "Integrated Capabilities", desc: "Trading, logistics, infrastructure and capital work together as one system." },
  { title: "Long-Term Vision", desc: "Decisions weighed against decades, not quarters." },
];

// Everything read from home/services/news/settings below comes through
// lib/content.ts, which pulls from the CMS at /admin once it's configured
// (see README → "Turning on the admin"). Until then it's the same static
// copy this page always had.
export default async function HomePage() {
  const [home, services, news, settings] = await Promise.all([
    getHome(),
    getServices(),
    getNews(),
    getSiteSettings(),
  ]);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-navyDeep">
        {/* Full-bleed photography. Once a photo's uploaded in /admin →
            Home Page → "Hero background photo", that single image is used.
            Until then, a slider of default licensed photography (Unsplash
            License, free commercial use) rotates automatically. */}
        {home.heroImage ? (
          <Image
            src={urlFor(home.heroImage).width(2400).height(1600).fit("crop").url()}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <HeroSlider />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(10,29,48,0.62) 0%, rgba(10,29,48,0.78) 42%, rgba(10,29,48,0.97) 100%)",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

        <div className="container-wrap relative z-10 pt-[150px] sm:pt-[180px] pb-16 sm:pb-20 w-full">
          <Reveal>
            <div className="text-[0.7rem] sm:text-[0.75rem] tracking-[0.22em] sm:tracking-[0.28em] uppercase font-semibold text-goldLight mb-5 sm:mb-6">
              {home.heroEyebrow}
            </div>
          </Reveal>
          <Reveal>
            <h1 className="font-serif font-semibold text-ivory leading-[1.05] text-[2.3rem] xs:text-[2.6rem] sm:text-[3.6rem] lg:text-[5.1rem] max-w-[15ch]">
              {home.heroHeadingLine1} <span className="text-goldLight">{home.heroHeadingHighlight}</span>
              <br />
              Shaping tomorrow.
            </h1>
          </Reveal>
          <Reveal>
            <p
              className="text-ivory max-w-[520px] text-[0.96rem] sm:text-[1.02rem] leading-[1.65] mt-5 sm:mt-6"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
            >
              {home.heroSubtext}
            </p>
          </Reveal>

          {/* Primary / secondary CTA pairing — one clear action, one lower-commitment option.
              Stacks full-width on small screens for easier tapping. */}
          <Reveal>
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mt-9 sm:mt-11">
              <Button href="/contact" variant="solid" className="text-[0.86rem] px-7 py-4 justify-center">
                Partner With OLIJE
              </Button>
              <Button href="/contact" variant="outline-light" className="text-[0.86rem] px-7 py-4 justify-center">
                Contact Our Team
              </Button>

            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- STATS BAND ---------------- */}
      {/* Deliberately its own section in solid gold — a sharp color break
          from the dark hero above and the ivory sections below, so it reads
          as a distinct, attention-grabbing beat rather than blending in. */}
      <section className="bg-gold py-10 sm:py-12">
        <div className="container-wrap">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-ivory/25">
            {home.stats.map((s) => (
              <div key={s.label} className="px-4 sm:px-6 first:pl-0 text-center sm:text-left">
                <div className="font-serif text-[1.9rem] sm:text-[2.3rem] text-ivory font-bold leading-none">{s.value}</div>
                <div className="text-[0.66rem] sm:text-[0.72rem] tracking-[0.08em] uppercase text-ivory/85 font-semibold mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EXECUTIVE INTRO ---------------- */}
      <section className="py-20 md:py-24">
        <div className="container-wrap grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">{home.introEyebrow}</div>
            <p className="font-serif text-[1.7rem] md:text-[1.9rem] leading-[1.4] text-navy font-medium">{home.introLede}</p>
          </Reveal>
          <Reveal>
            <div className="border-t md:border-t-0 md:border-l border-[rgba(177,118,63,0.28)] pt-8 md:pt-0 md:pl-11">
              {home.introBody.map((p) => (
                <p key={p} className="text-[0.95rem] leading-[1.8] text-[#3c4a5c] mb-4 last:mb-6">
                  {p}
                </p>
              ))}
              <Button href="/about" variant="outline-dark">
                Our Story
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICES GRID ---------------- */}
      <section className="py-20 md:py-24 bg-ivory">
        <div className="container-wrap">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-[0.75rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">Operational Excellence</div>
              <h2 className="font-serif text-[2.2rem] md:text-[3rem] font-bold text-goldLight max-w-[20ch] mx-auto leading-[1.2]">
                Core capabilities, under one standard
              </h2>
              <p className="text-[#4c5a6b] max-w-[560px] text-[0.95rem] leading-[1.65] mt-6 mx-auto">
                Nine service lines spanning trading, logistics, consulting and real assets — each run to the same operational discipline.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => {
                const photo = SERVICE_PHOTOS[s.slug] ?? SERVICE_PHOTOS.default;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group relative overflow-hidden rounded-[28px] p-9 min-h-[220px] flex flex-col justify-end shadow-[0_24px_80px_rgba(16,42,67,0.12)]"
                  >
                    <Image
                      src={photo}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover saturate-[0.9] transition-transform duration-500 group-hover:scale-110 group-hover:saturate-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/15 group-hover:from-navy/98 group-hover:via-navy/60 transition-colors" />
                    <div className="relative z-10">
                      <span className="font-serif text-[0.8rem] text-goldLight/85">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-[1.14rem] font-semibold max-w-[18ch] mt-2.5 flex items-center gap-2 text-ivory">
                        {s.name}
                        <span className="text-goldLight opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                          &rarr;
                        </span>
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="py-20 md:py-24 bg-[linear-gradient(135deg,rgba(247,243,234,0.4)_0%,rgba(217,178,124,0.08)_100%)]">
        <div className="container-wrap">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-[0.75rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">Our Promise</div>
              <h2 className="font-serif text-[2.2rem] md:text-[3rem] font-bold text-navy max-w-[22ch] mx-auto leading-[1.2]">
                Why partners choose OLIJE
              </h2>
              <p className="text-[#4c5a6b] max-w-[560px] text-[0.95rem] leading-[1.65] mt-6 mx-auto">
                The principles that hold across every trade, terminal and transaction.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, idx) => (
              <Reveal key={item.title}>
                <div className="bg-white/55 backdrop-blur-sm rounded-[20px] p-8 border border-[rgba(177,118,63,0.2)] hover:border-gold hover:bg-white/75 transition-all duration-300 shadow-[0_8px_32px_rgba(16,42,67,0.06)] hover:shadow-[0_16px_48px_rgba(177,118,63,0.12)]">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-serif font-bold text-[0.95rem]">{String(idx + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-[1.15rem] font-serif font-semibold text-navy mb-2.5">{item.title}</h3>
                      <p className="text-[0.88rem] leading-[1.7] text-[#4c5a6b]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- GLOBAL OPS ---------------- */}
      <section className="py-20 md:py-24 bg-navyDeep text-ivory">
        <div className="container-wrap grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-goldLight mb-4">
              Global Operations
            </div>
            <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-ivory">
              A Nigeria headquarters, a global reach
            </h2>
            <p className="text-ivory/68 text-[0.98rem] leading-[1.75] mt-5 max-w-[460px]">
              From our Lagos headquarters, OLIJE coordinates trading desks, marine logistics and
              infrastructure delivery across key corridors — connecting West African supply with
              international demand.
            </p>
            <div className="mt-9 flex flex-col">
              {[
                ["Lagos ⇌ Rotterdam", "Crude & Products"],
                ["Lagos ⇌ Singapore", "Trading Desk"],
                ["Lagos ⇌ Houston", "Procurement"],
                ["Lagos ⇌ Dubai", "Capital & Ventures"],
              ].map(([route, tag]) => (
                <div key={route} className="flex justify-between py-4 border-t border-ivory/10 last:border-b text-[0.88rem]">
                  <span className="font-medium">{route}</span>
                  <span className="text-goldLight tracking-wide">{tag}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div
              className="relative aspect-[1/0.85] border border-[rgba(177,118,63,0.35)]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(247,243,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(247,243,234,0.05) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            >
              <span className="absolute left-[30%] top-[42%] w-3.5 h-3.5 -ml-1.5 -mt-1.5 rounded-full bg-[rgba(177,118,63,0.5)]" />
              <span className="absolute left-[30%] top-[42%] w-3.5 h-3.5 -ml-1.5 -mt-1.5 rounded-full border border-goldLight animate-pulseRing" />
              <span className="absolute left-[calc(30%+14px)] top-[calc(42%-8px)] text-[0.72rem] tracking-[0.1em] uppercase text-goldLight">
                Lagos HQ
              </span>
              <span className="absolute w-1.5 h-1.5 rounded-full bg-ivory/55" style={{ left: "62%", top: "22%" }} />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-ivory/55" style={{ left: "80%", top: "48%" }} />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-ivory/55" style={{ left: "70%", top: "70%" }} />
              <span className="absolute w-1.5 h-1.5 rounded-full bg-ivory/55" style={{ left: "14%", top: "60%" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- STANDARDS ---------------- */}
      <section className="py-20 md:py-24">
        <div className="container-wrap">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="font-serif text-[2rem] md:text-[2.8rem] font-bold text-navy max-w-[18ch] mx-auto">
                Standards &amp; compliance
              </h2>
              <p className="text-[#4c5a6b] max-w-[560px] text-[0.95rem] leading-[1.65] mt-4 mx-auto">
                Governance, quality and HSE frameworks applied without exception across every jurisdiction.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[rgba(177,118,63,0.28)]">
              {[
                ["HSE", "Health, Safety & Environment", "Zero-harm operating principles across all sites."],
                ["ISO", "Quality Management", "Process discipline aligned to international benchmarks."],
                ["AML", "Anti-Money Laundering", "Rigorous counterparty and transaction screening."],
                ["KYC", "Counterparty Diligence", "Verified partners at every stage of a trade."],
              ].map(([code, title, desc]) => (
                <div key={code} className="p-8 border-r border-b border-[rgba(177,118,63,0.28)]">
                  <div className="font-serif text-[2.2rem] text-gold font-semibold">{code}</div>
                  <div className="text-[0.86rem] text-navy font-semibold mt-2">{title}</div>
                  <div className="text-[0.82rem] text-[#5a6779] mt-1.5 leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SUSTAINABILITY FEATURE ---------------- */}
      <section className="py-20 md:py-24">
        <div className="container-wrap">
          <Reveal>
            <div
              className="relative rounded-[32px] overflow-hidden min-h-[440px] md:min-h-[480px] flex items-end shadow-[0_36px_90px_rgba(10,29,48,0.18)]"
            >
              {settings.sustainabilityFeature.image ? (
                <Image
                  src={urlFor(settings.sustainabilityFeature.image).width(1800).height(1000).fit("crop").url()}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(155deg, #12314f 0%, #0A1D30 65%, #081627 100%)" }}
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, rgba(10,29,48,0.94) 10%, rgba(10,29,48,0.4) 55%, rgba(10,29,48,0.14) 100%)",
                }}
              />
              <div className="relative z-10 p-10 md:p-14 max-w-[640px]">
                <div className="text-[0.75rem] tracking-[0.22em] uppercase font-semibold text-goldLight mb-3">
                  Sustainability
                </div>
                <h2 className="font-serif text-ivory text-[1.9rem] md:text-[2.6rem]">
                  {settings.sustainabilityFeature.heading}
                </h2>
                <p className="text-ivory text-[0.95rem] leading-[1.7] mt-4 max-w-[52ch]">
                  {settings.sustainabilityFeature.body}
                </p>
                <Button href="/sustainability" variant="outline-light" className="mt-7">
                  Explore Sustainability
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- NEWSROOM PREVIEW ---------------- */}
      <section className="py-20 md:py-24">
        <div className="container-wrap">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="font-serif text-[2rem] md:text-[2.8rem] font-bold text-navy">From the newsroom</h2>
              <p className="text-[#4c5a6b] max-w-[560px] text-[0.95rem] leading-[1.65] mt-4 mx-auto">
                Company updates, project milestones and industry insight.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            {news.slice(0, 3).map((n) => (
              <Reveal key={n.title}>
                <div>
                  {n.image ? (
                    <div className="relative aspect-[4/3] w-full mb-6 overflow-hidden">
                      <Image
                        src={urlFor(n.image).width(640).height(480).fit("crop").url()}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="pt-6 border-t border-[rgba(177,118,63,0.28)]" />
                  )}
                  <span className="text-[0.72rem] tracking-[0.12em] uppercase text-gold font-semibold">{n.tag}</span>
                  <span className="text-[0.78rem] text-[#7c8798] ml-2.5">{n.date}</span>
                  <h3 className="text-[1.28rem] font-semibold text-navy mt-3.5 leading-[1.35]">{n.title}</h3>
                  <Link href="/news" className="text-[0.82rem] text-navy font-semibold mt-4 inline-block border-b border-gold pb-0.5">
                    Read more &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- DUAL CTA ---------------- */}
      <section className="bg-navy text-ivory">
        <div className="container-wrap">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ivory/15 border border-ivory/15">
              <div className="bg-navy p-12 md:p-16">
                <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-goldLight mb-3.5">
                  Work With Us
                </div>
                <h3 className="font-serif text-[2rem] max-w-[14ch]">Partner With OLIJE</h3>
                <p className="text-ivory/65 text-[0.92rem] leading-[1.6] mt-3.5 max-w-[38ch]">
                  Explore trading, supply and infrastructure partnerships built for the long term.
                </p>
                <Button href="/contact" variant="solid" className="mt-8">
                  Start a Conversation
                </Button>
              </div>
              <div className="bg-navyDeep p-12 md:p-16">
                <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-goldLight mb-3.5">
                  Get In Touch
                </div>
                <h3 className="font-serif text-[2rem] max-w-[14ch]">Contact Our Team</h3>
                <p className="text-ivory/65 text-[0.92rem] leading-[1.6] mt-3.5 max-w-[38ch]">
                  Reach our Lagos headquarters or regional desks for enquiries and support.
                </p>
                <Button href="/contact" variant="outline-light" className="mt-8">
                  {settings.contactEmail}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}


