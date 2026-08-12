import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // If we're at the very top of the page, default to the first section (home)
    const handleScroll = () => {
      if (window.scrollY < 100 && sectionIds.length > 0) {
        setActiveId(sectionIds[0]);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most intersecting element
        let maxRatio = 0;
        let mostIntersectingId = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostIntersectingId = entry.target.id;
          }
        });

        if (mostIntersectingId) {
          setActiveId(mostIntersectingId);
        }
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`, // Adjust root margin to trigger when section reaches top part of viewport
        threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds for accurate tracking
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds, offset]);

  return activeId;
}
