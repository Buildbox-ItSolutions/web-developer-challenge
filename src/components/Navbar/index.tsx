import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${(props) => props.theme.navbarHeight};
  background-color: ${(props) => props.theme.gray800};
  border-bottom: 1px solid ${(props) => props.theme.gray900};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Navbar = () => {
  return (
    <Header>
      <img src="/buildbox-logo.svg" />
    </Header>
  );
};

export default Navbar;
