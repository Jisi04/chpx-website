// Content data, kept separate from components. This is a common React/TS
// pattern: components describe HOW to render something, data files
// describe WHAT to render. Editing copy later means editing this file,
// not hunting through JSX.

import type { Pillar, Stat, Member, NavLink, RoadmapPhase } from "../types";

export const navLinks: NavLink[] = [
  { href: "#about", label: "About CHPX" },
  { href: "#meet", label: "Meet CHPX" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#contact", label: "Contact 💖" },
];

// Teaser cards for the Roadmap section, covering the same seven growth
// areas already named in that section's lead paragraph — a stand-in for
// the full Canva roadmap deck, which is still coming soon.
export const roadmapPhases: RoadmapPhase[] = [
  { title: "Talent", description: "Growing the creator roster and expanding brand bookings." },
  { title: "Production", description: "Scaling content ops: shoots, livestreams, and branded videos." },
  { title: "Creator Education", description: "Workshops, resources, and mentorship for the collective." },
  { title: "Media", description: "Original series and content built for the CHPX audience." },
  { title: "Marketing", description: "Campaigns and brand storytelling that grow reach the right way." },
  { title: "Tech", description: "Internal tools and platforms built for creators, by creators." },
  { title: "Live Experiences", description: "Events, meetups, and in-person activations." },
];

export const pillars: Pillar[] = [
  {
    number: "01",
    tag: "Talent",
    title: "Talent Agency",
    description: "Creator bookings, brand deals, campaign matching, and opportunities.",
    color: "#ec4899",
  },
  {
    number: "02",
    tag: "Production",
    title: "Production Company",
    description: "Social media content, livestreams, shoots, branded videos, and event coverage.",
    color: "#f5820a",
  },
  {
    number: "03",
    tag: "Community",
    title: "Creator Collective",
    description: "A home for creators to collaborate, grow, and create together.",
    color: "#22d3ee",
  },
  {
    number: "04",
    tag: "Collab",
    title: "Brand Collaborations",
    description: "Helpi