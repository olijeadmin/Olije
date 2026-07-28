// The admin panel (Sanity Studio) is temporarily paused — see
// StudioClient.tsx.disabled and sanity.config.ts in the repo root, both
// left in place for when you're ready to re-enable it. This stub has zero
// imports from `sanity`/`next-sanity`/`styled-components`, so nothing
// Sanity-related is bundled or executed for this route, avoiding the
// createContext build error entirely while the rest of the site (which
// doesn't depend on Studio) builds and deploys normally.
//
// To re-enable later: rename StudioClient.tsx.disabled back to
// StudioClient.tsx, then restore this file to import and render it
// (see git history for the previous version, or ask for it again).

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin — OLIJE",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A1D30",
        color: "#F7F3EA",
        fontFamily: "system-ui, sans-serif",
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 560, textAlign: "center" }}>
        <div
          style={{
            fontSize: 12,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#D9B27C",
            marginBottom: 16,
          }}
        >
          OLIJE Admin
        </div>
        <h1 style={{ fontSize: 28, marginBottom: 16 }}>Admin panel coming soon</h1>
        <p style={{ opacity: 0.75, lineHeight: 1.6 }}>
          Content management is being finalized. In the meantime, the rest of the site is fully
          live — every page reads from its built-in default content as normal.
        </p>
      </div>
    </div>
  );
}
