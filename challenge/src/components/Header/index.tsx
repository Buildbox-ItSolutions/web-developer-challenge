import { Navbar, Logo } from './styles'
import logoImg from '../../assets/bx-logo.png'

export function Header() {
  return (
    <Navbar>
      <Logo src={logoImg} />
    </Navbar>
  )
}