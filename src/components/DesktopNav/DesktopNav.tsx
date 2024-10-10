import React from "react";
import clsx from "clsx";
import { LINKS } from "../../constants.ts";
import { useLayout } from "../../contexts/LayoutContext.tsx";
import "./index.scss";

export default function DesktopNav() {
 const { activeSection } = useLayout()

 return (
  <nav className="desktop-nav-wrapper">
   {LINKS.map((link) => (
    <a
     key={link}
     href={`#${link}`}
     className={clsx("link", activeSection === link && "active")}
    >
     {link}
    </a>
   ))}
  </nav>
 )
}
