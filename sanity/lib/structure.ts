import type { StructureResolver } from "sanity/structure";

// This is what makes the admin feel like a purpose-built OLIJE panel rather
// than a generic document list: singletons (Home Page, Site Settings) are
// pinned at the top with their own icons, and everything else is grouped
// into the same sections a content editor thinks in — Services & Industries,
// News & Careers, People & Offices.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("OLIJE Content")
    .items([
      S.listItem()
        .title("Home Page")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.listItem()
        .title("Services")
        .child(S.documentTypeList("service").title("Services")),
      S.listItem()
        .title("Industries")
        .child(S.documentTypeList("industry").title("Industries")),
      S.listItem()
        .title("Investor Portfolio")
        .child(S.documentTypeList("portfolioItem").title("Portfolio Items")),
      S.divider(),
      S.listItem()
        .title("Newsroom")
        .child(S.documentTypeList("newsArticle").title("News Articles")),
      S.listItem()
        .title("Careers — Openings")
        .child(S.documentTypeList("jobOpening").title("Job Openings")),
      S.divider(),
      S.listItem()
        .title("Leadership Team")
        .child(S.documentTypeList("teamMember").title("Team Members")),
      S.listItem()
        .title("Offices")
        .child(S.documentTypeList("officeLocation").title("Office Locations")),
    ]);
