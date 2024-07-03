import { useState } from 'react';
import { ActionButtons, AppForm, MessageInput, NameInput } from './styles';
import { Post } from '../../interfaces/post';

interface FormProps {
	addPost: (post: Post) => void;
}

export default function Form({ addPost }: FormProps) {
	const [post, setPost] = useState<Post>({
		img: '',
		name: '',
		message: '',
	});

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setPost({ ...post, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addPost(post);
		setPost({ img: '', name: '', message: '' });
	};

	return (
		<AppForm onSubmit={handleSubmit}>
			<label htmlFor="image"></label>
			<input type="file" name="image" id="image" accept="image/*" />
			<NameInput
				name="name"
				type="text"
				placeholder="Digite seu nome"
				value={post.name}
				onChange={handleFormChange}
			/>
			<MessageInput
				name="message"
				placeholder="Mensagem"
				rows={4}
				value={post.message}
				onChange={handleFormChange}
			/>
			<ActionButtons>
				<button
					onClick={() => {
						setPost({ img: '', name: '', message: '' });
					}}
				>
					Descartar
				</button>
				<button type="submit">Publicar</button>
			</ActionButtons>
		</AppForm>
	);
}
