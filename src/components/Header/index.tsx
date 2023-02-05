import { Container } from "./styles";
import Logo from "../../assets/bx-logo.png";

export const Header = () => {
  return (
    <Container>
      <img className="Logo" src={Logo} alt="Logotipo da Buildbox" />
    </Container>
  );
};
