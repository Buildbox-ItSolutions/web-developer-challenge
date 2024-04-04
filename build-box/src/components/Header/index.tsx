import './Header.css';
import BxLogo from '../../assets/images/bx-logo.svg';

function Header() {
	return (
		<header>
			<img src={BxLogo} className="header" alt="buildbox web challenge logo" />
		</header>
	);
}

export default Header;
