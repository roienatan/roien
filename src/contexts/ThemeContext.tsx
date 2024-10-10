import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextProps {
 theme: Theme;
 toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

interface ThemeProviderProps {
 children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
 const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
 const [theme, setTheme] = useState<Theme>(prefersDark ? "dark" : "light");

 useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
 }, [theme]);

 const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
 };

 return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
   {children}
  </ThemeContext.Provider>
 );
}

export const useTheme = (): ThemeContextProps => {
 const context = useContext(ThemeContext)
 if (!context) {
  throw new Error('useTheme must be used within a ThemeProvider');
 }
 return context;
}
