import { Router } from "express";
import { contactRateLimiter } from "../middleware/rateLimiter.js";
import { sendContactEmail } from "../lib/mailer.js";

export const contactRouter = Router();

const VALID_INQUIRY_TYPES = [
  "Collaboration",
  "Booking",
  "Campaign",
  "Production",
  "Partnership",
  "Other",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactRouter.post("/", contactRateLimiter, async (req, res) => {
  const { name, email, inquiry_type: inquiryType, message, company } = req.body ?? {};

  // Honeypot: a field named "company" that's hidden from real visitors via
  // CSS on the frontend form. Only bots that blindly fill every field trip
  // this. Respond as if it succeeded so the bot doesn't learn anything —
  // just don't actually send the email.
  if (typeof company === "string" && company.trim() !== "") {
    return res.json({ ok: true });
  }

  if (typeof name !== "string" || name.trim().length < 1) {
    return res.status(400).json({ error: "Name is required." });
  }
  if (typeof email !== "string" || !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }
  if (typeof inquiryType !== "string" || !VALID_INQUIRY_TYPES.includes(inquiryType)) {
    return res.status(400).json({ error: "Please select a valid inquiry type." });
  }
  if (typeof message !== "string" || message.trim().length < 1) {
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    await sendContactEmail({ name, email, inquiryType, message });
    res.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    res.status(502).json({ error: "Something went wrong sending your message." });
  }
});
