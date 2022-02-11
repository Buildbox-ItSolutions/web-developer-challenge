import React from "react";
import styled from "styled-components";

import Logo from "../assets/images/logo.png";

const HeaderSty = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-gray-900);
  box-shadow: 0 1px 1px #232323;

  img {
    max-width: 103px;
    margin-block: 1.45rem;
  }
`;

const Header = () => {
  return (
    <HeaderSty>
      <img src={Logo} alt="" />
    </HeaderSty>
  );
};

export default Header;
