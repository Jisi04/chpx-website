import { useState } from "react";
import { navLinks } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";

// A React component is just a function that returns JSX (HTML-like syntax).
// useState below gives this component its own memory: `menuOpen` tracks
// whether the mobile menu is open, and calling setMenuOpen re-renders
// automatically — no manual DOM class-toggling like our vanilla script.js.

const sectionIds = ["about", "meet", "roadmap", "contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  return (
    <header className="site-header" id="top">
      <div className="nav-wrap">
        <a
          href="#top"
          className="brand"
          aria-label="CHPX home"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          <img src="/assets/logo-full.png" alt="CHOPPEDSTYX" className="brand-logo" width={90} height={40} />
        </a>

        <nav className={`site-nav${menuOpen ? " open" : ""}`} id="site-nav">
          <a
            href="#top"
            className={`nav-link${activeSection === "" ? " active" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Home
          </a>
          {navLinks.map((link) => {
            const isActive = link.href === `#${activeSection}`;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link${isActive ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
