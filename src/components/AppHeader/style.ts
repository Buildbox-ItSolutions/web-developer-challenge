import styled from "styled-components";

export const Header = styled.header`
	display: grid;
	place-items: center;
	background-color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.main};
	height: 92px;
	padding: 20px 0px;
`;

export const H2 = styled.h2`
	color: ${(props) => props.theme.colors.h1};
`;
export const H3 = styled.h3`
	font-size: ${(props) => props.theme.fontSizes.small};
	font-weight: 400;
	color: ${(props) => props.theme.colors.h3};
`;
