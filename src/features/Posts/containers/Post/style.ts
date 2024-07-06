import styled from "styled-components";

export const DeleteButton = styled.button`
	background-color: transparent;
	padding: 0.25rem;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	border: 1px solid ${({ theme }) => theme.colors.danger.primary};

	svg {
		color: ${({ theme }) => theme.colors.danger.primary};
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.danger.hover};
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 2rem;
	width: 100%;
	height: 100%;
`;

export const ImageContainer = styled.div`
	display: flex;
	align-items: start;
	justify-content: center;
	width: 150px;
	height: 100%;

	img {
		width: 100%;
		height: 100px;
		border-radius: 2rem;
	}
`;

export const PostContainer = styled.div`
	display: flex;
	align-items: start;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
`;

export const PostMessage = styled.p`
	color: ${({ theme }) => theme.colors.text.primary};
`;

export const PostOwnerContainer = styled.div`
	display: flex;
	align-items: start;
	justify-content: center;
	flex-direction: column;
	gap: ${({ theme }) => theme.base.spacing.small};
`;

export const SendBy = styled.span`
	color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const OwnerName = styled.span`
	color: ${({ theme }) => theme.colors.text.secondary};
`;
