import styled from "styled-components";

export const InputBoxStyled = styled.div`
	width: 100%;
	height: fit-content;
	padding: 25px;
	background-color: #313131;

	.input-container {
		gap: 10px;
		width: 100%;
		display: flex;
		height: fit-content;
		flex-direction: column;

		.input {
			min-height: 37px;
			padding: 7px 15px;
			font-size: 0.9rem;
			border-radius: 6px;
			background-color: #494949;
		}

		textarea {
			height: 80px;
			resize: none;
		}
	}

	.button-container {
		gap: 20px;
		width: 100%;
		display: flex;
		justify-content: flex-end;

		.descartar {
			font-size: 0.8rem;
			text-decoration: underline;
			color: rgba(255, 255, 255, 0.3);
		}

		.publicar {
			font-size: 0.8rem;
			padding: 9px 20px;
			border-radius: 6px;
			background-color: #71bb00;
		}

		.publicar-disabled {
			color: #313131;
			font-size: 0.8rem;
			padding: 9px 20px;
			border-radius: 6px;
			background-color: #5f5f5f;
		}
	}

	.image-container {
		gap: 10px;
		width: 100%;
		height: 90px;
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;

		.image {
			width: 90px;
			height: 90px;
			display: flex;
			position: relative;
			align-items: center;
			border-radius: 35px;
			justify-content: center;
			border: 1px solid #494949;

			& > button {
				right: -30px;
				position: absolute;
			}
		}
	}

	form {
		gap: 30px;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.file-input {
		display: none;
	}

	.image-label {
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 100%;
		height: 100%;
	}

	.selected-image {
		top: 0;
		left: 0;
		z-index: 0;
		width: 90px;
		height: 90px;
		border-radius: 35px;
		object-fit: cover;
		position: absolute;
	}
`;
