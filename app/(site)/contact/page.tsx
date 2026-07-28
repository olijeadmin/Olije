import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { getOffices } from "@/lib/content";

export const metadata = { title: "Contact" };

export default async function ContactPage() {
  const offices = await getOffices();
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach our global team"
        sub="From our Lagos headquarters to regional trading desks, our team is ready to discuss partnerships, enquiries and opportunities."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-24 md:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="flex flex-wrap justify-between items-end gap-10 mb-14">
              <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-navy">Our offices</h2>
              <p className="text-[#4c5a6b] max-w-[380px] text-[0.94rem] leading-[1.6]">
                Headquartered in Lagos, with desks connecting global trading corridors.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {offices.map(({ name, country, phone }) => (
              <Reveal key={name}>
                <div className="pt-6 border-t border-[rgba(177,118,63,0.28)]">
                  <h3 className="text-[1.1rem] font-semibold text-navy">{name}</h3>
                  <p className="text-[0.88rem] text-[#4c5a6b] leading-[1.7] mt-2">
                    {country}
                    <br />
                    {phone}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-24 md:py-28">
        <div className="container-wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-goldLight mb-4">
              Global Network
            </div>
            <h2 className="font-serif text-[1.9rem] mb-7">Lagos headquarters, global reach</h2>
            <div
              className="relative aspect-[1/0.8] border border-[rgba(177,118,63,0.35)]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(247,243,234,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(247,243,234,0.05) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            >
              <span className="absolute left-[30%] top-[42%] w-3.5 h-3.5 -ml-1.5 -mt-1.5 rounded-full border border-goldLight" />
              <span className="absolute left-[calc(30%+14px)] top-[calc(42%-8px)] text-[0.72rem] tracking-[0.1em] uppercase text-goldLight">
                Lagos HQ
              </span>
            </div>
          </Reveal>
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-goldLight mb-4">
              Send a Message
            </div>
            <h2 className="font-serif text-[1.9rem] mb-7">Get in touch</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
