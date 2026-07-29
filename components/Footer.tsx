import Link from "next/link";
import Logo from "./Logo";

export default function Footer({
  tagline = "An international energy, infrastructure and investment company headquartered in Lagos, Nigeria.",
  contactEmail = "info@olije.com",
}: {
  tagline?: string;
  contactEmail?: string;
}) {
  return (
    <footer className="bg-navyDeep text-ivory/60 pt-20">
      <div className="container-wrap">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-14 border-b border-ivory/10">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="inline-flex items-center gap-3">
              <Logo src="/footer-logo.jpg" size={32} showWordmark={false} />
            </div>
            <p className="text-sm leading-relaxed max-w-[280px] text-ivory/55">{tagline}</p>
          </div>

          <FooterCol
            title="Company"
            links={[
              { label: "About Us", href: "/about" },
              { label: "Leadership", href: "/about/leadership" },
              { label: "Careers", href: "/careers" },
              { label: "Newsroom", href: "/news" },
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              { label: "Crude Oil Trading", href: "/services/crude-oil-trading" },
              { label: "LNG & Gas", href: "/services/lng" },
              { label: "Marine Logistics", href: "/services/marine-logistics" },
              { label: "Infrastructure", href: "/services/infrastructure" },
            ]}
          />
          <FooterCol
            title="Industries"
            links={[
              { label: "Oil & Gas", href: "/industries/oil-gas" },
              { label: "Marine & Shipping", href: "/industries/marine-shipping" },
              { label: "Power & Utilities", href: "/industries/power-utilities" },
              { label: "Real Estate", href: "/industries/commercial-real-estate" },
            ]}
          />
          <FooterCol
            title="Investors"
            links={[
              { label: "Investment Proposition", href: "/investors" },
              { label: "Business Portfolio", href: "/investors#portfolio" },
              { label: "Governance", href: "/investors#governance" },
              { label: "Enquiries", href: "/contact" },
            ]}
          />
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3 py-6 text-[0.78rem] text-ivory/40">
          <span>&copy; {new Date().getFullYear()} OLIJE. All rights reserved.</span>
          <span className="hover:text-ivory/70 transition-colors">
            <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-[0.74rem] tracking-[0.14em] uppercase text-goldLight mb-4 font-semibold">{title}</h4>
      <div className="flex flex-col">
        {links.map((l) => (
          <Link key={l.label} href={l.href} className="text-sm text-ivory/62 py-1.5 hover:text-ivory transition-colors">
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
