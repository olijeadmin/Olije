import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olije.com"),
  title: {
    default: "OLIJE — Building Legacies. Shaping Tomorrow.",
    template: "%s — OLIJE",
  },
  description:
    "OLIJE is an international energy, infrastructure and investment company headquartered in Lagos, Nigeria, trading crude and refined products, LNG, marine logistics, infrastructure and real estate.",
  openGraph: {
    title: "OLIJE — Building Legacies. Shaping Tomorrow.",
    description:
      "International energy, infrastructure and investment company connecting Nigeria to global markets.",
    siteName: "OLIJE",
    type: "website",
  },
};

// This root layout is intentionally minimal — it only sets up fonts and the
// <html>/<body> shell. The public site's Header/Footer live in
// app/(site)/layout.tsx, and /admin (the Sanity Studio) renders full-screen
// with neither, since a CMS editor needs the whole viewport.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
