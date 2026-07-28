/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  // Fixes a known unresolved bug (sanity-io/next-sanity#2201): Next.js's
  // server/RSC bundler tries to statically analyze the `sanity` package's
  // internals and incorrectly pulls client-only React APIs (createContext)
  // into the server bundle, crashing the build with "TypeError: (0,
  // r.createContext) is not a function" during "Collecting page data".
  // Marking these packages as external tells Next.js to require() them at
  // runtime instead of bundling/analyzing them, which avoids the bug.
  experimental: {
    serverComponentsExternalPackages: ["sanity", "@sanity/vision", "@sanity/image-url", "styled-components"],
  },
};

export default nextConfig;
