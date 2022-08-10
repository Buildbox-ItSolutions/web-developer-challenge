import { Container } from "./styles";
import logo from '../../assets/images/bx-logo.png';

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="buildbox web challenge" />
    </Container>
  );
};

export default Header;
