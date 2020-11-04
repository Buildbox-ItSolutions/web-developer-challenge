import React from "react";

import { AppHeader, AppHeaderContainer } from "./styles";

import BxLogo from "../../assets/bx-logo.png";
import BxLogo2x from "../../assets/bx-logo@2x.png";
import BxLogo3x from "../../assets/bx-logo@3x.png";

const Header = () => {
  return (
    <AppHeader>
      <AppHeaderContainer>
        <img
          src={BxLogo}
          alt="BuildBox Web Challenge"
          srcSet={`${BxLogo2x} 2x, ${BxLogo3x} 3x,`}
        />
      </AppHeaderContainer>
    </AppHeader>
  );
};

export default Header;
