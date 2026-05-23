import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL   = process.env.FROM_EMAIL           || 'onboarding@resend.dev';
const NOTIFY_EMAIL = process.env.NOTIFICATION_EMAIL   || 'hello@socialkutlet.com';
const DECK_URL     = process.env.DECK_URL             || '';

/* ─── types ──────────────────────────────────────────────────── */
interface ContactPayload {
  firstName: string;
  lastName:  string;
  email:     string;
  phone?:    string;
  company:   string;
  services:  string[];
  budget:    string;
  hearFrom?: string;
  message:   string;
}

/* ─── POST handler ───────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { firstName, lastName, email, company, services, budget, phone, hearFrom, message } = body;

  // Basic validation
  if (!firstName || !lastName || !email || !company || !budget || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 422 });
  }

  const fullName     = `${firstName} ${lastName}`;
  const servicesList = services?.length ? services.join(', ') : 'Not specified';

  try {
    // ── 1. Send deck to the lead ──────────────────────────────
    await resend.emails.send({
      from:    `Social Kutlet <${FROM_EMAIL}>`,
      to:      [email],
      subject: `Here's the Social Kutlet Deck, ${firstName} 🚀`,
      html:    leadEmail({ fullName, company, deckUrl: DECK_URL }),
    });

    // ── 2. Notify the team ────────────────────────────────────
    await resend.emails.send({
      from:    `Social Kutlet Forms <${FROM_EMAIL}>`,
      to:      [NOTIFY_EMAIL],
      subject: `New Lead: ${fullName} — ${company}`,
      html:    teamEmail({ fullName, email, phone, company, servicesList, budget, hearFrom, message }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] email send failed:', err);
    return NextResponse.json({ error: 'Email delivery failed. Please try again.' }, { status: 500 });
  }
}

/* ─── Email templates ────────────────────────────────────────── */

function leadEmail({ fullName, company, deckUrl }: { fullName: string; company: string; deckUrl: string }) {
  return /* html */`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Social Kutlet Deck</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- Header -->
          <tr>
            <td style="background:#0a0a0a;padding:32px 40px;">
              <p style="margin:0;color:#ffffff;font-size:22px;font-weight:900;letter-spacing:-0.5px;">Social Kutlet</p>
              <p style="margin:4px 0 0;color:#ffffff80;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">360° Solutions for Brands</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 6px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;">Hi ${fullName} 👋</p>
              <h1 style="margin:0 0 24px;color:#0a0a0a;font-size:26px;font-weight:900;line-height:1.2;letter-spacing:-0.5px;">
                Your copy of our deck is ready
              </h1>

              <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.7;">
                Thanks for reaching out on behalf of <strong>${company}</strong>. We've reviewed your submission and our team will get back to you within 24 hours with some initial thoughts.
              </p>

              <p style="margin:0 0 28px;color:#374151;font-size:15px;line-height:1.7;">
                In the meantime, here's our deck — it covers what we do, the brands we've worked with, and the kind of results we drive.
              </p>

              <!-- Deck CTA -->
              ${deckUrl ? `
              <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
                <tr>
                  <td style="background:#E8231A;border-radius:50px;padding:0;">
                    <a href="${deckUrl}" target="_blank"
                       style="display:inline-block;padding:16px 36px;color:#ffffff;font-size:15px;font-weight:900;text-decoration:none;letter-spacing:0.3px;">
                      View the Deck →
                    </a>
                  </td>
                </tr>
              </table>
              ` : ''}

              <p style="margin:0 0 6px;color:#374151;font-size:15px;line-height:1.7;">Looking forward to speaking soon.</p>
              <p style="margin:0;color:#374151;font-size:15px;font-weight:700;">— The Social Kutlet Team</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #f3f4f6;padding:24px 40px;">
              <p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.6;">
                You're receiving this because you submitted a form on socialkutlet.com. If you didn't fill in our form, please ignore this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function teamEmail({
  fullName, email, phone, company, servicesList, budget, hearFrom, message,
}: {
  fullName: string; email: string; phone?: string; company: string;
  servicesList: string; budget: string; hearFrom?: string; message: string;
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;font-weight:600;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0 10px 16px;border-bottom:1px solid #f3f4f6;color:#111827;font-size:14px;vertical-align:top;">${value}</td>
    </tr>`;

  return /* html */`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Lead — ${fullName}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- Header -->
          <tr>
            <td style="background:#E8231A;padding:28px 40px;">
              <p style="margin:0;color:#ffffff;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;opacity:0.8;">New Form Submission</p>
              <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;font-weight:900;letter-spacing:-0.5px;">${fullName} — ${company}</h1>
            </td>
          </tr>

          <!-- Lead details -->
          <tr>
            <td style="padding:32px 40px 8px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row('Name',     fullName)}
                ${row('Email',    `<a href="mailto:${email}" style="color:#E8231A;text-decoration:none;">${email}</a>`)}
                ${row('Phone',    phone || '—')}
                ${row('Company',  company)}
                ${row('Services', servicesList)}
                ${row('Budget',   budget)}
                ${row('Source',   hearFrom || '—')}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:8px 40px 32px;">
              <p style="margin:0 0 8px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Their message</p>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;">
                <p style="margin:0;color:#111827;font-size:14px;line-height:1.7;white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #f3f4f6;padding:20px 40px;">
              <p style="margin:0;color:#9ca3af;font-size:12px;">
                Deck was sent automatically to <strong>${email}</strong>. Reply within 24 hours.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
