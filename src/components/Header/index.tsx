import { Container } from './styles';

import bxLogo from '../../assets/images/bx-logo.svg';

export function Header() {
  return (
    <Container>
      <img src={bxLogo} alt="Logo da empresa" />
    </Container>
  );
};
