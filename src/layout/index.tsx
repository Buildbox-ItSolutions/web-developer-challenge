import React from 'react';

/* Images */
import Logo from 'assets/images/logo.png';

/* Styles */
import { Container, Header, Content, Image } from './styles';

/* Types */
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header>
        <Image alt="Logo" src={Logo} />
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
