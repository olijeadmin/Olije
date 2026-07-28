import { defineField, defineType } from "sanity";

export default defineType({
  name: "officeLocation",
  title: "Office Location",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Office name (e.g. Lagos HQ)", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "country", title: "Country", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "isHeadquarters", title: "This is the headquarters", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "country" } },
});
