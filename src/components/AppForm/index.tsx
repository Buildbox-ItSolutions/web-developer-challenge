import { useState } from "react";
import {
	Section,
	Form,
	InputName,
	InputMessage,
	Nav,
	PublishBtn,
	DiscardBtn,
	Div,
	InputImg,
	Img,
	DivMain,
} from "./style";
import { FaImage } from "react-icons/fa";
import { PiTrashSimpleThin } from "react-icons/pi";
import { v4 as uuidv4 } from "uuid";
import { usePosts } from "../../context/PostContext";

interface ImageData {
	imageUpload: string;
}

interface PostData {
	id: string;
	image: string | null;
	name: string;
	message: string;
}

export default function AppForm() {
	const [image, setImage] = useState<ImageData | null>(null);
	const [showDefaultImage, setDefaultImage] = useState(true);
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [upload, setUpload] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const { addPost } = usePosts();

	const handleFieldsChange = () => {
		setIsButtonDisabled(!(name.trim() && message.trim() && upload));
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				if (typeof reader.result === "string") {
					setImage({ imageUpload: reader.result });
					setDefaultImage(false);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handleDiscardImage = () => {
		setDefaultImage(true);
		setImage(null);
	};

	const handleReset = () => {
		setName("");
		setMessage("");
		setImage(null);
		setUpload("");
		setDefaultImage(true);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newPost: PostData = {
			id: uuidv4(),
			image: image && image.imageUpload ? image.imageUpload : null,
			name: name,
			message: message,
		};
		addPost(newPost);
		handleReset();
	};

	return (
		<Section>
			<Form onSubmit={handleSubmit}>
				<DivMain>
					<Div>
						{image && !showDefaultImage && (
							<Img
								src={image.imageUpload}
								alt="Preview"
							/>
						)}
						{showDefaultImage && <FaImage size={30} />}
						<InputImg
							type="file"
							name="uploadImage"
							id="uploadImage"
							accept="image/*"
							onChange={(e) => {
								setUpload(e.target.value), handleImageChange(e);
							}}
							onBlur={handleFieldsChange}
						/>
					</Div>
					{image ? (
						<PiTrashSimpleThin
							size={24}
							color="#AC4E27"
							cursor="pointer"
							onClick={handleDiscardImage}
						/>
					) : null}
				</DivMain>

				<InputName
					placeholder="Digite seu nome"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					onBlur={handleFieldsChange}
				/>
				<InputMessage
					placeholder="Mensagem"
					rows={3}
					cols={50}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					onBlur={handleFieldsChange}
				/>
				<Nav>
					<DiscardBtn
						disabled={isButtonDisabled}
						onClick={handleReset}>
						Descartar
					</DiscardBtn>
					<PublishBtn
						type="submit"
						disabled={isButtonDisabled}>
						Publicar
					</PublishBtn>
				</Nav>
			</Form>
		</Section>
	);
}
