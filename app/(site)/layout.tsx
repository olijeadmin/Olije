import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteSettings } from "@/lib/content";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer tagline={settings.footerTagline} contactEmail={settings.contactEmail} />
    </>
  );
}
