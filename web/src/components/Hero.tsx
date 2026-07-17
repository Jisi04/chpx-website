import { motion } from "framer-motion";
import MotionButton from "./MotionButton";
import { staggerContainer, fadeUpItem } from "../motion";

export default function Hero() {
  return (
    <section className="hero">
      {/* Faint decorative watermark (crossed chopsticks over the brush-ring
          mark), bottom-right of the hero — purely decorative, so it's
          aria-hidden and sits behind the real content. */}
      <img src="/assets/hero-watermark.png" alt="" aria-hidden="true" className="hero-watermark" />
      {/* animate (not whileInView) since the hero is visible immediately on
          page load - there's nothing to "scroll into view" here. */}
      <motion.div className="hero-inner" variants={staggerContainer} initial="hidden" animate="visible">
        <motion.p className="eyebrow" variants={fadeUpItem}>
          Creator Collective × Content × Community
        </motion.p>
        {/* "CHPX" headline with the X swapped for the orange crossed-chopsticks
            mark (brand asset), and the Choppedstyx line swapped for the light
            wordmark image — left-aligned to match the eyebrow above it. */}
        <motion.h1 className="hero-title" variants={fadeUpItem}>
          CHP
          <img src="/assets/hero-chopsticks.png" alt="X" className="hero-title-mark" />
        </motion.h1>
        <motion.div className="hero-divider" variants={fadeUpItem} />
        <motion.p className="hero-subheading" variants={fadeUpItem}>
          <img src="/assets/hero-wordmark.png" alt="Choppedstyx" className="hero-subheading-img" />
        </motion.p>
        <motion.p className="hero-sub" variants={fadeUpItem}>
          We are a creator collective, talent, digital marketing, and production company — all in
          one.
        </motion.p>
        <motion.div className="cta-row" variants={fadeUpItem}>
          <MotionButton href="#meet" className="btn btn-primary">
            Meet CHPX
          </MotionButton>
          <MotionButton href="#roadmap" className="btn btn-outline">
            View Roadmap
          </MotionButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
