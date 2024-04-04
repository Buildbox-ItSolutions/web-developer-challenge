import './Form.css';
import photograph from '../../assets/photograph.svg';
import { useForm } from './hooks/useForm';

function Form() {
	const {
		image,
		message,
		name,
		setImage,
		setMessage,
		setName,
		discard,
		publish,
	} = useForm();
	return (
		<form action="">
			<label htmlFor="file-input">
				<input
					name="file"
					id="file-input"
					type="file"
					data-testid="image-input"
					onChange={({ target: { value } }) => setImage(value)}
					value={image}
				/>
				<img src={photograph} alt="" />
			</label>
			<label htmlFor="name-input">
				<input
					type="text"
					id="name-input"
					data-testid="name-input"
					onChange={({ target: { value } }) => setName(value)}
					value={name}
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
				onClick={(e) => publish(e)}
			>
				Publicar
			</button>
		</form>
	);
}

export default Form;
