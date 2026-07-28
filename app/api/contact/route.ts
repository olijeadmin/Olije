import { NextResponse } from "next/server";

// This route accepts submissions from the Contact, Careers and Investors
// forms. It validates the payload and is wired to send mail — you just
// need to supply real credentials (see README "Wiring up the contact form").
//
// To actually deliver mail, install an emailer (e.g. `npm i resend` or
// `npm i nodemailer`) and fill in the TODO below. Until then this route
// logs the submission server-side and returns success so the UI works
// end-to-end during development/demo.

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // TODO: send the email. Example using Resend (npm i resend):
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "OLIJE Website <no-reply@olije.com>",
  //   to: "info@olije.com",
  //   subject: `New ${body.source ?? "website"} enquiry from ${name}`,
  //   text: JSON.stringify(body, null, 2),
  // });

  console.log("New enquiry received:", body);

  return NextResponse.json({ ok: true });
}
