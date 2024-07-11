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
	padding:25px;
	h1{
		color: ${({ theme }) => theme.colors.green};
		font-size: 2rem;
	}
	h2{
		color: ${({ theme }) => theme.colors.gray600};
		font-weight: 300;
		font-size: 1rem;
	}
	div{
		align-items: center;
		display: flex;
		flex-direction: column;
	}
`;
