import styled, { css } from 'styled-components';
import picture from '../../assets/picture.png';

export const AppForm = styled.form`
	align-items: center;
	background-color: var(--cinzaEscuro);
	border-radius: 7px;
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	padding: 15px 25px;
	width: 40%;

	label {
		background: url(${picture});
		background-position: center;
		background-repeat: no-repeat;
		border: 1px solid var(--cinza);
		border-radius: 40%;
		cursor: pointer;
		padding: 40px;
		margin-bottom: 15px;
		transition: 0.25s all ease-in-out;

		&:hover {
			box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
				rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
				rgba(0, 0, 0, 0.09) 0px 16px 8px,
				rgba(0, 0, 0, 0.09) 0px 32px 16px;
		}
	}

	input[type='file'] {
		display: none;
	}
`;

const defaultInput = css`
	box-sizing: border-box;
	background-color: var(--cinza);
	border: none;
	border-radius: 8px;
	color: #fff;
	padding: 10px 20px;
	width: 100%;

	&:focus {
		outline: none;
	}
`;

export const NameInput = styled.input`
	${defaultInput}
	margin-bottom: 10px;
`;

export const MessageInput = styled.textarea`
	${defaultInput}
	resize: none;
`;

const defaultButton = css`
	border: none;
	cursor: pointer;
	padding: 10px 20px;
`;

export const ActionButtons = styled.div`
	align-self: flex-end;
	margin-top: 30px;

	button:nth-child(1) {
		${defaultButton}
		background: none;
		color: #959595;
		text-decoration: underline;
	}

	button:nth-child(2) {
		${defaultButton}
		background-color: #5f5f5f;
		border-radius: 7px;
		color: var(--headerBg);
	}
`;
