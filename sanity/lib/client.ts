import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
  // Content is read fresh in production too (rather than the long-lived
  // CDN cache) so an editor's change shows up on next page load without
  // waiting for a full redeploy.
  perspective: "published",
});
