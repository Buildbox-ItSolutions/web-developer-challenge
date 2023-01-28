import styled from "styled-components";

export const ContainerMain = styled.main`
	background-color: #343434;
	display: flex;
	justify-content: center;
	height: calc(100vh - 90px);
`;

export const ContainerForm = styled.form`
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
