import { useEffect, useState } from "react";

// A custom hook: a reusable function starting with "use" that packages up
// some stateful behavior. This one watches which section is currently in
// view and returns its id, so the header can highlight the matching nav
// link — the same job our old script.js did with IntersectionObserver,
// just written once here and usable by any component.

export function useScrollSpy(sectionIds: string[]): string {
  // Starts empty (no nav link highlighted) rather than defaulting to the
  // first section — otherwise "About CHPX" would appear active immediately
  // on load while the user is still sitting in the hero, before they've
  // scrolled into any section at all.
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Tracks every section currently inside the "active" band of the
    // viewport. Previously we only ever *set* activeId when a section
    // entered that band, never cleared it when one left — so scrolling
    // back up past "About" into the hero left "About CHPX" highlighted
    // forever. Now we keep a live set of what's visible and recompute.
    const visibleIds = new Set<string>();

    const updateActiveId = () => {
      const current = sectionIds.find((id) => visibleIds.has(id));
      if (current) {
        setActiveId(current);
        return;
      }
      // Nothing tracked is intersecting. If we're scrolled above the very
      // first section (still in the hero), clear the highlight instead of
      // leaving the last-active link stuck on. If we're below the last
      // section instead (e.g. past Contact, into the footer), leave the
      // previous activeId as-is.
      const firstSection = document.getElementById(sectionIds[0]);
      if (firstSection && firstSection.getBoundingClientRect().top > 0) {
        setActiveId("");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        });
        updateActiveId();
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
