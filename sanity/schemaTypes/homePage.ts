import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero — small label above headline", type: "string" }),
    defineField({
      name: "heroImage",
      title: "Hero background photo",
      description: "Full-bleed image behind the hero headline. Leave empty to use the default dark texture.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "heroHeadingLine1", title: "Hero — headline, line 1", type: "string" }),
    defineField({ name: "heroHeadingHighlight", title: "Hero — headline, highlighted line", type: "string" }),
    defineField({ name: "heroSubtext", title: "Hero — supporting paragraph", type: "text", rows: 3 }),
    defineField({
      name: "stats",
      title: "Hero stats row",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", title: "Value (e.g. 9, 20+)" },
            { name: "label", type: "string", title: "Label (e.g. Core Service Lines)" },
          ],
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({ name: "introEyebrow", title: "Intro — small label", type: "string" }),
    defineField({ name: "introLede", title: "Intro — large statement", type: "text", rows: 3 }),
    defineField({
      name: "introBody",
      title: "Intro — supporting paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page content" };
    },
  },
});
