import { HeaderContainer } from "./styles";
import buildboxLogo from '../../assets/bx-logo.svg';

export function Header() {
    return(
        <HeaderContainer>
            <img src={buildboxLogo} alt="buildbox Logo" />
        </HeaderContainer>
    )
}