"use client";

import { useState, type FormEvent } from "react";

export default function ApplicationForm() {
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
        body: JSON.stringify({ ...data, source: "careers" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "bg-white border border-[rgba(177,118,63,0.28)] text-ink px-3.5 py-3 text-[0.9rem] rounded-[1px] focus-visible:outline-gold";
  const labelClass = "text-[0.76rem] tracking-[0.06em] uppercase text-[#5a6779] font-semibold";

  return (
    <form onSubmit={onSubmit} className="max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Full Name</label>
          <input name="name" type="text" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass}>Email</label>
          <input name="email" type="email" required className={inputClass} />
        </div>
        <div className="sm:col-span-2 flex flex-col gap-2">
          <label className={labelClass}>Role of Interest</label>
          <input name="role" type="text" className={inputClass} />
        </div>
        <div className="sm:col-span-2 flex flex-col gap-2">
          <label className={labelClass}>Cover Note</label>
          <textarea name="message" required rows={4} className={`${inputClass} resize-y`} />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex items-center justify-center text-[0.82rem] font-semibold px-6 py-3.5 rounded-[2px] bg-gold text-ivory hover:bg-[#96622F] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Submit Application"}
      </button>
      {status === "sent" && <p className="mt-4 text-[0.85rem] text-gold">Thank you — your application has been received.</p>}
      {status === "error" && (
        <p className="mt-4 text-[0.85rem] text-red-600">Something went wrong — please email us directly at info@olije.com.</p>
      )}
    </form>
  );
}
