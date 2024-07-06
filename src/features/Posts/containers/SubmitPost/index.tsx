import { useState, ChangeEvent, useContext } from "react";
import { Button } from "../../../../components/Button";
import { Cards } from "../../../../components/Cards";
import { ImageInput } from "../../../../components/ImageInput";
import { Input } from "../../../../components/Input";
import { Textarea } from "../../../../components/Textarea";
import { FormContainer } from "./style";
import { PostsContext } from "../../contexts/posts.context";

export function SubmitPost() {
	const [postPhoto, setPostPhoto] = useState<File | null>(null);
	const [name, setName] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const { submitPost } = useContext(PostsContext);

	function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
		const files = event.target.files;
		if (!files?.length) {
			return;
		}

		setPostPhoto(files[0]);
	}

	function handleSubmit() {
		if (!postPhoto || !name || !message) {
			return;
		}

		submitPost({
			message,
			name,
			postPhoto: URL.createObjectURL(postPhoto),
		});

		discardPost();
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
				<Button onClick={handleSubmit}>Publicar</Button>
			</Cards.Footer>
		</Cards.Root>
	);
}
