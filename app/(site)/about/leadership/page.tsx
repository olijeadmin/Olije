import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import { getTeam } from "@/lib/content";
import { urlFor } from "@/sanity/lib/image";

export const metadata = { title: "Leadership" };

function initials(role: string) {
  return role
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
}

export default async function LeadershipPage() {
  const board = await getTeam();
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Stewardship with purpose"
        sub="An executive team bringing deep operating experience across energy trading, infrastructure and capital markets."
        crumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Leadership" }]}
      />
      <section className="py-24 md:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-10 mb-14">
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-navy">Executive Board</h2>
              <p className="text-[#4c5a6b] max-w-[380px] text-[0.94rem] leading-[1.6]">
                A leadership team accountable for discipline, integrity and long-term performance
                across every OLIJE business line.
              </p>
            </div>
          </Reveal>
          {/*
            Photo cards are deliberately large (tall 4:5 portrait frame, full
            card width) so a real headshot reads as a genuine executive
            portrait rather than a small avatar icon. Until a photo is
            uploaded in /admin, the same large frame shows a bold monogram on
            a navy field — so the layout never looks broken or unfinished,
            just "photo coming soon".
          */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {board.map((b) => (
                <div key={`${b.role}-${b.name ?? ""}`} className="group">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy">
                    {b.photo ? (
                      <Image
                        src={urlFor(b.photo).width(640).height(800).fit("crop").url()}
                        alt={b.name || b.role}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy to-navyDeep">
                        <span className="font-serif text-[3.4rem] text-goldLight/80 font-semibold">
                          {initials(b.role)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gold" />
                  </div>
                  <div className="pt-6">
                    <h3 className="text-[1.15rem] font-semibold text-navy">{b.name || b.role}</h3>
                    <div className="text-[0.78rem] text-gold tracking-[0.04em] uppercase font-semibold mt-1">
                      {b.name ? b.role : "Executive Board"}
                    </div>
                    <p className="text-[0.86rem] text-[#4c5a6b] leading-[1.6] mt-3">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand heading="Learn more about our company" buttonLabel="About OLIJE" buttonHref="/about" />
    </>
  );
}
