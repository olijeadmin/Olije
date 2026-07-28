import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Sustainability" };

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#approach", label: "Our Approach" },
  { href: "#environment", label: "Environmental Stewardship" },
  { href: "#people", label: "People & Communities" },
  { href: "#hse", label: "Health, Safety & Wellbeing" },
  { href: "#governance", label: "Governance & Ethical Conduct" },
  { href: "#performance", label: "Performance & Accountability" },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Growth measured by what it leaves behind"
        sub="Our environmental, social and governance commitments are held to the same rigor as our financial and operational performance."
        crumbs={[{ label: "Home", href: "/" }, { label: "Sustainability" }]}
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
              <div id="overview" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Overview</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch]">
                  Sustainability at OLIJE is not a reporting exercise — it is a condition of how we
                  operate. Every trade, terminal and development is weighed against its
                  environmental footprint, its impact on the communities around it, and its
                  long-term durability.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div id="approach" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Our Approach</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch]">
                  We integrate ESG considerations into commercial decisions from the outset —
                  screening counterparties, assessing project sites, and setting performance
                  targets alongside financial ones. Our approach is reviewed annually against
                  evolving international frameworks.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div id="environment" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Environmental Stewardship</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch] mb-6">
                  We manage emissions, spill prevention and waste handling across our terminals and
                  logistics operations, and apply MARPOL and sulphur-cap standards across all
                  marine fuel handling.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    ["Emissions Management", "Monitoring and reduction targets across operating sites."],
                    ["Spill Prevention", "Engineering and procedural controls at every handling point."],
                    ["Waste & Water", "Structured management programs across all facilities."],
                  ].map(([t, d]) => (
                    <div key={t} className="pt-5 border-t border-[rgba(177,118,63,0.28)]">
                      <h3 className="text-[1.05rem] font-semibold text-navy mb-2">{t}</h3>
                      <p className="text-[0.86rem] text-[#4c5a6b] leading-[1.6]">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div id="people" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">People &amp; Communities</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch]">
                  We invest in the communities surrounding our operations — through local
                  employment, skills development and infrastructure that extends benefit beyond
                  our own sites.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div id="hse" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Health, Safety &amp; Wellbeing</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch]">
                  A zero-harm standard governs every site and vessel we operate on. HSE performance
                  is tracked continuously and reported to the executive board.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div id="governance" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Governance &amp; Ethical Conduct</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch]">
                  Our governance framework covers anti-bribery and corruption controls, counterparty
                  due diligence, and whistleblower protections, applied consistently across every
                  jurisdiction we operate in.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div id="performance" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-6">Performance &amp; Accountability</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[rgba(177,118,63,0.28)]">
                  {[
                    ["0", "Tolerance for Non-Compliance"],
                    ["100%", "Sites Under HSE Review"],
                    ["Annual", "Sustainability Reporting Cycle"],
                    ["Board", "Level Oversight"],
                  ].map(([num, label]) => (
                    <div key={label} className="p-7 border-r border-b border-[rgba(177,118,63,0.28)]">
                      <div className="font-serif text-[2.1rem] text-gold font-semibold">{num}</div>
                      <div className="text-[0.78rem] text-navy font-semibold mt-1.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <CTABand heading="Request our latest sustainability report" buttonLabel="Contact Our Team" buttonHref="/contact" />
    </>
  );
}
