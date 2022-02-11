import React from "react";

import { Container } from "./styles";
import bxLogoSmall from "../../assets/images/bx-logo.png"
import bxLogoMiddle from "../../assets/images/bx-logo@2x.png"
import bxLogoLarge from "../../assets/images/bx-logo@3x.png"
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";

function Header(props: any) {
  const { height } = useWindowDimensions();
  const bxLogo = height > 1800 ? bxLogoLarge : height > 1400 ? bxLogoMiddle : bxLogoSmall;

  return (
    <Container>
      <img src={bxLogo} alt="" />
    </Container>
  );
}

export default Header;
