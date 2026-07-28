import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-navy text-ivory">
      <div className="container-wrap text-center py-24">
        <div className="text-[0.75rem] tracking-[0.28em] uppercase font-semibold text-goldLight mb-4">
          404
        </div>
        <h1 className="font-serif text-[2.4rem] md:text-[3rem]">Page not found</h1>
        <p className="text-ivory/70 mt-4 max-w-[440px] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex mt-8 text-[0.82rem] font-semibold px-6 py-3.5 rounded-[2px] bg-gold text-ivory hover:bg-[#96622F] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
