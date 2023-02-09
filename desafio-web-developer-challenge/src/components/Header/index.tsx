import { HeaderContent } from "./styles";
import logoImg from '../../assets/bx-logo.svg'

export function Header() {
  return(
    <HeaderContent>
      <img src={logoImg} alt="Logo buildbox" />
    </HeaderContent>
  )
}