// Shared Framer Motion variant definitions, kept in one place for the same
// reason data/content.ts is separate from components: several components
// (Reveal, PillarCard, MemberCard, About's stat blocks) all need the exact
// same "fade up" entrance shape, so it's defined once here instead of
// copy-pasted into every file.
import type { Variants } from "framer-motion";

// Applied to a wrapping element (see Reveal.tsx). `staggerChildren` tells
// Framer Motion to animate direct motion-children one after another
// instead of all at once, whenever this element scrolls into view.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

// Applied to each item inside a staggerContainer (PillarCard, MemberCard,
// stat blocks). Framer Motion automatically picks up "hidden"/"visible"
// from the nearest ancestor using staggerContainer - no manual wiring
// needed per item, unlike the old CSS `--i` trick.
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// A gentle spring used for hover/tap interactions (buttons, cards).
export const springHover = { type: "spring", stiffness: 350, damping: 20 } as const;
