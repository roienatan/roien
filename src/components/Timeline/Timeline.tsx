import React, { useEffect, useRef } from "react";
import { LINKS } from "../../constants.ts";
import { useLayout } from "../../contexts/LayoutContext.tsx";
import Experience from "./components/Experience/Experience.tsx";
import "./index.scss"

const INTERSECTION_OBSERVER_THRESHOLD = 0.3;

export default function Timeline() {
 const { setActiveSection, isMobile } = useLayout()
 const sectionRefs = useRef<HTMLDivElement[]>([]);

 useEffect(() => {
  const currentSectionRefs = sectionRefs.current;

  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      setActiveSection(entry.target.id);
     }
    });
   },
   { threshold: INTERSECTION_OBSERVER_THRESHOLD }
  );

  currentSectionRefs.forEach((section) => {
   if (section) observer.observe(section);
  });

  return () => {
   currentSectionRefs.forEach((section) => {
    if (section) observer.unobserve(section);
   });
  };
 }, [setActiveSection]);

 return (
  <div className="timeline-wrapper">
   <div className="timeline-content">
    {LINKS.map((section, index) => (
     <div
      key={section}
      id={section}
      ref={(el) => (sectionRefs.current[index] = el!)}
      className="section"
     >
      {isMobile && <div className="sticky-title">{section}</div>}
      <div className="section-content">
       {section === "about" && (
        <p>
         I'm a Front-End Web Developer with six years of experience in the technology field.
         I’ve worked with organizations ranging from large enterprises to innovative startups,
         primarily in remote settings. My expertise includes creating responsive,
         user-focused websites and applications using modern technologies.<br /><br />

         I value workplaces where each developer can bring their own unique approach to problem-solving, fostering innovation and creativity within teams.
         Having worked across different time zones, I enjoy collaborating with diverse teams and gaining fresh perspectives from people around the world.
         This remote experience has broadened my understanding of various problem-solving methods and ideas.<br /><br />

         Outside of work, I enjoy traveling and capturing moments through photography, combining my love for exploration with creativity.
        </p>
       )}
       {section === "experience" && <Experience />}
       {section === "more" && (
        <div>
          WIP...
        </div>
       )}
      </div>
     </div>
    ))}
   </div>
  </div>
 )
}
