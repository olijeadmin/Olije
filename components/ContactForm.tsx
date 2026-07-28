"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
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
        body: JSON.stringify({ ...data, source: "contact" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "bg-ivory/[0.06] border border-ivory/20 text-ivory px-3.5 py-3 text-[0.9rem] rounded-[1px] focus-visible:outline-goldLight";
  const labelClass = "text-[0.76rem] tracking-[0.06em] uppercase text-ivory/60 font-semibold";

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Full Name</label>
          <input name="name" type="text" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Company</label>
          <input name="company" type="text" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Email</label>
          <input name="email" type="email" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Enquiry Type</label>
          <select name="enquiryType" className={inputClass}>
            <option>Partnership Enquiry</option>
            <option>Service Enquiry</option>
            <option>Press Enquiry</option>
            <option>Careers</option>
            <option>Other</option>
          </select>
        </div>
        <div className="sm:col-span-2 flex flex-col gap-2">
          <label className={labelClass}>Message</label>
          <textarea name="message" required rows={4} className={`${inputClass} resize-y`} />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex items-center justify-center text-[0.82rem] font-semibold px-6 py-3.5 rounded-[2px] bg-gold text-ivory hover:bg-[#96622F] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
      {status === "sent" && <p className="mt-4 text-[0.85rem] text-goldLight">Thank you — a member of our team will respond shortly.</p>}
      {status === "error" && (
        <p className="mt-4 text-[0.85rem] text-red-300">Something went wrong — please email us directly at info@olije.com.</p>
      )}
    </form>
  );
}
