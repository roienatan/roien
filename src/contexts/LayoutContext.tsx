import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MOBILE_BREAKPOINT, LINKS } from '../constants.ts';

interface LayoutContextProps {
  isMobile: boolean;
  activeSection: string;
  setActiveSection:(section: string) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= MOBILE_BREAKPOINT);
  const [activeSection, setActiveSection] = useState<string>(LINKS[0]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <LayoutContext.Provider value={{ isMobile, activeSection, setActiveSection }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = (): LayoutContextProps => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
