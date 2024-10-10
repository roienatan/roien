import React from "react";
import { useTheme } from "../../contexts/ThemeContext.tsx";
import ContrastIcon from "../../assets/icons/ContrastIcon.tsx";
import "./index.scss";

export default function ThemeSwitcher() {
 const { toggleTheme } = useTheme()

 return (
  <div className="theme-switcher-wrapper" onClick={toggleTheme}>
   <ContrastIcon />
  </div>
 )
}