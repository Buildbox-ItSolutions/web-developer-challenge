import React from "react";
import styled from "@emotion/styled";

import logo from '../../assets/img/logo.png';

export const Header = () => {
  const { Container } = Header
 
  return (
    <>
<Container>

<img style={{ objectFit: 'contain' }} src={logo} />



  </Container>

  </>
  )
}
Header.Container = styled.div`
  background-color: #2b2b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
`
