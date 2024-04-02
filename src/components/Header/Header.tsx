import React from "react";
import logoSVG from "../../assets/bx-logo.svg";
import { HeaderContainer, Logo } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logoSVG} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
