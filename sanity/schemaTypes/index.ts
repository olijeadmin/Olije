import { type SchemaTypeDefinition } from "sanity";

import homePage from "./homePage";
import service from "./service";
import industry from "./industry";
import portfolioItem from "./portfolioItem";
import newsArticle from "./newsArticle";
import teamMember from "./teamMember";
import jobOpening from "./jobOpening";
import officeLocation from "./officeLocation";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    siteSettings,
    service,
    industry,
    portfolioItem,
    newsArticle,
    teamMember,
    jobOpening,
    officeLocation,
  ],
};
