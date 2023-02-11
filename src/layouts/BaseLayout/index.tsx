import { PropsWithChildren } from 'react';
import logo from '../../assets/logo.png';
import { Body, Header, LayoutWrapper, Logo } from './styles';

function BaseLayout({ children }: PropsWithChildren) {
  return (
    <LayoutWrapper>
      <Header>
        <Logo src={logo} alt="Buildbox web challenge" />
      </Header>
      <Body>{children}</Body>
    </LayoutWrapper>
  );
}

export default BaseLayout;
