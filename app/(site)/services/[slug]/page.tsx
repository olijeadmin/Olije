import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { services as staticServices } from "@/lib/data";
import { getService, getIndustries } from "@/lib/content";

// Build-time params come from the static list so `next build` always has
// something to pre-render. A service added only through the CMS afterward
// still renders fine — Next falls back to on-demand rendering for slugs
// that aren't in this list.
export function generateStaticParams() {
  return staticServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = await getService(params.slug);
  return { title: s ? s.name : "Service" };
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const [service, industries] = await Promise.all([getService(params.slug), getIndustries()]);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.name}
        sub={service.short}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="py-24 md:py-28">
        <div className="container-wrap grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">Overview</div>
            <p className="font-serif text-[1.7rem] leading-[1.4] text-navy font-medium">{service.short}</p>
          </Reveal>
          <Reveal>
            <div className="border-t md:border-t-0 md:border-l border-[rgba(177,118,63,0.28)] pt-8 md:pt-0 md:pl-11">
              <p className="text-[0.95rem] leading-[1.8] text-[#3c4a5c]">{service.overview}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className="container-wrap">
          <Reveal>
            <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-navy mb-12">What we deliver</h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-col">
              {service.caps.map((c, i) => (
                <div key={c.title} className="grid grid-cols-[60px_1fr] gap-6 py-6 border-t border-[rgba(177,118,63,0.28)] last:border-b">
                  <div className="font-serif text-gold text-[1.1rem]">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold text-navy mb-1.5">{c.title}</h3>
                    <p className="text-[0.9rem] text-[#4c5a6b] leading-[1.6]">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-ivory py-16">
        <div className="container-wrap">
          <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-goldLight mb-4">
            Related Industries
          </div>
          <Reveal>
            <div className="flex flex-wrap gap-2.5">
              {service.industries.map((name) => {
                const ind = industries.find((i) => i.name === name);
                return (
                  <Link
                    key={name}
                    href={ind ? `/industries/${ind.slug}` : "/industries"}
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

      <CTABand heading={`Speak with our ${service.name} desk`} buttonLabel="Contact Our Team" buttonHref="/contact" />
    </>
  );
}
