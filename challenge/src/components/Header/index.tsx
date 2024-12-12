import { HeaderBox } from "./style";
import Logo from '../../assets/bx-logo.png'

const Header = () => {
  return (
    <>
      <HeaderBox>
        <img src={Logo} alt="" />
      </HeaderBox>
    </>
  )
}

export default Header;