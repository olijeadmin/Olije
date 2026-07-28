import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "contactEmail", title: "Primary contact email", type: "string" }),
    defineField({
      name: "footerTagline",
      title: "Footer tagline",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "sustainabilityFeature",
      title: "Home page — Sustainability feature panel",
      type: "object",
      fields: [
        { name: "heading", type: "string" },
        { name: "body", type: "text", rows: 3 },
        { name: "image", title: "Background photo", type: "image", options: { hotspot: true } },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
