// Shared TypeScript types for CHPX content.
// Keeping these in one place means every component that uses a Pillar,
// Stat, or Member gets type-checked the same way — if the shape of the
// data ever changes, TypeScript will flag every place that breaks.

export interface Pillar {
  number: string;
  tag: string;
  title: string;
  description: string;
  /** Short keyword chips shown under the description (pulled from the
   * description's own wording, not separate marketing copy). */
  tags: string[];
  /** Signature accent color for this pillar's number + chips (hex). */
  color: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Member {
  slug: string;
  name: string;
  role: string;
  /** Signature accent color for this member's card ring/glow (hex). */
  color: string;
}

export interface NavLink {
  href: string;
  label: string;
}

/** One focus area on the roadmap teaser grid (the full, detailed roadmap
 * deck is still "coming soon" — see Roadmap.tsx). */
export interface RoadmapPhase {
  title: string;
  description: string;
}
