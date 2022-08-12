import { Container } from "./styles";
import logo from 'src/assets/images/bx-logo.png';

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="buildbox web challenge" />
    </Container>
  );
};

export default Header;
