import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { getNews } from "@/lib/content";
import { urlFor } from "@/sanity/lib/image";

export const metadata = { title: "Newsroom" };

export default async function NewsPage() {
  const articles = await getNews();
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        title="Company updates, insight and industry perspective"
        sub="The latest from across OLIJE's trading, infrastructure and investment businesses."
        crumbs={[{ label: "Home", href: "/" }, { label: "Newsroom" }]}
      />
      <section className="py-24 md:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-10 mb-14">
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-navy">Latest updates</h2>
              <p className="text-[#4c5a6b] max-w-[380px] text-[0.94rem] leading-[1.6]">
                Company updates, projects and partnerships, industry insight and sustainability
                news.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map(({ tag, date, title, desc, image }) => (
              <Reveal key={title}>
                <div>
                  {image ? (
                    <div className="relative aspect-[4/3] w-full mb-6 overflow-hidden">
                      <Image
                        src={urlFor(image).width(640).height(480).fit("crop").url()}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="pt-6 border-t border-[rgba(177,118,63,0.28)]" />
                  )}
                  <div>
                    <span className="text-[0.72rem] tracking-[0.12em] uppercase text-gold font-semibold">{tag}</span>
                    <span className="text-[0.78rem] text-[#7c8798] ml-2.5">{date}</span>
                  </div>
                  <h3 className="text-[1.2rem] font-semibold text-navy mt-3.5 leading-[1.35]">{title}</h3>
                  <p className="text-[0.86rem] text-[#4c5a6b] leading-[1.6] mt-2.5">{desc}</p>
                  <Link href="#" className="text-[0.82rem] text-navy font-semibold mt-3.5 inline-block border-b border-gold pb-0.5">
                    Read more &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-24 md:py-28">
        <div className="container-wrap grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-goldLight mb-4">
              Media Resources
            </div>
            <p className="font-serif text-[1.7rem] leading-[1.4]">
              Brand assets, executive bios and factsheets for accredited media.
            </p>
          </Reveal>
          <Reveal>
            <div className="border-t md:border-t-0 md:border-l border-ivory/20 pt-8 md:pt-0 md:pl-11">
              <p className="text-ivory/70 text-[0.95rem] leading-[1.8]">
                Journalists and media partners can request logos, executive headshots, fact sheets
                and approved company background from our press office.
              </p>
              <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-goldLight mt-7 mb-2.5">
                Press Enquiries
              </div>
              <p className="text-ivory/70 text-[0.95rem] leading-[1.8] mb-6">
                For interview requests, comment or media accreditation, contact our press office
                directly.
              </p>
              <Button href="/contact" variant="outline-light">
                Contact Press Office
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
