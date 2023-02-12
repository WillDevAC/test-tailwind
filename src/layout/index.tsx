import React from "react";
import { useMediaQuery } from "react-responsive";
import { HeaderMobile } from "../components/Header";
import { HeaderDesktop } from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  return (
    <>
      { isMobile ? <HeaderMobile /> : <HeaderDesktop /> }
      { children }
    </>
  );
};
