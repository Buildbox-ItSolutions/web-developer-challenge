import { HeaderContainer } from "./Header"
import logo from "../../assets/bx-logo.svg"

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo buildbox web challenge" />
    </HeaderContainer>
  )
}

export default Header