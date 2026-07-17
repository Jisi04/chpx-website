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
    title: "Talent Management",
    description: "Creator bookings, brand deals, campaign matching, and opportunities.",
    tags: ["Creator Bookings", "Brand Deals", "Campaign Matching", "Opportunities"],
    color: "#ec4899",
  },
  {
    number: "02",
    tag: "Production",
    title: "Production Company",
    description: "Social media content, livestreams, shoots, branded videos, and event coverage.",
    tags: ["Social Media Content", "Livestreams", "Shoots", "Branded Videos", "Event Coverage"],
    color: "#f5820a",
  },
  {
    number: "03",
    tag: "Community",
    title: "Creator Collective",
    description: "A home for creators to collaborate, grow, and create together.",
    tags: ["Collaborate", "Grow", "Create Together"],
    color: "#22d3ee",
  },
  {
    number: "04",
    tag: "Collab",
    title: "Brand Collaborations",
    description: "Helping brands work with creators in a more authentic, community-driven way.",
    tags: ["Authentic", "Community-Driven"],
    color: "#8b5cf6",
  },
];

export const stats: Stat[] = [
  { value: "100%", label: "Creator-led" },
  { value: "PH-Based", label: "Globally minded" },
  { value: "One Roof", label: "Collective × Content × Community" },
];

export const members: Member[] = [
  { slug: "anjel", name: "Anjel", role: "CHPX creator", color: "#8b5cf6" },
  { slug: "apaul", name: "Apaul", role: "CHPX creator", color: "#14b8a6" },
  { slug: "edge", name: "Edge", role: "CHPX creator", color: "#3b82f6" },
  { slug: "erina", name: "Erina", role: "CHPX creator", color: "#eab308" },
  { slug: "johnweak", name: "John Weak", role: "CHPX creator", color: "#22c55e" },
  { slug: "maximus", name: "Maximus", role: "CHPX creator", color: "#ef4444" },
  { slug: "nikkinikki", name: "Nikkinikki", role: "CHPX creator", color: "#ec4899" },
  { slug: "yendere", name: "Yendere", role: "CHPX creator", color: "#f5820a" },
];
