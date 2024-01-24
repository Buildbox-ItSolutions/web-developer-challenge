import * as React from "react";
import * as Head from "./header.style";
import Logo from "../../assets/bx-logo.svg";

const Header: React.FunctionComponent = () => {
  return (
    <Head.Container>
      <Head.Image src={Logo} alt="Buildbox web challenge"/>
    </Head.Container>
  );
};

export default Header;
