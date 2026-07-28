import { defineField, defineType } from "sanity";

export default defineType({
  name: "newsArticle",
  title: "News Article",
  type: "document",
  fields: [
    defineField({
      name: "tag",
      title: "Category",
      type: "string",
      options: { list: ["Company", "Partnership", "Insight", "Projects", "Sustainability"] },
    }),
    defineField({ name: "title", title: "Headline", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "image",
      title: "Article image",
      description: "Shown large at the top of the article card. Leave empty for a text-only card.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "desc", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "publishedAt", title: "Date", type: "date" }),
    defineField({ name: "body", title: "Full article (optional)", type: "array", of: [{ type: "block" }] }),
  ],
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "tag" } },
});
