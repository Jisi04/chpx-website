import { useState } from "react";
import MemberCard from "./MemberCard";
import Reveal from "./Reveal";
import { members } from "../data/content";

const roles = [
  { title: "Creators", description: "Streamers, influencers, hosts, gamers, and online personalities." },
  { title: "Production Team", description: "Shooters, editors, designers, livestream operators, and content leads." },
  { title: "Management Team", description: "Talent managers, campaign coordinators, and partnership leads." },
  { title: "Community", description: "Supporters, viewers, fans, and collaborators growing with CHPX." },
];

export default function Meet() {
  // Tracks which single member is tap-revealed at a time (mobile has no real
  // ":hover", so MemberCard falls back to tap-to-toggle). Lifting this state
  // up here — instead of each card owning its own — means revealing one
  // card can turn the previously-revealed one back into a teaser.
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <section id="meet" className="section section-alt">
      <div className="section-inner">
        <p className="section-eyebrow">Meet CHPX</p>
        <h2>Meet the people behind the content.</h2>
        <p className="section-lead">
          Creators, storytellers, streamers, hosts, editors, strategists, and community builders.
        </p>

        <div className="card-grid card-grid-4">
          {roles.map((role) => (
            <article className="card" key={role.title}>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </article>
          ))}
        </div>

        <Reveal className="member-grid" ariaLabel="Team members">
          {members.map((member) => (
            <MemberCard
              key={member.slug}
              member={member}
              isRevealed={activeSlug === member.slug}
              onToggle={() =>
                setActiveSlug((prev) => (prev === member.slug ? null : member.slug))
              }
            />
          ))}
        </Reveal>
        <p className="member-hint">Hover to reveal on desktop · Tap to reveal on mobile</p>
      </div>
    </section>
  );
}
