import { client } from "@/sanity/lib/client";
import { sanityConfigured } from "@/sanity/env";
import { services as staticServices, industries as staticIndustries, portfolio as staticPortfolio } from "@/lib/data";
import type { Image as SanityImage } from "sanity";

// ---------------------------------------------------------------------------
// This file is the ONLY place page components should get editable content
// from. Every function below:
//   1. If Sanity is configured (NEXT_PUBLIC_SANITY_PROJECT_ID is set), fetch
//      live from the CMS.
//   2. Otherwise, return the static fallback — so the site works immediately
//      after unzipping, with or without the admin turned on.
// This means editors get "no code, ever" content management once /admin is
// wired up, while developers still have a working site on day one.
// ---------------------------------------------------------------------------

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!sanityConfigured) return fallback;
  try {
    const result = await client.fetch<T>(query, {}, { next: { revalidate: 60 } });
    if (!result || (Array.isArray(result) && result.length === 0)) return fallback;
    return result;
  } catch {
    // CMS unreachable / misconfigured — fail safe to the static content
    // rather than breaking the page.
    return fallback;
  }
}

// ---------------- Home ----------------
export type HomeContent = {
  heroEyebrow: string;
  heroImage?: SanityImage | null;
  heroHeadingLine1: string;
  heroHeadingHighlight: string;
  heroSubtext: string;
  stats: { value: string; label: string }[];
  introEyebrow: string;
  introLede: string;
  introBody: string[];
};

const fallbackHome: HomeContent = {
  heroEyebrow: "International Energy · Infrastructure · Investment",
  heroHeadingLine1: "Building",
  heroHeadingHighlight: "legacies.",
  heroSubtext:
    "OLIJE develops, trades and invests across energy, infrastructure and real assets — connecting Nigeria to global markets through disciplined execution and long-term partnership.",
  stats: [
    { value: "9", label: "Core Service Lines" },
    { value: "8", label: "Industries Served" },
    { value: "20+", label: "Trading Corridors" },
    { value: "1", label: "Standard, Everywhere" },
  ],
  introEyebrow: "Who We Are",
  introLede:
    "OLIJE is an international energy, infrastructure and investment company — built to move essential resources and capital with integrity, from origin to destination.",
  introBody: [
    "We trade crude oil and refined products, move LNG and gas, operate marine logistics, and develop infrastructure and real estate — anchored by a Nigeria headquarters and extended through a global network of partners, counterparties and terminals.",
    "Every engagement is governed by the same standard: disciplined execution, transparent counterparty relationships, and a long-term view of the markets and communities we operate in.",
  ],
};

export function getHome(): Promise<HomeContent> {
  return safeFetch<HomeContent>(`*[_type == "homePage"][0]{heroEyebrow, heroImage, heroHeadingLine1, heroHeadingHighlight, heroSubtext, stats, introEyebrow, introLede, introBody}`, fallbackHome);
}

// ---------------- Services ----------------
export function getServices() {
  return safeFetch(
    `*[_type == "service"] | order(order asc){name, "slug": slug.current, short, overview, caps, "industries": relatedIndustries}`,
    staticServices
  );
}

export async function getService(slug: string) {
  const list = await getServices();
  return list.find((s) => s.slug === slug);
}

// ---------------- Industries ----------------
export function getIndustries() {
  return safeFetch(
    `*[_type == "industry"] | order(order asc){name, "slug": slug.current, short, overview, points, "services": relatedServices}`,
    staticIndustries
  );
}

export async function getIndustry(slug: string) {
  const list = await getIndustries();
  return list.find((i) => i.slug === slug);
}

// ---------------- Investor Portfolio ----------------
export function getPortfolio() {
  return safeFetch(
    `*[_type == "portfolioItem"] | order(order asc){name, "slug": slug.current, desc}`,
    staticPortfolio
  );
}

// ---------------- News ----------------
export type NewsItem = { tag: string; date: string; title: string; desc: string; image?: SanityImage | null };

const fallbackNews: NewsItem[] = [
  { tag: "Company", date: "Jul 2026", title: "OLIJE expands marine bunkering capacity at Lagos terminal", desc: "We've increased bunker fuel storage and berth capacity at our Lagos terminal to meet growing demand from commercial shipping lines." },
  { tag: "Partnership", date: "Jun 2026", title: "New long-term supply agreement signed for refined products", desc: "OLIJE has entered a multi-year supply agreement to strengthen refined product availability across regional distribution networks." },
  { tag: "Insight", date: "Jun 2026", title: "Navigating LNG demand shifts across West African markets", desc: "Our trading desk shares perspective on how gas-to-power demand is reshaping LNG procurement strategy in the region." },
  { tag: "Projects", date: "May 2026", title: "Groundbreaking on new inland storage facility", desc: "Construction has begun on a new inland storage and distribution facility, extending OLIJE's logistics footprint." },
  { tag: "Sustainability", date: "May 2026", title: "OLIJE publishes annual HSE performance summary", desc: "Our latest HSE report details performance across all operating sites for the past reporting cycle." },
  { tag: "Insight", date: "Apr 2026", title: "What rising vessel traffic means for regional bunkering", desc: "An overview of how shifting shipping lanes are influencing bunker fuel demand across West African ports." },
];

export function getNews() {
  return safeFetch<NewsItem[]>(
    `*[_type == "newsArticle"] | order(publishedAt desc){tag, "date": publishedAt, title, desc, image}`,
    fallbackNews
  );
}

// ---------------- Leadership team ----------------
export type TeamItem = { role: string; desc: string; name?: string; photo?: SanityImage | string | null };

const fallbackTeam: TeamItem[] = [
  {
    name: "Olije Fidelis",
    role: "Managing Director",
    desc: "Leads OLIJE’s strategy, business growth and overall performance. Directs the management team, allocates resources and oversees major commercial decisions and relationships.",
    photo: "/images/leadership/olije-fidelis-md.jpg",
  },
  {
    name: "Igut Edward",
    role: "Head of Business Development & Strategic Partnerships",
    desc: "Identifies commercial opportunities, develops client relationships and builds strategic partnerships. Coordinates market intelligence, proposals and opportunity follow-up to support business growth.",
    photo: "/images/leadership/igut-edward-manager.jpg",
  },
  {
    name: "Oladiran Kayode",
    role: "Head of Corporate Communications & Business Support",
    desc: "Coordinates company updates, social media content and approved investor communications. Oversees business documentation and information flow to ensure accurate, timely and professional communication.",
    photo: "/images/leadership/oladiran-kayode-officer.jpg",
  },
  {
    name: "Ojele Olusegun",
    role: "Head of Information Technology & Cybersecurity",
    desc: "Oversees OLIJE’s website, digital infrastructure and IT systems. Manages cybersecurity, access controls, backups and technical support to protect company information and support reliable operations.",
    photo: "/images/leadership/ojele-oluwasegun-it.jpg",
  },
  {
    name: "Aniekwe Judith Esq",
    role: "Head of Legal & Corporate Compliance",
    desc: "Oversees legal affairs, reviews and drafts agreements, advises on legal risks and coordinates corporate compliance. Ensures required legal documentation and contractual obligations receive appropriate attention.",
    photo: "/images/leadership/aniekwe-judith-legal.jpg",
  },
  {
    name: "Peter Morins",
    role: "Head of Operations & Field Coordination",
    desc: "Coordinates daily operational activities, field assignments, site visits and practical logistics. Tracks execution, liaises with service providers and resolves operational issues within his authority.",
    photo: "/images/leadership/peter-morins-ops.jpg",
  },
];

export function getTeam() {
  return safeFetch<TeamItem[]>(
    `*[_type == "teamMember"] | order(order asc){role, "desc": bio, name, photo}`,
    fallbackTeam
  );
}

// ---------------- Job openings ----------------
export type JobItem = { role: string; location: string; department: string };

const fallbackJobs: JobItem[] = [
  { role: "Crude Oil Trader", location: "Lagos, Nigeria", department: "Trading" },
  { role: "Marine Logistics Coordinator", location: "Lagos, Nigeria", department: "Operations" },
  { role: "HSE Officer", location: "Port Harcourt, Nigeria", department: "Health & Safety" },
  { role: "Infrastructure Project Manager", location: "Lagos, Nigeria", department: "Infrastructure" },
  { role: "Investor Relations Associate", location: "Lagos, Nigeria", department: "Finance" },
  { role: "Procurement Analyst", location: "Lagos, Nigeria", department: "Procurement" },
];

export function getJobs() {
  return safeFetch<JobItem[]>(
    `*[_type == "jobOpening" && isOpen == true] | order(order asc){role, location, department}`,
    fallbackJobs
  );
}

// ---------------- Offices ----------------
export type OfficeItem = { name: string; country?: string; address?: string; phone: string };

const fallbackOffices: OfficeItem[] = [
  {
    name: "Lagos HQ",
    address: "ROAD 4, CLOSE 3, WESTEND ESTATE,\nLEKKI COUNTY, LAGOS STATE, NIGERIA",
    country: "Nigeria",
    phone: "+2348032894304",
  },
];

export function getOffices() {
  return safeFetch<OfficeItem[]>(
    `*[_type == "officeLocation"] | order(order asc){name, country, address, phone}`,
    fallbackOffices
  );
}

// ---------------- Site settings ----------------
export type SiteSettings = {
  contactEmail: string;
  footerTagline: string;
  sustainabilityFeature: { heading: string; body: string; image?: SanityImage | null };
};

const fallbackSettings: SiteSettings = {
  contactEmail: "info@olije.com",
  footerTagline: "An international energy, infrastructure and investment company headquartered in Lagos, Nigeria.",
  sustainabilityFeature: {
    heading: "Growth measured by what it leaves behind",
    body: "Our environmental stewardship, community investment and governance commitments are reported with the same rigor as our financial performance.",
  },
};

export function getSiteSettings() {
  return safeFetch<SiteSettings>(
    `*[_type == "siteSettings"][0]{contactEmail, footerTagline, sustainabilityFeature}`,
    fallbackSettings
  );
}
