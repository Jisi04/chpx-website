import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import type { Pillar } from "../types";
import { fadeUpItem } from "../motion";

// This component takes a `pillar` prop typed as the Pillar interface.
// If you tried to pass something missing a `title`, or passed a number
// where `tag` (a string) is expected, TypeScript would error immediately
// in your editor — before you ever run the app. That's the whole point
// of TypeScript: catching shape mistakes early.

interface PillarCardProps {
  pillar: Pillar;
}

// No `initial`/`animate` set here on purpose — this card is always rendered
// inside a <Reveal> wrapper (see About.tsx), and Framer Motion automatically
// picks up "hidden"/"visible" from that ancestor. `whileHover` is local to
// this component only.
export default function PillarCard({ pillar }: PillarCardProps) {
  return (
    <motion.article
      className="pillar-card"
      style={{ "--pillar-color": pillar.color } as CSSProperties}
      variants={fadeUpItem}
      whileHover={{ y: -6, backgroundColor: "rgba(38, 38, 38, 0.75)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <span className="pillar-tag">{pillar.tag}</span>
      <h3 className="pillar-title">{pillar.title}</h3>
      <p>{pillar.description}</p>
    </motion.article>
  );
}
