import nodemailer from "nodemailer";

// Generic SMTP transport — works with any provider (Gmail, SendGrid, Mailgun,
// Resend, Postmark, a VPS's own mail relay, etc.), so switching providers
// later is an env var change, not a code change.
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface ContactFields {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export async function sendContactEmail(fields: ContactFields): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is not set");
  }

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to,
    replyTo: fields.email,
    subject: `New CHPX inquiry: ${fields.inquiryType} — from ${fields.name}`,
    text: `Name: ${fields.name}\nEmail: ${fields.email}\nInquiry type: ${fields.inquiryType}\n\n${fields.message}`,
  });
}
