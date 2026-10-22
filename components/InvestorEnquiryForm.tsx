"use client";

import { useState, type FormEvent } from "react";

export default function InvestorEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "investors" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" type="text" required />
        <Field label="Organisation" name="organisation" type="text" />
        <Field label="Email" name="email" type="email" required />
        <div className="flex flex-col gap-2">
          <label className="text-[0.76rem] tracking-[0.06em] uppercase text-ivory/60 font-semibold">Enquiry Type</label>
          <select
            name="enquiryType"
            className="bg-ivory/[0.06] border border-ivory/20 text-ivory px-3.5 py-3 text-[0.9rem] rounded-[1px] focus-visible:outline-goldLight"
          >
            <option>Investment Enquiry</option>
            <option>Financial Information Request</option>
            <option>Partnership Enquiry</option>
            <option>Media / Press</option>
          </select>
        </div>
        <div className="sm:col-span-2 flex flex-col gap-2">
          <label className="text-[0.76rem] tracking-[0.06em] uppercase text-ivory/60 font-semibold">Message</label>
          <textarea
            name="message"
            required
            rows={4}
            className="bg-ivory/[0.06] border border-ivory/20 text-ivory px-3.5 py-3 text-[0.9rem] rounded-[1px] resize-y focus-visible:outline-goldLight"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex items-center justify-center text-[0.82rem] font-semibold px-6 py-3.5 rounded-[2px] bg-gold text-ivory hover:bg-[#96622F] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Submit Enquiry"}
      </button>
      {status === "sent" && (
        <p className="mt-4 text-[0.85rem] text-goldLight">Thank you — our Investor Relations desk will be in touch.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-[0.85rem] text-red-300">Something went wrong — please email us directly at info@olije.com.</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[0.76rem] tracking-[0.06em] uppercase text-ivory/60 font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="bg-ivory/[0.06] border border-ivory/20 text-ivory px-3.5 py-3 text-[0.9rem] rounded-[1px] focus-visible:outline-goldLight"
      />
    </div>
  );
}
