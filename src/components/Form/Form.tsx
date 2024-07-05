import { useState } from 'react';
import {
	ActionButtons,
	AppForm,
	MessageInput,
	NameInput,
	SelectedImage,
	SelectedImageDiv,
} from './styles';
import { Post } from '../../interfaces/post';
import trash from '../../assets/trash.png';

interface FormProps {
	addPost: (post: Post) => void;
}

export default function Form({ addPost }: FormProps) {
	const [post, setPost] = useState<Post>({
		index: 0,
		img: '',
		name: '',
		message: '',
	});
	const [selectedImg, setSelectedImg] = useState<string>('');

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setPost({ ...post, [name]: value });
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.onloadend = () => {
				setSelectedImg(reader.result as string);
				setPost({ ...post, img: reader.result as string });
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addPost(post);
		setSelectedImg('');
		setPost({ index: 0, img: '', name: '', message: '' });
	};

	return (
		<AppForm onSubmit={handleSubmit}>
			{selectedImg ? (
				<SelectedImageDiv>
					<SelectedImage src={selectedImg} alt="Selected Image" />
					<button onClick={() => setSelectedImg('')}>
						<img src={trash} alt="" />
					</button>
				</SelectedImageDiv>
			) : (
				<>
					<label htmlFor="img"></label>
					<input
						type="file"
						name="img"
						id="img"
						accept="image/*"
						onChange={handleImageChange}
						required
					/>
				</>
			)}
			<NameInput
				name="name"
				type="text"
				placeholder="Digite seu nome"
				value={post.name}
				onChange={handleFormChange}
				required
			/>
			<MessageInput
				name="message"
				placeholder="Mensagem"
				rows={4}
				value={post.message}
				onChange={handleFormChange}
				required
			/>
			<ActionButtons>
				<button
					onClick={() => {
						setPost({ index: 0, img: '', name: '', message: '' });
					}}
				>
					Descartar
				</button>
				<button type="submit">Publicar</button>
			</ActionButtons>
		</AppForm>
	);
}
