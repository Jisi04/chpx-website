import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { Member } from "../types";
import { fadeUpItem } from "../motion";

interface MemberCardProps {
  member: Member;
  /** Whether this card is the one currently tap-revealed (mobile fallback). */
  isRevealed: boolean;
  /** Toggles this card's revealed state on/off in the parent's shared state. */
  onToggle: () => void;
}

// Lift + zoom for the media box on hover/focus/tap. `overflow: hidden` on
// .member-media (styles.css) clips the zoomed image to the card's rounded
// frame, so it never spills past the edges while scaling up.
const mediaVariants: Variants = {
  rest: { y: 0, scale: 1 },
  active: { y: -4, scale: 1.08 },
};

// The teaser (silhouette) crosses fades out to reveal the real photo
// underneath - it shares the same "rest"/"active" names as mediaVariants
// above, so it automatically follows whichever state the media box is in.
const teaserVariants: Variants = {
  rest: { opacity: 1 },
  active: { opacity: 0 },
};

// Teaser (silhouette) shown by default; reveal (real photo) fades in on
// hover/focus via Framer Motion variants. `isRevealed` is a tap-to-toggle
// fallback for touch devices, which don't have a real ":hover" state -
// tapping the card locks the reveal on until tapped again. It's owned by
// Meet.tsx (not local state) so tapping one card also un-reveals whichever
// other card was previously tapped, instead of allowing several revealed
// cards at once.
export default function MemberCard({ member, isRevealed, onToggle }: MemberCardProps) {
  return (
    <motion.button
      type="button"
      className="member-card"
      variants={fadeUpItem}
      onClick={onToggle}
    >
      <motion.span
        className="member-media"
        style={{ "--member-color": member.color } as CSSProperties}
        variants={mediaVariants}
        initial="rest"
        animate={isRevealed ? "active" : "rest"}
        whileHover="active"
        whileFocus="active"
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        <img
          src={`/assets/members/reveal/${member.slug}.jpg`}
          alt={`${member.name}, ${member.role}`}
          className="member-img member-img-reveal"
          loading="lazy"
        />
        <motion.img
          src={`/assets/members/teaser/${member.slug}.jpg`}
          alt=""
          className="member-img member-img-teaser"
          loading="lazy"
          variants={teaserVariants}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </motion.span>
      <span className="member-name">{member.name}</span>
    </motion.button>
  );
}
