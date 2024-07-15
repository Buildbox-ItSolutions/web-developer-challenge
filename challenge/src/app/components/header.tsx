import styled from 'styled-components';

export const Header = () => {
	return (
		<HeaderContainer>
			<div>
				<h1>Buildbox</h1>
				<h2>WEB CHALLENGE</h2>
			</div>
		</HeaderContainer>
	);
};


const HeaderContainer = styled.header`
	background: ${({ theme }) => theme.colors.gray900};
	border-bottom: ${({ theme }) => theme.colors.gray999} solid 2px;
	padding:20px;
	position: fixed;
	min-width: 100vw;
	z-index: 100;

	h1{
		color: ${({ theme }) => theme.colors.green};
		font-size: 1.5rem;
	}
	h2{
		color: ${({ theme }) => theme.colors.gray500};
		font-weight: 300;
		font-size: 0.72rem;
	}
	div{
		align-items: center;
		display: flex;
		flex-direction: column;
	}
`;
