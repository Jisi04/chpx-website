import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

// Wraps a grid/group (pillar cards, stats, member cards, etc.) so the whole
// block - and each motion-powered child inside it - fades/slides in the
// first time it scrolls into view. `whileInView` is Framer Motion's
// built-in scroll trigger, replacing the manual IntersectionObserver hook
// we used to write by hand for this. `viewport={{ once: true }}` means it
// only plays once, not every time you scroll past it.
export default function Reveal({ children, className = "", ariaLabel }: RevealProps) {
  return (
    <motion.div
      className={className}
      aria-label={ariaLabel}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
