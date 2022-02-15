import { HeaderContainer } from './styles'
import logo from '../../../assets/bx-logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <a href="'/'">
        <img src={logo} alt="Buildbox Web Challenge" />
      </a>
    </HeaderContainer>
  )
}
