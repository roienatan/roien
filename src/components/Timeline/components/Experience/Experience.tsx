import React, { useState } from "react";
import clsx from "clsx";
import { experience } from "../../../../data/experience.ts";
import "./index.scss";

export default function Experience() {
 const [hoveredIndex, setHoveredIndex] = useState<number | null>();

 return (
  <div className="experience-wrapper">
   {experience.map((item, index) => (
    <div
     className={clsx("experience-item", (hoveredIndex === null || hoveredIndex === index) ? "active" : "not-active")}
     onMouseEnter={() => setHoveredIndex(index)}
     onMouseLeave={() => setHoveredIndex(null)}
     onClick={() => window.open(item.link, '_blank')}>

     <div className="experience-time">
      {item.time}
     </div>

     <div className="experience-content">
      <div className={clsx("title", hoveredIndex === index && "active")}>{item.title}</div>
      <p className="description">{item.description}</p>
      <div className="experience-tags">
       {item.tags.map(tag => (<span className="tag">{tag}</span>))}
      </div>
     </div>

    </div>
   ))}
  </div>
 )
}
