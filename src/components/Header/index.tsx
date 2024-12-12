import { HeaderContainer, LogoImg } from "./styles";
import logo from "../../assets/bx-logo.png";
export function Header(props:any) {
    return (
    <HeaderContainer {...props} className="d-flex justify-content-center align-items-center w-100">
        <LogoImg src={logo}></LogoImg>
    </HeaderContainer>)
}