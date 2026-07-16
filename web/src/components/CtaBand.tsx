import Reveal from "./Reveal";
import MotionButton from "./MotionButton";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <Reveal className="section-inner">
        <h2>Ready to Build Something?</h2>
        <p>Whether you're a creator looking for a home or a brand looking for authentic reach — let's talk.</p>
        <div className="cta-row">
          <MotionButton href="#contact" className="btn btn-primary">
            Get in Touch
          </MotionButton>
          <MotionButton href="#meet" className="btn btn-outline-light">
            See Our Work
          </MotionButton>
        </div>
      </Reveal>
    </section>
  );
}
