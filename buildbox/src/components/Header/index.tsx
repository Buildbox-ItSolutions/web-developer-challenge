import { HeaderContainer } from "./style";
import logo from "../../assets/bx-logo.svg";
const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
    </HeaderContainer>
  );
};
export default Header;
