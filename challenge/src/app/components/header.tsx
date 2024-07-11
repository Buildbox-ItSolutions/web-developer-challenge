import styled from 'styled-components';

export const Header = () => {
	return (
		<HeaderContainer>
			oii
		</HeaderContainer>
	);
};
const HeaderContainer = styled.header`
	background: ${({theme})=> theme.colors.gray900}
`;
