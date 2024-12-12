import { HeaderContainer } from './style'
import logoImg from '../../assets/bx-logo@3x.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Logotipo buildbox web challenge" />
    </HeaderContainer>
  )
}
