import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ApplicationForm from "@/components/ApplicationForm";
import { getJobs } from "@/lib/content";

export const metadata = { title: "Careers" };

const navLinks = [
  { href: "#working", label: "Working at OLIJE" },
  { href: "#areas", label: "Career Areas" },
  { href: "#early", label: "Early Careers" },
  { href: "#experienced", label: "Experienced Professionals" },
  { href: "#opportunities", label: "Current Opportunities" },
  { href: "#apply", label: "Application Portal" },
];

export default async function CareersPage() {
  const openings = await getJobs();
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career at OLIJE"
        sub="Join a team building integrated energy, infrastructure and investment solutions across global markets."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
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
              <div id="working" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Working at OLIJE</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch]">
                  We hire for discipline, curiosity and long-term thinking. Our people work across
                  trading floors, terminals, project sites and offices — held to one standard of
                  conduct wherever they sit.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div id="areas" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-5">Career Areas</h2>
                <div className="flex flex-wrap gap-2.5">
                  {["Trading", "Operations", "Infrastructure", "Finance", "HSE", "Procurement", "Real Estate", "Corporate & Legal"].map(
                    (a) => (
                      <span key={a} className="text-[0.78rem] px-4 py-2.5 border border-[rgba(177,118,63,0.28)] text-navy rounded-[2px]">
                        {a}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div id="early" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Early Careers</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch]">
                  Our graduate and internship programs offer structured rotations across trading,
                  operations and infrastructure — building a foundation for a long-term career in
                  energy and infrastructure.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div id="experienced" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Experienced Professionals</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch]">
                  For experienced hires, we look for a track record of disciplined execution and
                  sound judgment under pressure — in trading, technical, or operational roles.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div id="opportunities" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-6">Current Opportunities</h2>
                <div className="flex flex-col">
                  {openings.map(({ role, location, department }, i) => (
                    <div key={role} className="grid grid-cols-[60px_1fr] gap-6 py-6 border-t border-[rgba(177,118,63,0.28)] last:border-b">
                      <div className="font-serif text-gold text-[1.1rem]">{String(i + 1).padStart(2, "0")}</div>
                      <div>
                        <h3 className="text-[1.05rem] font-semibold text-navy mb-1">{role}</h3>
                        <p className="text-[0.86rem] text-[#4c5a6b]">{location} &middot; {department}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div id="apply" className="scroll-mt-32">
                <h2 className="font-serif text-[1.9rem] text-navy mb-4">Application Portal</h2>
                <p className="text-[0.96rem] leading-[1.8] text-[#3c4a5c] max-w-[70ch] mb-7">
                  Submit your CV and a short note on the role you&apos;re interested in — our
                  talent team reviews every application.
                </p>
                <ApplicationForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
