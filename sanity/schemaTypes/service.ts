import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug (URL path)",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "short", title: "Short description (hub card + hero)", type: "text", rows: 2 }),
    defineField({ name: "overview", title: "Overview paragraph", type: "text", rows: 4 }),
    defineField({
      name: "caps",
      title: "What we deliver",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "desc", type: "text", rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: "relatedIndustries",
      title: "Related industries (type the industry name)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "short" } },
});
