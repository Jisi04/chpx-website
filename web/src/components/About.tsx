import { motion } from "framer-motion";
import PillarCard from "./PillarCard";
import Reveal from "./Reveal";
import { fadeUpItem } from "../motion";
import { pillars, stats } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="section-eyebrow">What We Do</p>
        <h2 className="display-heading">
          Four Pillars.
          <br />
          One Collective.
        </h2>

        {/* .map() renders one PillarCard per entry in the pillars array —
            add a fifth pillar in data/content.ts and a card appears here
            automatically, no JSX to duplicate by hand. Reveal's stagger
            picks up each PillarCard's own fadeUpItem variant automatically,
            no manual index/delay wiring needed. */}
        <Reveal className="pillar-grid">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.number} pillar={pillar} />
          ))}
        </Reveal>

        <Reveal className="stats-strip">
          {stats.map((stat) => (
            <motion.div className="stat" key={stat.label} variants={fadeUpItem}>
              <span className="stat-num">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </Reveal>

        <Reveal className="why-chpx">
          <p className="section-eyebrow">Why CHPX</p>
          <h2>Why CHPX?</h2>
          <p className="section-lead">
            Because the creator economy deserves a home built by people who actually live in it.
          </p>
          <blockquote className="pull-quote">
            "We bring together content creators, production teams, brands, and communities to create campaigns,
            livestreams, events, and digital experiences made for the internet."
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
