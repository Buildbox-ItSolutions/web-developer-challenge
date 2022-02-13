import { StyledHeader, StyledNav } from './styles';
import LogoImg from '../../images/bx-logo.png'


const Nav = () => {

    const Logo = (
        <a href="/" className="logo">
            <img src={LogoImg} alt="Logo"/>
        </a>
    )

    return(
        <StyledHeader>
            <StyledNav>
                {Logo}
            </StyledNav>
        </StyledHeader>
    )
}

export default Nav;