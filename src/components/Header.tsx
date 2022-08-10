import React, { ReactElement } from "react";
import styled from "styled-components";

const Head = styled.header`
  width: 100%;
  height: 93px;
  background-color: #2b2b2b;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Header = ({ children }: { children: ReactElement }) => (
  <Head>{children}</Head>
);

export default Header;
