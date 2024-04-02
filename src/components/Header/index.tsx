import { HeaderContainer } from "./style";
import logo from '../../assets/buildbox.svg'
export function Header() {
  return (
    <HeaderContainer>
      <img src={ logo } alt="" />
    </HeaderContainer>
  )
}