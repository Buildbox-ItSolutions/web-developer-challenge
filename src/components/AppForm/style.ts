import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px 0px;
`;

export const Form = styled.form`
	display: grid;
	place-items: center;
	height: 360px;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 5px;
	border: 2px solid ${(props) => props.theme.colors.border};
	padding: 35px;

	@media (width <= 576px) {
		width: 400px;
	}
`;

export const DivMain = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const Div = styled.div`
	display: grid;
	place-items: center;
	width: 94px;
	height: 89px;
	border: 1px solid ${(props) => props.theme.colors.border};
	border-radius: 30%;
`;

export const Img = styled.img`
	height: 21px;
	border-radius: 30%;
	border: none;
	outline: none;
	position: absolute;
	width: 94px;
	height: 89px;
`;

export const InputImg = styled.input`
	opacity: 0;
	position: absolute;
	cursor: pointer;
`;

export const InputName = styled.input`
	width: 100%;
	height: 40px;
	padding: 0px 17px 0px 17px;
	border: none;
	border-radius: 10px;
	background-color: ${(props) => props.theme.colors.input};
	color: ${(props) => props.theme.colors.text};

	&:focus {
		outline: none;
		box-shadow: none;
		border-color: inherit; /* Mantém a cor da borda sem alterar */
	}
`;

export const InputMessage = styled.textarea`
	width: 100%;
	height: 80px;
	border: none;
	background-color: ${(props) => props.theme.colors.input};
	border-radius: 10px;
	padding: 17px 17px 0px 17px;
	line-height: 1;
	color: ${(props) => props.theme.colors.text};
	resize: none;
	font-family: ${(props) => props.theme.fonts.main};

	&:focus {
		outline: none;
		box-shadow: none;
		border-color: inherit; /* Mantém a cor da borda sem alterar */
	}
`;

export const Nav = styled.nav`
	display: flex;
	width: 90%;
	justify-content: end;
	gap: 10px;
`;

export const PublishBtn = styled.button`
	width: 98px;
	height: 40px;
	border-radius: 10px;
	border: none;
	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) => props.theme.colors.button};
	cursor: pointer;

	&:disabled {
		background-color: ${(props) => props.theme.colors.disabled};
		color: ${(props) => props.theme.colors.disabledText};
		cursor: not-allowed;
	}
`;

export const DiscardBtn = styled.button`
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	text-decoration: underline;
	color: ${(props) => props.theme.colors.discardButton};
	&:disabled {
		cursor: not-allowed;
	}
`;
