import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = process.env.CONTACT_FORM_RECIPIENT || "fidelisolije@olije.com";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, company, message, enquiryType, source = "contact" } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const emailSubject = `New website ${source} enquiry from ${name}`;
  const detailsHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b;">
      <h2 style="color: #0b1a28; border-bottom: 2px solid #b1763f; padding-bottom: 8px;">New Message from OLIJE Website</h2>
      <p><strong>Name:</strong> ${String(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${String(email)}">${String(email)}</a></p>
      ${phone ? `<p><strong>Phone:</strong> <a href="tel:${String(phone)}">${String(phone)}</a></p>` : ""}
      ${company ? `<p><strong>Company:</strong> ${String(company)}</p>` : ""}
      ${enquiryType ? `<p><strong>Enquiry Type:</strong> ${String(enquiryType)}</p>` : ""}
      <p><strong>Source Page:</strong> ${String(source)}</p>
      <div style="margin-top: 16px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #b1763f; border-radius: 4px;">
        <h4 style="margin: 0 0 8px 0; color: #0b1a28;">Message:</h4>
        <p style="margin: 0; white-space: pre-wrap;">${String(message)}</p>
      </div>
    </div>
  `;

  const detailsText = `
New Message from OLIJE Website
------------------------------
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ""}${company ? `Company: ${company}\n` : ""}${enquiryType ? `Enquiry Type: ${enquiryType}\n` : ""}Source: ${source}

Message:
${message}
  `.trim();

  let sent = false;

  // 1. Send via SMTP (e.g. Google Workspace, cPanel, Zoho, Microsoft 365) if configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: process.env.SMTP_SECURE === "false" ? false : true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"OLIJE Website" <${process.env.SMTP_USER}>`,
        to: RECIPIENT_EMAIL,
        replyTo: String(email),
        subject: emailSubject,
        text: detailsText,
        html: detailsHtml,
      });
      sent = true;
      console.log(`[Contact] Enquiry forwarded via SMTP to ${RECIPIENT_EMAIL}`);
    } catch (err) {
      console.error("[Contact] SMTP send error:", err);
    }
  }

  // 2. Send via Resend API if RESEND_API_KEY is configured
  if (!sent && process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "OLIJE Website <onboarding@resend.dev>",
          to: RECIPIENT_EMAIL,
          reply_to: String(email),
          subject: emailSubject,
          text: detailsText,
          html: detailsHtml,
        }),
      });
      if (res.ok) {
        sent = true;
        console.log(`[Contact] Enquiry forwarded via Resend to ${RECIPIENT_EMAIL}`);
      } else {
        const errData = await res.text();
        console.error("[Contact] Resend API error:", errData);
      }
    } catch (err) {
      console.error("[Contact] Resend send error:", err);
    }
  }

  console.log(`[Contact] Enquiry logged for ${RECIPIENT_EMAIL}:`, {
    name,
    email,
    phone,
    company,
    message,
    sent,
  });

  return NextResponse.json({ ok: true, recipient: RECIPIENT_EMAIL });
}
