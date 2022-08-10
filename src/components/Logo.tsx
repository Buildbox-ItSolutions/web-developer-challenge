import React from "react";
import styled from "styled-components";

const LogoImage = styled.img`
  width: 103px;
  height: 45px;
  object-fit: contain;
`;

const Logo = () => <LogoImage src="/logo.png" alt="logo" />;

export default Logo;
