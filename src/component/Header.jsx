import {HeaderStyle} from '../styles';
import logo from '../assets/img/bx-logo.svg'

export const Header = () => {
    return (
        <HeaderStyle>
            <img src={logo} alt=''/>
        </HeaderStyle>
    )
}
