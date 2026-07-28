import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/lib/structure";

export default defineConfig({
  name: "olije-admin",
  title: "OLIJE Admin",

  projectId,
  dataset,
  basePath: "/admin",

  schema,

  plugins: [
    structureTool({ structure }),
    // Vision lets a developer run raw GROQ queries from within the studio —
    // handy for debugging, harmless for editors (it's just another tab).
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
