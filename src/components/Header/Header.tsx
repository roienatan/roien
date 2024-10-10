import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.tsx"
import DesktopNav from "../DesktopNav/DesktopNav.tsx";
import { useLayout } from "../../contexts/LayoutContext.tsx";
import GitHubIcon from "../../assets/icons/GitHubIcon.tsx";
import LinkedInIcon from "../../assets/icons/LinkedInIcon.tsx";
import { GITHUB, LINKEDIN } from "../../constants.ts";
import "./index.scss"

export default function Header() {
 const { isMobile } = useLayout()

 return (
  <div className="header-wrapper">
   <div className="header-top">
    <h2>Roie Natan</h2>
    <h4>Senior Frontend Engineer</h4>
    <h6>I am passionate about developing end-to-end responsive applications</h6>
    {!isMobile && <DesktopNav />}
   </div>

   <div className="header-bottom">
    <div className="social-wrapper">
     <a href={GITHUB} target="_blank" rel="noreferrer">
      <GitHubIcon />
     </a>
     <a href={LINKEDIN} target="_blank" rel="noreferrer">
      <LinkedInIcon />
     </a>
     <ThemeSwitcher />
    </div>
   </div>
  </div>
 )
}
