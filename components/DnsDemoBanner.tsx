"use client";

const fallbackTarget = "https://this-domain-should-not-resolve.invalid";
const targetUrl = process.env.NEXT_PUBLIC_DNS_TARGET || fallbackTarget;

export default function DnsDemoBanner() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black px-6 text-center">
      <div className="max-w-xl rounded-lg border border-red-500/40 bg-red-950/80 p-8 shadow-2xl">
        <p className="text-[0.7rem] uppercase tracking-[0.35em] text-red-300">DNS resolution error</p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">This website is currently unavailable</h1>
        <p className="mt-4 text-base leading-7 text-red-100/90">
          The host <span className="font-semibold">{targetUrl}</span> could not be resolved. The site is not reachable from this network.
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-red-300">Please contact the administrator</p>
      </div>
    </div>
  );
}
