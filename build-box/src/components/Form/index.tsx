import './Form.css';
import photograph from '../../assets/images/photograph.svg';
import { useForm } from './hooks/useForm';
import { useContext } from 'react';
import { Context } from '../Main/context';

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
		<form action="">
			<label htmlFor="file-input">
				<input
					name="file"
					id="file-input"
					type="file"
					data-testid="image-input"
					onChange={({ target: { files } }) => handleImage(files)}
					hidden
				/>
				{!image ? (
					<img
						src={photograph}
						alt="square with two mountains and a sun drawn"
					/>
				) : (
					<img src={image} alt="" />
				)}
			</label>
			<label htmlFor="author-input">
				<input
					type="text"
					id="author-input"
					data-testid="author-input"
					onChange={({ target: { value } }) => setAuthor(value)}
					value={author}
				/>
			</label>
			<label htmlFor="message-input">
				<textarea
					name="message"
					id="message-input"
					data-testid="message-input"
					onChange={({ target: { value } }) => setMessage(value)}
					value={message}
				/>
			</label>
			<button
				type="submit"
				data-testid="discard-button"
				onClick={(e) => discard(e)}
			>
				Descartar
			</button>
			<button
				type="submit"
				data-testid="publish-button"
				onClick={(e) => {
					publish(e, image, author, message);
					discard(e);
				}}
			>
				Publicar
			</button>
		</form>
	);
}

export default Form;
