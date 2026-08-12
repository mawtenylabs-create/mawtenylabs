import { useRef, useEffect, useState } from "react";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  animate?: boolean;
};

function Section({ children, className = "", animate = true, ...props }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(!animate);

  useEffect(() => {
    if (!animate) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after triggering once
          observer.disconnect();
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of the section is visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animate]);

  return (
    <section
      ref={sectionRef}
      className={`py-12 lg:py-16 ${animate ? 'transition-all duration-700' : ''} ${animate && !isVisible ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        } ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;