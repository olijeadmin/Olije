import { defineField, defineType } from "sanity";

export default defineType({
  name: "jobOpening",
  title: "Job Opening",
  type: "document",
  fields: [
    defineField({ name: "role", title: "Role title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "department", title: "Department", type: "string" }),
    defineField({ name: "isOpen", title: "Currently accepting applications", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "role", subtitle: "location" } },
});
