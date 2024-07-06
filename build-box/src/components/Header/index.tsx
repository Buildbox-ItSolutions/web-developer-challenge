import BxLogo from '../../assets/images/bx-logo.svg';
import styled from 'styled-components';

const StylizedHeader = styled.header`
	align-items: center;
	background-color: #2b2b2b;
	display: flex;
	height: 93px;
	justify-content: center;
	position: fixed;
	width: 100vw;
`;

const StylizedLogo = styled.img`
	height: 45px;
	object-fit: contain;
	width: 103px;
`;

function Header() {
	return (
		<StylizedHeader>
			<StylizedLogo
				src={BxLogo}
				className="header"
				alt="buildbox web challenge logo"
			/>
		</StylizedHeader>
	);
}

export default Header;
