import { useState, ChangeEvent } from "react";
import { Button } from "../../../../components/Button";
import { Cards } from "../../../../components/Cards";
import { ImageInput } from "../../../../components/ImageInput";
import { Input } from "../../../../components/Input";
import { Textarea } from "../../../../components/Textarea";
import { FormContainer } from "./style";

export function SubmitPost() {
	const [postPhoto, setPostPhoto] = useState<File | null>(null);
	const [name, setName] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
		const files = event.target.files;
		if (!files?.length) {
			return;
		}

		setPostPhoto(files[0]);
	}

	function submitPost() {
		if (!postPhoto || !name || !message) {
			return;
		}

		console.log({ postPhoto, name, message });
	}

	function discardPost() {
		setPostPhoto(null);
		setName("");
		setMessage("");
	}

	return (
		<Cards.Root>
			<Cards.Body>
				<FormContainer>
					<ImageInput onFileUpload={handleImageUpload} value={postPhoto} />
					<Input
						onChange={(event) => setName(event.target.value)}
						value={name}
						type="text"
						placeholder="Digite seu nome"
						name="name"
					/>
					<Textarea
						onChange={(event) => setMessage(event.target.value)}
						value={message}
						placeholder="Mensagem"
						name="message"
					/>
				</FormContainer>
			</Cards.Body>
			<Cards.Footer>
				<Button onClick={discardPost} variant="outline">
					Descartar
				</Button>
				<Button onClick={submitPost}>Publicar</Button>
			</Cards.Footer>
		</Cards.Root>
	);
}
