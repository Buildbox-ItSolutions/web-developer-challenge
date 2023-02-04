import { HeaderContainer } from './styles'

import buildboxLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={buildboxLogo} alt="Logotipo buildbox" />
    </HeaderContainer>
  )
}