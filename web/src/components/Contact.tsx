import { useState } from "react";
import type { FormEvent } from "react";
import MotionButton from "./MotionButton";
import { InstagramIcon, YoutubeIcon, TiktokIcon, FacebookIcon, DiscordIcon, SendIcon } from "./SocialIcons";

// Union type: `status` can only ever be one of these four exact strings.
// TypeScript will error if any code tries to set it to something else,
// e.g. a typo like "sucess" — the compiler catches it, not a user.
type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const statusMessage: Record<FormStatus, string> = {
    idle: "",
    sending: "Sending…",
    success: "Thanks! We'll get back to you soon.",
    error: "Something went wrong — please email us directly.",
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="section-inner">
        <p className="section-eyebrow">Contact 💖</p>
        <h2>Work with CHPX 💖</h2>
        <p className="section-lead">
          For collaborations, creator bookings, campaigns, production inquiries, and partnerships, contact us
          at <a href="mailto:contact@chpx.ph">contact@chpx.ph</a>
        </p>

        <div className="contact-layout">
          <div className="contact-main">
            <p className="section-eyebrow">Send a Message</p>
            <h2>Let's Build Something.</h2>

            <form className="contact-form" action="https://formspree.io/f/xdaqavgv" method="POST" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="inquiry">I'm reaching out as a...</label>
                <select id="inquiry" name="inquiry_type" required defaultValue="">
                  <option value="">Select one…</option>
                  <option>Collaboration</option>
                  <option>Booking</option>
                  <option>Campaign</option>
                  <option>Production</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us what you have in mind…" required></textarea>
              </div>

              <MotionButton
                type="submit"
                className="btn btn-primary form-submit"
                disabled={status === "sending"}
              >
                <SendIcon />
                {status === "sending" ? "Sending…" : "Send Message"}
              </MotionButton>
              <p className={`form-status${status === "success" ? " success" : ""}${status === "error" ? " error" : ""}`} role="status" aria-live="polite">
                {statusMessage[status]}
              </p>
            </form>
          </div>

          <aside className="contact-sidebar">
            <div className="sidebar-panel">
              <div className="sidebar-rule accent" />
              <p className="sidebar-eyebrow">Find Us</p>

              <div className="sidebar-item">
                <p className="sidebar-label">Email</p>
                <a href="mailto:contact@chpx.ph">contact@chpx.ph</a>
              </div>

              <div className="sidebar-item">
                <p className="sidebar-label">Based In</p>
                <p className="sidebar-value">Philippines</p>
              </div>

              <div className="sidebar-item">
                <p className="sidebar-label">Follow the Collective</p>
                <div className="contact-social" aria-label="CHPX on social media">
                  <a href="https://instagram.com/choppedstyxph" target="_blank" rel="noopener" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                  <a href="https://youtube.com/@choppedstyxph" target="_blank" rel="noopener" aria-label="YouTube">
                    <YoutubeIcon />
                  </a>
                  <a href="https://tiktok.com/@choppedstyxph" target="_blank" rel="noopener" aria-label="TikTok">
                    <TiktokIcon />
                  </a>
                  <a href="https://facebook.com/choppedstyxph" target="_blank" rel="noopener" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="https://discord.gg/choppedstyxph" target="_blank" rel="noopener" aria-label="Discord">
                    <DiscordIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="sidebar-panel">
              <div className="sidebar-rule accent-red" />
              <p className="sidebar-eyebrow">Explore</p>
              <nav className="sidebar-links">
                <a href="#about">— About CHPX</a>
                <a href="#meet">— Meet the Crew</a>
                <a href="#roadmap">— Roadmap</a>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
