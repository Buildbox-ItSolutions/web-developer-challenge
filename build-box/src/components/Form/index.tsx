import { useForm } from './hooks/useForm';
import { useContext } from 'react';
import { Context } from '../Main/context';
import styled from 'styled-components';
import ImageInput from '../ImageInput';
import Trash from '../../assets/images/trash.svg';

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

const StylizedImageContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
`;

const StylizedImage = styled.img`
	cursor: pointer;
	height: 24px;
	margin: 0 0 16px 16px;
	object-fit: contain;
	width: 24px;
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
		setImage,
	} = useForm();
	const { publish } = useContext(Context);

	return (
		<StylizedForm>
			<StylizedImageContainer>
				<ImageInput handleImage={handleImage} image={image} />
				<StylizedImage
					src={Trash}
					alt="Imagem selecionada"
					onClick={() => setImage('')}
				/>
			</StylizedImageContainer>
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
