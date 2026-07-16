import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { fadeUpItem } from "../motion";
import { roadmapPhases } from "../data/content";

export default function Roadmap() {
  return (
    <section id="roadmap" className="section">
      <div className="section-inner">
        <p className="section-eyebrow">Roadmap</p>
        <h2>Explore the CHPX 2026–2027 Roadmap</h2>
        <p className="section-lead">
          See how CHPX will grow across talent, production, creator education, media, marketing, tech, and
          live experiences.
        </p>

        {/* Teaser deck standing in for the full Canva roadmap, which isn't
            public yet — see roadmapPhases in data/content.ts. */}
        <Reveal className="card-grid roadmap-grid">
          {roadmapPhases.map((phase) => (
            <motion.article className="card" key={phase.title} variants={fadeUpItem}>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </motion.article>
          ))}
        </Reveal>

        <div className="roadmap-cta">
          <span className="btn btn-outline btn-disabled" aria-disabled="true">
            Full Roadmap Deck — Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}
