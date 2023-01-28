import styled from "styled-components";

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 36px;
	border: solid 1px #4b4b4b;
`;

export const IconDelete = styled.img`
	cursor: pointer;
`;
export const ContainerPreview = styled.section`
	display: flex;
	align-items: center;
	width: 100%;
	align-items: center;
	justify-content: center;
	gap: 16px;
`;

export const ContainerImage = styled.article`
	width: 88px;
	height: 88px;
	border-radius: 36px;
	border: solid 1px #4b4b4b;
	background-color: rgba(75, 75, 75, 0);
	position: relative;
`;
