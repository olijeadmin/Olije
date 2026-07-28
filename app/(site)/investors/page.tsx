import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PortfolioMatrix from "@/components/PortfolioMatrix";
import InvestorEnquiryForm from "@/components/InvestorEnquiryForm";
import { getPortfolio } from "@/lib/content";

export const metadata = { title: "Investors" };

export default async function InvestorsPage() {
  const portfolio = await getPortfolio();
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="A disciplined platform for long-term capital"
        sub="OLIJE offers investors exposure to an integrated energy, infrastructure and real asset platform, governed by rigorous risk management and reporting standards."
        crumbs={[{ label: "Home", href: "/" }, { label: "Investors" }]}
      />

      <section className="py-24 md:py-28">
        <div className="container-wrap grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">
              Investment Proposition
            </div>
            <p className="font-serif text-[1.7rem] leading-[1.4] text-navy font-medium">
              Integrated exposure across trading, infrastructure and real assets — under one
              governance standard.
            </p>
          </Reveal>
          <Reveal>
            <div className="border-t md:border-t-0 md:border-l border-[rgba(177,118,63,0.28)] pt-8 md:pt-0 md:pl-11">
              <p className="text-[0.95rem] leading-[1.8] text-[#3c4a5c] mb-4">
                OLIJE&apos;s platform spans five business lines, each contributing distinct cash
                flow and growth characteristics while sharing a single operating and governance
                framework.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-[#3c4a5c]">
                We report performance with the same rigor we apply to counterparty risk —
                transparently, and against clearly defined benchmarks.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="portfolio" className="py-24 md:py-28 bg-navy text-ivory scroll-mt-24">
        <div className="container-wrap">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-10 mb-12">
              <h2 className="font-serif text-[2rem] md:text-[2.5rem]">Business Portfolio</h2>
              <p className="text-ivory/65 max-w-[380px] text-[0.94rem] leading-[1.6]">
                Toggle between OLIJE&apos;s business lines.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <PortfolioMatrix items={portfolio} />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-10 mb-14">
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-navy">Growth Strategy</h2>
              <p className="text-[#4c5a6b] max-w-[380px] text-[0.94rem] leading-[1.6]">
                Three pillars guide capital allocation across the group.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              ["01", "Deepen Core Trading", "Expand trading volumes and counterparty relationships in existing product lines."],
              ["02", "Scale Infrastructure", "Invest in terminal and logistics capacity that underpins trading margins."],
              ["03", "Diversify Real Assets", "Grow real estate and adjacent investments for stable, long-duration returns."],
            ].map(([n, t, d]) => (
              <Reveal key={n}>
                <div className="pt-6 border-t border-[rgba(177,118,63,0.28)]">
                  <span className="font-serif text-gold text-[1.3rem] font-semibold block mb-3.5">{n}</span>
                  <h3 className="text-[1.15rem] font-semibold text-navy mb-2">{t}</h3>
                  <p className="text-[0.88rem] leading-[1.6] text-[#4c5a6b]">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="governance" className="pb-24 md:pb-28 scroll-mt-24">
        <div className="container-wrap">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-10 mb-12">
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-navy">Governance &amp; Risk Management</h2>
              <p className="text-[#4c5a6b] max-w-[380px] text-[0.94rem] leading-[1.6]">
                Our governance framework applies uniformly across every business line and
                jurisdiction.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[rgba(177,118,63,0.28)]">
              {[
                ["100%", "Counterparties KYC-Screened"],
                ["HSE", "Zero-Harm Standard"],
                ["AML", "Transaction Monitoring"],
                ["ISO", "Aligned Quality Systems"],
              ].map(([num, label]) => (
                <div key={label} className="p-7 border-r border-b border-[rgba(177,118,63,0.28)]">
                  <div className="font-serif text-[2.1rem] text-gold font-semibold">{num}</div>
                  <div className="text-[0.78rem] text-navy font-semibold mt-1.5">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="container-wrap grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">
              Financial Information
            </div>
            <p className="font-serif text-[1.7rem] leading-[1.4] text-navy font-medium">
              Reporting available to qualified investors and counterparties on request.
            </p>
          </Reveal>
          <Reveal>
            <div className="border-t md:border-t-0 md:border-l border-[rgba(177,118,63,0.28)] pt-8 md:pt-0 md:pl-11">
              <p className="text-[0.95rem] leading-[1.8] text-[#3c4a5c]">
                Financial statements, portfolio performance summaries and governance disclosures
                are available to qualified investors under standard confidentiality terms.
                Contact our Investor Relations desk below to request access.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-navy text-ivory py-24 md:py-28 scroll-mt-24">
        <div className="container-wrap">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-10 mb-12">
              <h2 className="font-serif text-[2rem] md:text-[2.5rem]">Investor Enquiries</h2>
              <p className="text-ivory/65 max-w-[380px] text-[0.94rem] leading-[1.6]">
                Reach our Investor Relations desk directly.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <InvestorEnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
