import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { getIndustries } from "@/lib/content";

export const metadata = { title: "Industries" };

export default async function IndustriesPage() {
  const industries = await getIndustries();
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Sector expertise across the energy value chain"
        sub="From government and public sector to marine and shipping — OLIJE brings sector-specific expertise to every engagement."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />
      <section className="py-24 md:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-10 mb-14">
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-navy">All sectors</h2>
              <p className="text-[#4c5a6b] max-w-[380px] text-[0.94rem] leading-[1.6]">Explore how OLIJE serves each industry.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(16,42,67,0.12)] border border-[rgba(16,42,67,0.12)]">
              {industries.map((ind, i) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group relative bg-ivory hover:bg-[#EFE9DA] transition-colors p-9 min-h-[190px] flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-serif text-[0.8rem] text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-gold opacity-0 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all">&#8599;</span>
                  </div>
                  <div>
                    <h3 className="text-[1.2rem] font-semibold text-navy max-w-[18ch] mt-8">{ind.name}</h3>
                    <p className="text-[0.82rem] text-[#5a6779] mt-2.5 leading-[1.55]">{ind.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand heading="Talk to us about your sector" buttonLabel="Contact Our Team" buttonHref="/contact" />
    </>
  );
}
