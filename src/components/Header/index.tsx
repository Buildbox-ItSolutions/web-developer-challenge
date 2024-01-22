import * as React from "react";
import { HeaderContainer } from "./header.style";
import Logo from "../../assets/bx-logo.svg?react";

const Header: React.FunctionComponent = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
