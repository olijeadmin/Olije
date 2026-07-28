import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { getServices } from "@/lib/content";

export const metadata = { title: "Services" };

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <>
      <PageHero
        eyebrow="Our Capabilities"
        title="Services built on one operating standard"
        sub="Nine service lines spanning trading, logistics, consulting and real assets — each run to the same discipline."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="py-24 md:py-28 bg-navy text-ivory">
        <div className="container-wrap">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-10 mb-14">
              <h2 className="font-serif text-[2rem] md:text-[2.5rem]">All service lines</h2>
              <p className="text-ivory/65 max-w-[380px] text-[0.94rem] leading-[1.6]">Explore each capability in detail.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10">
              {services.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group relative bg-navy hover:bg-[#152F4C] transition-colors p-9 min-h-[190px] flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-serif text-[0.8rem] text-goldLight/80">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-goldLight opacity-0 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all">&#8599;</span>
                  </div>
                  <div>
                    <h3 className="text-[1.2rem] font-semibold max-w-[18ch] mt-8">{s.name}</h3>
                    <p className="text-[0.82rem] text-ivory/60 mt-2.5 leading-[1.55]">{s.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand heading="Discuss a service with our team" buttonLabel="Contact Our Team" buttonHref="/contact" />
    </>
  );
}
