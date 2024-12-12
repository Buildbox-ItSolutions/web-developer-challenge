import React from 'react';

import logo from "../../assets/bx-logo.svg";

import { Container, ImgLogo } from './styles';

interface Props {

};

const Header: React.FC<Props> = () => (
  <Container>
    <ImgLogo src={logo} alt='logo' />
  </Container>
);

export default Header;
