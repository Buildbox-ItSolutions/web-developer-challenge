import BXLogo from '../../assets/bx-logo.png';
import { Container } from './styles';

const Header = () => {
    return (
        <Container>
            <img src={BXLogo} alt="BuildBox logo" />
        </Container>
    );
};

export default Header;
