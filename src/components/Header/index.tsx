import React from "react";

// IMAGES
import BxLogo from "../../images/Header/bx-logo.png";
// STYLES
import Container from "./styles";

const Header = () => {
  return (
    <Container>
      <img src={BxLogo} className="bx-logo" alt="Logo" />
    </Container>
  );
};

export default Header;
