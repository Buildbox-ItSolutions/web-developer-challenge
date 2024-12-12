import { Container } from './styles';
import BxLogo from '../../assets/bx-logo.svg';

export const TopBar = () => {
  return (
    <Container>
      <img src={BxLogo} alt="Logo Buildbox" />
    </Container>
  );
};
