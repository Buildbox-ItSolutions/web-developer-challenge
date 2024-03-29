import { Container, Logo } from "./styles";
import LogoImage from '../../assets/bx-logo.png'

export default function Header() {
  return (
    <Container>
      <Logo src={LogoImage} />
    </Container>
  )
}