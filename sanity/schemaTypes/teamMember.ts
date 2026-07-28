import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Leadership Team Member",
  type: "document",
  fields: [
    defineField({
      name: "photo",
      title: "Photo",
      description: "Shown large at the top of this person's card on the Leadership page — a square, well-lit headshot works best.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "name", title: "Name (leave blank to show role only)", type: "string" }),
    defineField({ name: "role", title: "Role / Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "bio", title: "Short bio", type: "text", rows: 2 }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "role", subtitle: "name", media: "photo" } },
});
