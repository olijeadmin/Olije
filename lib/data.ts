export type Service = {
  slug: string;
  name: string;
  short: string;
  overview: string;
  caps: { title: string; desc: string }[];
  industries: string[];
};

export type Industry = {
  slug: string;
  name: string;
  short: string;
  overview: string;
  points: string[];
  services: string[];
};

export const services: Service[] = [
  {
    slug: "crude-oil-trading",
    name: "Crude Oil Trading",
    short: "Physical and term crude trading connecting West African grades to global refiners.",
    overview:
      "OLIJE trades crude oil across spot and term markets, structuring physical cargoes between producers, refiners and offtakers. Our desk manages counterparty risk, freight coordination and documentation from nomination to delivery.",
    caps: [
      { title: "Cargo Structuring", desc: "Spot and term physical crude deals matched to buyer and seller specifications." },
      { title: "Counterparty Diligence", desc: "KYC and credit screening applied to every trading relationship." },
      { title: "Freight & Logistics Coordination", desc: "Vessel nomination, laycan management and demurrage oversight." },
      { title: "Documentation & Settlement", desc: "Full letter-of-credit, bill-of-lading and settlement support." },
    ],
    industries: ["Oil & Gas", "Government & Public Sector", "Marine & Shipping"],
  },
  {
    slug: "refined-petroleum-products",
    name: "Refined Petroleum Products",
    short: "Supply of gasoline, diesel, jet fuel and fuel oil into regional and international markets.",
    overview:
      "We source and deliver refined products — PMS, AGO, jet fuel and fuel oil — through a network of storage, blending and distribution partners, keeping downstream markets reliably supplied.",
    caps: [
      { title: "Product Sourcing", desc: "Access to refinery and terminal supply across multiple origins." },
      { title: "Blending & Quality Control", desc: "Specification verification at every handover point." },
      { title: "Storage & Terminal Access", desc: "Managed tankage across key import and distribution hubs." },
      { title: "Distribution Logistics", desc: "Coordinated inland and marine delivery to end markets." },
    ],
    industries: ["Oil & Gas", "Aviation", "Power & Utilities"],
  },
  {
    slug: "lng",
    name: "LNG & Gas Solutions",
    short: "Structuring gas and LNG supply for industrial, power and export markets.",
    overview:
      "OLIJE structures natural gas and LNG supply arrangements — from feedstock aggregation to delivered cargoes — supporting power generation, industrial demand and export commitments.",
    caps: [
      { title: "Supply Aggregation", desc: "Consolidating gas feedstock from multiple upstream sources." },
      { title: "LNG Cargo Structuring", desc: "Term and spot LNG arrangements for regional offtake." },
      { title: "Regasification Coordination", desc: "Terminal scheduling and delivery planning." },
      { title: "Power Sector Supply", desc: "Reliable gas-to-power feedstock agreements." },
    ],
    industries: ["Power & Utilities", "Manufacturing & Industrial", "Oil & Gas"],
  },
  {
    slug: "marine-logistics",
    name: "Marine Logistics & Bunkering",
    short: "Vessel bunkering, marine fuel supply and port logistics coordination.",
    overview:
      "Our marine logistics team supplies bunker fuel and coordinates port operations for commercial vessels, ensuring compliant, on-schedule refuelling and cargo handling across our terminal network.",
    caps: [
      { title: "Bunker Fuel Supply", desc: "IFO, VLSFO and marine gasoil delivered ex-terminal and ex-barge." },
      { title: "Port Agency Coordination", desc: "Berth scheduling, customs clearance and vessel husbandry." },
      { title: "Compliance & Emissions", desc: "Sulphur-cap and MARPOL-aligned fuel handling." },
      { title: "Cargo Handling", desc: "Loading, discharge and terminal storage coordination." },
    ],
    industries: ["Marine & Shipping", "Oil & Gas", "Government & Public Sector"],
  },
  {
    slug: "procurement",
    name: "Procurement & Supply",
    short: "End-to-end sourcing and supply chain management for energy and industrial buyers.",
    overview:
      "We manage procurement and supply chains for energy, infrastructure and industrial clients — sourcing equipment, materials and services against rigorous vendor and quality standards.",
    caps: [
      { title: "Vendor Sourcing", desc: "Qualified supplier networks across equipment and materials categories." },
      { title: "Contract & Tender Management", desc: "Structured procurement processes from RFQ to award." },
      { title: "Supply Chain Logistics", desc: "Freight, customs and inland delivery coordination." },
      { title: "Quality Assurance", desc: "Inspection and compliance checks at every stage." },
    ],
    industries: ["Manufacturing & Industrial", "Construction & Infrastructure", "Government & Public Sector"],
  },
  {
    slug: "energy-consulting",
    name: "Energy Consulting",
    short: "Advisory across market entry, trading strategy and energy infrastructure planning.",
    overview:
      "OLIJE advises governments, investors and operators on energy market strategy — from trading structures and offtake agreements to infrastructure feasibility and regulatory navigation.",
    caps: [
      { title: "Market Entry Strategy", desc: "Guidance for new entrants into West African energy markets." },
      { title: "Offtake Structuring", desc: "Advisory on long-term supply and purchase agreements." },
      { title: "Regulatory Navigation", desc: "Support through licensing, compliance and local content requirements." },
      { title: "Feasibility & Planning", desc: "Technical and commercial feasibility studies for energy assets." },
    ],
    industries: ["Government & Public Sector", "Oil & Gas", "Power & Utilities"],
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    short: "Development and delivery of energy and industrial infrastructure assets.",
    overview:
      "We develop and deliver infrastructure — storage terminals, pipelines and industrial facilities — combining project structuring, capital access and disciplined execution.",
    caps: [
      { title: "Terminal Development", desc: "Storage and handling facilities for petroleum and gas products." },
      { title: "Pipeline & Transport Assets", desc: "Planning and delivery of transport infrastructure." },
      { title: "Project Structuring", desc: "Capital stacking and delivery partner coordination." },
      { title: "Asset Management", desc: "Operational oversight through the asset lifecycle." },
    ],
    industries: ["Construction & Infrastructure", "Power & Utilities", "Government & Public Sector"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    short: "Development and investment in commercial and mixed-use real estate.",
    overview:
      "OLIJE Real Estate develops and invests in commercial, industrial and mixed-use properties — applying the same discipline and long-term view we bring to energy assets.",
    caps: [
      { title: "Commercial Development", desc: "Office, logistics and mixed-use property development." },
      { title: "Investment & Acquisition", desc: "Direct investment in income-generating real assets." },
      { title: "Asset Management", desc: "Operational and leasing oversight across the portfolio." },
      { title: "Urban Infrastructure", desc: "Supporting infrastructure for large-scale developments." },
    ],
    industries: ["Commercial & Real Estate", "Construction & Infrastructure", "Government & Public Sector"],
  },
  {
    slug: "lubricants",
    name: "Lubricants & Specialty Products",
    short: "Supply of industrial and automotive lubricants and specialty petroleum products.",
    overview:
      "We supply lubricants, greases and specialty petroleum products to industrial, marine and automotive customers, backed by quality-assured sourcing and reliable distribution.",
    caps: [
      { title: "Industrial Lubricants", desc: "Formulated products for manufacturing and heavy equipment." },
      { title: "Marine Lubricants", desc: "Specification-matched products for vessel engines and systems." },
      { title: "Distribution Network", desc: "Reliable delivery across regional distribution points." },
      { title: "Quality Assurance", desc: "Batch testing and specification verification." },
    ],
    industries: ["Manufacturing & Industrial", "Marine & Shipping", "Aviation"],
  },
];

export const industries: Industry[] = [
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    short: "Supporting national energy security and infrastructure priorities.",
    overview:
      "We work alongside government agencies and public institutions on energy supply, infrastructure delivery and strategic reserves — aligned to national development priorities.",
    points: [
      "Strategic fuel and product supply agreements",
      "Infrastructure delivery in partnership with public agencies",
      "Regulatory and compliance alignment",
    ],
    services: ["Crude Oil Trading", "Infrastructure", "Energy Consulting"],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    short: "Trading, logistics and consulting across the upstream-to-downstream value chain.",
    overview:
      "OLIJE serves oil and gas operators across the value chain — from crude trading and refined product supply to gas solutions and technical advisory.",
    points: [
      "Crude and refined product offtake arrangements",
      "Gas and LNG supply structuring",
      "Technical and market advisory",
    ],
    services: ["Crude Oil Trading", "Refined Petroleum Products", "LNG & Gas Solutions"],
  },
  {
    slug: "manufacturing-industrial",
    name: "Manufacturing & Industrial",
    short: "Reliable feedstock, lubricants and procurement for industrial operations.",
    overview:
      "Manufacturers rely on OLIJE for consistent feedstock supply, industrial lubricants and procurement support that keeps production lines running.",
    points: [
      "Gas feedstock for industrial processes",
      "Industrial lubricant supply",
      "Equipment and materials procurement",
    ],
    services: ["LNG & Gas Solutions", "Lubricants & Specialty Products", "Procurement & Supply"],
  },
  {
    slug: "marine-shipping",
    name: "Marine & Shipping",
    short: "Bunkering, port logistics and marine product supply for commercial fleets.",
    overview:
      "We support commercial shipping operators with bunker fuel, marine lubricants and port logistics coordination across our terminal network.",
    points: [
      "Bunker fuel supply across major ports",
      "Port agency and vessel coordination",
      "Marine-grade lubricant supply",
    ],
    services: ["Marine Logistics & Bunkering", "Lubricants & Specialty Products", "Crude Oil Trading"],
  },
  {
    slug: "aviation",
    name: "Aviation",
    short: "Jet fuel supply and logistics for commercial and cargo aviation.",
    overview:
      "OLIJE supplies jet fuel and coordinates delivery logistics for aviation customers, maintaining specification integrity from terminal to wing.",
    points: [
      "Jet fuel sourcing and delivery",
      "Specification and quality assurance",
      "Airport terminal logistics coordination",
    ],
    services: ["Refined Petroleum Products", "Lubricants & Specialty Products", "Procurement & Supply"],
  },
  {
    slug: "construction-infrastructure",
    name: "Construction & Infrastructure",
    short: "Materials procurement and infrastructure development for major projects.",
    overview:
      "We support construction and infrastructure developers with procurement, project structuring and direct development of terminals, pipelines and facilities.",
    points: [
      "Materials and equipment procurement",
      "Infrastructure project structuring",
      "Terminal and facility development",
    ],
    services: ["Infrastructure", "Procurement & Supply", "Real Estate"],
  },
  {
    slug: "power-utilities",
    name: "Power & Utilities",
    short: "Gas-to-power feedstock and infrastructure supporting reliable generation.",
    overview:
      "OLIJE supplies gas and fuel feedstock to power generators and utilities, and structures infrastructure to support reliable, long-term generation capacity.",
    points: [
      "Gas-to-power supply agreements",
      "Fuel oil and diesel backup supply",
      "Generation infrastructure advisory",
    ],
    services: ["LNG & Gas Solutions", "Refined Petroleum Products", "Energy Consulting"],
  },
  {
    slug: "commercial-real-estate",
    name: "Commercial & Real Estate",
    short: "Development, investment and asset management across commercial property.",
    overview:
      "Our real estate practice develops and manages commercial and mixed-use assets, extending OLIJE's long-term investment approach beyond energy.",
    points: [
      "Commercial and mixed-use development",
      "Direct property investment",
      "Portfolio and asset management",
    ],
    services: ["Real Estate", "Infrastructure", "Energy Consulting"],
  },
];

export const portfolio = [
  {
    slug: "capital",
    name: "OLIJE Capital",
    desc: "Our investment arm deploys capital into energy, infrastructure and real asset opportunities with strong long-term fundamentals.",
  },
  {
    slug: "marine",
    name: "OLIJE Marine",
    desc: "Bunkering, port logistics and vessel-related services supporting commercial shipping across our terminal network.",
  },
  {
    slug: "energy",
    name: "OLIJE Energy",
    desc: "Crude, refined product, gas and LNG trading — the group's founding business line.",
  },
  {
    slug: "logistics",
    name: "OLIJE Logistics",
    desc: "Supply chain, procurement and distribution logistics connecting supply to demand.",
  },
  {
    slug: "real-estate",
    name: "OLIJE Real Estate",
    desc: "Commercial and mixed-use property development and investment.",
  },
];

export const mainNav = [
  {
    label: "About",
    href: "/about",
    columns: [
      { label: "Company Story", href: "/about" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Crude Oil Trading", href: "/services/crude-oil-trading" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    columns: services.slice(0, 8).map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  },
  {
    label: "Industries",
    href: "/industries",
    columns: industries.slice(0, 6).map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
  },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Investors", href: "/investors" },
  { label: "Newsroom", href: "/news" },
  { label: "Careers", href: "/careers" },
];
