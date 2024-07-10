import styled from "styled-components";

export const Main = styled.main`
	display: grid;
	justify-content: center;
	align-items: center;
`;

export const H6 = styled.h6`
	color: ${(props) => props.theme.colors.h6};
	font-size: 16px;
	font-family: ${(props) => props.theme.fonts.main};
	padding: 10px;
`;

export const SpanIcon = styled.span`
	display: flex;
	justify-content: end;
	padding: 10px;
`;

export const Section = styled.section`
	display: grid;
	justify-content: space-around;
	padding: 0px 0px 40px 30px;
	width: 510px;
	height: 220px;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 5px;
	border: 1px solid ${(props) => props.theme.colors.border};
	margin-bottom: 18px;
`;

export const Div = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

export const Img = styled.img`
	border-radius: 30%;
	width: 94px;
	height: 89px;
	border: 1px solid ${(props) => props.theme.colors.border};
`;

export const P = styled.p`
	width: 314px;
	height: 78px;
	color: ${(props) => props.theme.colors.feedText};
	font-family: ${(props) => props.theme.fonts.main};
`;

export const DivSended = styled.div`
	display: grid;
	place-items: flex-start;
	margin-left: 28%;
	color: ${(props) => props.theme.colors.feedText};
	font-family: ${(props) => props.theme.fonts.main};
`;

export const PSended = styled.p`
	font-size: ${(props) => props.theme.fontSizes.small};
`;
