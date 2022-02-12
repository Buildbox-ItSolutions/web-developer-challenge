import logo from "../../assets/images/logo.svg";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="buildbox web challenge" />
    </Container>
  );
};
