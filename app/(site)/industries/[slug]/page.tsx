import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { industries as staticIndustries } from "@/lib/data";
import { getIndustry, getServices } from "@/lib/content";

// Build-time params come from the static list; a sector added only through
// the CMS afterward still renders fine via on-demand rendering.
export function generateStaticParams() {
  return staticIndustries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const ind = await getIndustry(params.slug);
  return { title: ind ? ind.name : "Industry" };
}

export default async function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const [industry, services] = await Promise.all([getIndustry(params.slug), getServices()]);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={industry.name}
        sub={industry.short}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="container-wrap grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">Overview</div>
            <p className="font-serif text-[1.7rem] leading-[1.4] text-navy font-medium">{industry.short}</p>
          </Reveal>
          <Reveal>
            <div className="border-t md:border-t-0 md:border-l border-[rgba(177,118,63,0.28)] pt-8 md:pt-0 md:pl-11">
              <p className="text-[0.95rem] leading-[1.8] text-[#3c4a5c]">{industry.overview}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="container-wrap">
          <Reveal>
            <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-navy mb-12">How we serve this sector</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {industry.points.map((pt, i) => (
              <Reveal key={pt}>
                <div className="pt-6 border-t border-[rgba(177,118,63,0.28)]">
                  <span className="font-serif text-gold text-[1.3rem] font-semibold block mb-3.5">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[0.9rem] text-[#4c5a6b] leading-[1.6]">{pt}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-16">
        <div className="container-wrap">
          <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-goldLight mb-4">
            Related Services
          </div>
          <Reveal>
            <div className="flex flex-wrap gap-2.5">
              {industry.services.map((name) => {
                const svc = services.find((s) => s.name === name);
                return (
                  <Link
                    key={name}
                    href={svc ? `/services/${svc.slug}` : "/services"}
                    className="text-[0.78rem] px-4 py-2.5 border border-ivory/25 text-ivory rounded-[2px] hover:bg-ivory hover:text-navy transition-colors"
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand heading={`Discuss your ${industry.name} needs`} buttonLabel="Contact Our Team" buttonHref="/contact" />
    </>
  );
}
