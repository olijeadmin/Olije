export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// The whole CMS layer is opt-in: until you set a project ID (see README →
// "Turning on the admin"), the site runs entirely on the static content in
// lib/data.ts and lib/content.ts, exactly as it did before. Once you add a
// project ID, /admin lights up and every page starts reading from Sanity
// instead.
export const sanityConfigured = Boolean(projectId);
