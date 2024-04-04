import './Main.css';
import photograph from '../../assets/photograph.svg';

function Form() {
	return (
		<form action="">
			<label htmlFor="file-input">
				<input
					name="file"
					id="file-input"
					type="file"
					data-testid="image-input"
				/>
				<img src={photograph} alt="" />
			</label>
			<label htmlFor="name-input">
				<input type="text" id="name-input" data-testid="name-input" />
			</label>
			<label htmlFor="message-input">
				<textarea
					name="message"
					id="message-input"
					data-testid="message-input"
				/>
			</label>
			<button data-testid="discard-button">Descartar</button>
			<button type="submit" data-testid="publish-button">
				Publicar
			</button>
		</form>
	);
}

export default Form;
