import { NextResponse } from "next/server";
import { renderContactEmail, validateContact } from "@/lib/contact";
import { site } from "@/content/site";

export async function POST(request: Request) {
  const result = validateContact(await request.json().catch(() => null));
  if (!result.ok) return NextResponse.json({ error: result.error }, { status: 400 });

  const { data } = result;
  if (data.website) return NextResponse.json({ ok: true });

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    return NextResponse.json({ error: "Contact form is not configured" }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: data.email,
      subject: `${site.shortName} · New inquiry from ${data.name} (${data.company})`,
      html: renderContactEmail(data),
    }),
  });

  if (!response.ok) return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
