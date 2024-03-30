import BuildBoxImg from "../../../assets/img/bx-logo.png";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <img src={BuildBoxImg} />
    </StyledHeader>
  );
}

export default Header;
