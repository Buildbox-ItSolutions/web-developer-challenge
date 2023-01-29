import styled from "styled-components";
import React from "react";
interface IButtonSubmit {
	completedForm: boolean;
	type: string;
}
interface ISubmit {
	onSubmit: (event: React.FormEvent) => void;
}
export const ContainerMain = styled.main`
	background-color: #343434;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	min-height: calc(100vh - 90px);
	padding-bottom: 50px;
`;

export const ContainerForm = styled.form<ISubmit>`
	width: 516px;
	height: 353px;
	padding: 24px;
	border-radius: 3px;
	border: solid 1px #3b3b3b;
	background-color: #313131;
	margin-top: 40px;
`;
export const ContainerPhoto = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;
export const InputFile = styled.input`
	width: 88px;
	height: 88px;
	padding: 32px;
	object-fit: contain;
	border-radius: 36px;
	border: solid 1px #4b4b4b;
	background-color: rgba(75, 75, 75, 0);
	cursor: pointer;
	opacity: 0;
	position: absolute;
`;
export const Photo = styled.div``;
export const ContainerInputs = styled.section`
	display: flex;
	flex-direction: column;
	gap: 18px;
`;

export const Input = styled.input`
	font-family: Roboto;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.29;
	letter-spacing: normal;
	text-align: left;
	color: #fff;
	font-size: 1.1em;
	padding: 0px 10px;
	border-radius: 8px;
	background-color: #494949;
	outline: none;
	border: none;
	::placeholder {
		font-family: Roboto;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: 1.29;
		letter-spacing: normal;
		text-align: left;
		color: #9f9f9f;
		font-size: 0.9em;
	}
`;

export const InputName = styled(Input)`
	width: 100%;
	height: 40px;
`;

export const InputMessage = styled(Input)`
	width: 100%;
	height: 80px;
`;
export const IconImage = styled.img`
	cursor: pointer;
	color: red;
`;

export const LabelInputFile = styled.label`
	width: 88px;
	height: 88px;
	padding: 32px;
	object-fit: contain;
	border-radius: 36px;
	border: solid 1px #4b4b4b;
	background-color: rgba(75, 75, 75, 0);
	position: relative;
`;

export const ConteinerButtons = styled.div`
	width: 100%;
	display: flex;
	margin-top: 12px;
	align-items: center;
	justify-content: flex-end;
`;
export const ButtonReset = styled.div`
	cursor: pointer;
	outline: none;
	background-color: transparent;
	border: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-touch-callout: none;
	user-select: none;
	color: #5f5f5f;
`;
export const ButtonSubmit = styled.button<IButtonSubmit>`
	outline: none;
	border: none;
	width: 98px;
	height: 41px;
	margin: 0 0 0 24px;
	padding: 12px 24px;
	object-fit: contain;
	border-radius: 8px;
	background-color: ${({ completedForm }) =>
		completedForm ? "#71bb00" : "#5f5f5f"};
	font-family: Roboto;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.29;
	letter-spacing: normal;
	text-align: center;
	color: #313131;
	cursor: pointer;
`;
