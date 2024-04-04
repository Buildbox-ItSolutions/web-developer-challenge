import React from 'react';
import './Header.css';
import BxLogo from '../../assets/bx-logo.svg';

function Header() {
	return (
		<header>
			<img src={BxLogo} className="header" alt="buildbox web challenge logo" />
		</header>
	);
}

export default Header;
