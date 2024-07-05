import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid ${({ theme }) => theme.colors.background.lighter};
	border-radius: ${({ theme }) => theme.base.borderRadius.xLarge};
	width: 100px;
	height: 100px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: ${({ theme }) => theme.base.borderRadius.xLarge};
	}
`;

export const IconContainer = styled.div`
	svg {
		color: ${({ theme }) => theme.colors.background.lighter};
	}
`;
