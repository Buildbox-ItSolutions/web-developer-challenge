import { useForm } from './hooks/useForm';
import { useContext } from 'react';
import { Context } from '../Main/context';
import styled from 'styled-components';
import ImageInput from '../ImageInput';

const StylizedForm = styled.form`
	align-items: center;
	background-color: #313131;
	border-radius: 3px;
	border: solid 1px #3b3b3b;
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: auto;
	margin-top: 145px;
	padding: 24px;
	width: 516px;

	@media screen and (max-width: 515px) {
		width: calc(100% - 24px);
	}
`;

const StylizedTextInput = styled.input`
	background-color: #494949;
	border: none;
	border-radius: 8px;
	color: white;
	font-family: 'roboto', 'sans-serif';
	font-size: 14px;
	height: 40px;
	margin-bottom: 8px;
	outline: none;
	padding: 12px 16px;
	width: 468px;
	::placeholder {
		color: #999999;
	}
	@media screen and (max-width: 515px) {
		width: 100%;
	}
`;

const StylizedTextArea = styled.textarea`
	background-color: #494949;
	border: none;
	border-radius: 8px;
	color: white;
	font-family: 'roboto', 'sans-serif';
	font-size: 14px;
	height: 80px;
	outline: none;
	padding: 12px 16px;
	resize: none;
	width: 468px;
	&::placeholder {
		color: ##9f9f9f;
	}
	&::-webkit-scrollbar {
		width: 2px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #000;
		border-radius: 20px;
	}
	@media screen and (max-width: 515px) {
		width: 100%;
	}
`;

const StylizedDischargeButton = styled.span`
	color: #5f5f5f;
	cursor: pointer;
	font-family: 'roboto', 'sans-serif';
	font-size: 14px;
	font-stretch: normal;
	font-style: normal;
	font-weight: normal;
	height: 17px;
	letter-spacing: normal;
	line-height: 1.29;
	margin: 12px 24px 12px 0;
	text-align: center;
	width: 60px;
`;

const StylizedPublishButton = styled.button`
	background: #5f5f5f;
	border: none;
	border-radius: 8px;
	color: #313131;
	cursor: pointer;
	height: 41px;
	font-family: 'roboto', 'sans-serif';
	line-height: 1.29;
	font-size: 14px;
	font-stretch: normal;
	font-style: normal;
	font-weight: normal;
	letter-spacing: normal;
	margin: 0 8px 0 24px;
	outline: none;
	padding: 12px 24px;
	text-align: center;
	width: 98px;
`;

const StylizedButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 24px 24px;
	width: 100%;
`;

function Form() {
	const {
		image,
		message,
		author,
		setMessage,
		setAuthor,
		discard,
		handleImage,
	} = useForm();
	const { publish } = useContext(Context);

	return (
		<StylizedForm>
			<ImageInput handleImage={handleImage} image={image} />
			<StylizedTextInput
				type="text"
				id="author-input"
				data-testid="author-input"
				placeholder="Digite seu nome"
				onChange={({ target: { value } }) => setAuthor(value)}
				value={author}
			/>
			<StylizedTextArea
				name="message"
				id="message-input"
				placeholder="Mensagem"
				data-testid="message-input"
				onChange={({ target: { value } }) => setMessage(value)}
				value={message}
			/>
			<StylizedButtonsContainer>
				<StylizedDischargeButton
					data-testid="discard-button"
					onClick={(e) => discard(e)}
				>
					Descartar
				</StylizedDischargeButton>
				<StylizedPublishButton
					type="submit"
					data-testid="publish-button"
					onClick={(e) => {
						publish(e, image, author, message);
						discard(e);
					}}
				>
					Publicar
				</StylizedPublishButton>
			</StylizedButtonsContainer>
		</StylizedForm>
	);
}

export default Form;
