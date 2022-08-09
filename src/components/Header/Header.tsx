import { Container } from "./styles";
import logo from '../../assets/images/bx-logo.png';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="buildbox web challenge" />
    </Container>
  );
};
