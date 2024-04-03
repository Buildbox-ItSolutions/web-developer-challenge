import { Container, Logo } from "./Styles"
import LogoHeader from "../../assets/bx-logo@3x.png";

const Header = () => {
  return (
    <Container>
        <Logo src={LogoHeader} />
    </Container>
  )
}

export default Header