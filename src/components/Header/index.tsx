import Logo from "../../assets/bx-logo.png";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <img src={Logo} />
    </Container>
  );
};
