import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export const metadata = { title: "About Us" };

const values = [
  { n: "01", title: "Integrity", desc: "We hold ourselves to one standard of conduct, in every market and at every scale." },
  { n: "02", title: "Excellence", desc: "We pursue operational and commercial excellence as a baseline, not an aspiration." },
  { n: "03", title: "Stewardship", desc: "We manage assets, capital and relationships with a long-term sense of responsibility." },
  { n: "04", title: "Innovation", desc: "We adapt structures and strategies to markets that are constantly evolving." },
  { n: "05", title: "Partnership", desc: "We build relationships designed to endure well beyond a single transaction." },
];

const navLinks = [
  { href: "#story", label: "Company Story" },
  { href: "#mission", label: "Mission & Vision" },
  { href: "#values", label: "Core Values" },
  { href: "#leadership", label: "Leadership" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OLIJE"
        title="Stewardship with purpose"
        sub="An international energy, infrastructure and investment company built on discipline, integrity and a long-term view of the markets we serve."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-24 md:py-28">
        <div className="container-wrap grid grid-cols-1 md:grid-cols-[220px_1fr] gap-16 items-start">
          <nav className="hidden md:flex flex-col gap-0.5 border-l border-[rgba(177,118,63,0.28)] sticky top-32 self-start">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[0.82rem] text-[#5a6779] py-2.5 pl-4.5 border-l-2 border-transparent hover:text-navy hover:border-gold transition-colors -ml-px">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-20">
            <Reveal>
              <div id="story" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Company Story</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch] mb-3.5">
                  OLIJE Industries Limited was established in Nigeria in 2026 with a clear ambition:
                  to build an enduring enterprise connecting opportunities across energy,
                  infrastructure, logistics, real estate and strategic investments.
                </p>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch] mb-3.5">
                  With interests spanning crude oil, refined petroleum products, natural gas and
                  related industries, OLIJE is developing capabilities in procurement, project
                  management, commercial coordination and strategic partnerships to pursue
                  opportunities across domestic and international markets.
                </p>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch]">
                  Our foundation is built on integrity, disciplined execution and a long-term
                  commitment to responsible business development. As we grow, our focus remains on
                  creating meaningful value, strengthening partnerships and building a company
                  positioned to contribute to the industries and markets we serve.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div id="mission" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Mission &amp; Vision</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch] mb-3.5">
                  <strong>Mission —</strong> To develop and deliver responsible energy,
                  infrastructure and investment solutions through strategic partnerships,
                  disciplined execution and a commitment to integrity, safety and performance.
                </p>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch]">
                  <strong>Vision —</strong> To build one of the world&apos;s most respected energy,
                  infrastructure and investment enterprises — trusted by partners, communities and
                  markets alike.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div id="values" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-6">Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {values.map((v) => (
                    <div key={v.n} className="pt-6 border-t border-[rgba(177,118,63,0.28)]">
                      <span className="font-serif text-gold text-[1.3rem] font-semibold block mb-3.5">{v.n}</span>
                      <h3 className="text-[1.15rem] font-semibold text-navy mb-2">{v.title}</h3>
                      <p className="text-[0.88rem] leading-[1.6] text-[#4c5a6b]">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div id="leadership" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Leadership</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch] mb-6">
                  OLIJE is led by a leadership team with deep experience across energy trading,
                  infrastructure development and capital markets. Explore the full board on our
                  Leadership page.
                </p>
                <Button href="/about/leadership" variant="outline-dark">
                  Meet the Leadership Team
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand heading="Explore our leadership team" buttonLabel="View Leadership" buttonHref="/about/leadership" />
    </>
  );
}
