'use client';
import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CiImageOn } from 'react-icons/ci';
import { FiTrash } from 'react-icons/fi';
import styled from 'styled-components';

export interface CardInputProps {
	post: {
		id: string;
		name: string | null;
		message: string;
		photo: string;
	};
	setPost: Dispatch<SetStateAction<{
		id: string;
		name: string | null;
		message: string;
		photo: string;
	}>>;
	handlePublish: (post: {
		id: string;
		name: string | null;
		message: string;
		photo: string;
	}) => void;
}

export const CardInput = ({ post, setPost, handlePublish }: CardInputProps) => {
	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPost(prevPost => ({ ...prevPost, photo: reader.result as string }));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setPost(prevPost => ({ ...prevPost, [name]: value }));
	};

	const isPublishDisabled = !post.name || !post.message || !post.photo;

	const handlePublishClick = () => {
		const newPost = { ...post, id: uuidv4() };
		handlePublish(newPost);
		setPost({ id: '', name: '', message: '', photo: '' }); // Resetando o formulário
	};

	return (
		<CardInputContainer>
			<div className='container'>
				<label htmlFor="imageUpload">
					<div className='image'>
						{post.photo ? (
							<img src={post.photo} alt="Selected" className='imagemState' />
						) : (
							<CiImageOn size={40} />
						)}
					</div>
				</label>

				<input
					type="file"
					accept="image/*"
					style={{ display: 'none' }}
					id="imageUpload"
					onChange={handleImageChange}
				/>

				{post.photo && (
					<FiTrash
						size={25}
						className='trash'
						fontWeight={200}
						onClick={() => setPost(prevPost => ({ ...prevPost, photo: '' }))}
					/>
				)}
			</div>
			<div className='group'>
				<input
					type="text"
					placeholder='Digite seu nome'
					name="name"
					value={post.name || ''}
					onChange={handleInputChange}
				/>
				<textarea
					placeholder='Mensagem'
					rows={3}
					name="message"
					value={post.message}
					onChange={handleInputChange}
				/>
			</div>
			<div className='btns'>
				<button className='descartar' onClick={() => setPost({ id: '', name: '', message: '', photo: '' })}>Descartar</button>
				<button
					className='publicar'
					onClick={handlePublishClick}
					disabled={isPublishDisabled}
					style={{ backgroundColor: isPublishDisabled ? 'grey' : 'green' }}
				>
					Publicar
				</button>
			</div>
		</CardInputContainer>
	);
};

const CardInputContainer = styled.div`
	background:  ${({ theme }) => theme.colors.gray600};
	border: ${({ theme }) => theme.colors.gray750} 0.1px solid;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;
	width: 540px;
	height: 350px;
	border-radius: 6px;
	padding: 15px;

	input,textarea{
		border-radius: 5px;
		padding: 8px;
		min-height: 35px;
		width: 95%;
		font-size: 1rem;
		margin: 0 auto;
		color: ${({ theme }) => theme.colors.gray100};
		background: ${({ theme }) => theme.colors.gray300};
		outline: none;
		border: none;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		resize: none;
	}
	button{
		padding: 15px;
		border-radius: 12px;
	}
	.descartar{
		background: transparent;
		color:  ${({ theme }) => theme.colors.gray500};
		text-decoration: underline;
		border: none;
		padding: 0 12px;
	}
	.publicar{
		background:  ${({ theme }) => theme.colors.gray500};
		color:  ${({ theme }) => theme.colors.gray900};
		border: none;
	}
	.btns{
		display: flex;
		justify-content: end;
		gap: 1rem;
		padding: 0 12px;
	}
	.group{
		display: flex;
		height: 40%;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.container{
		height: 100px;
		width: 180px;
		margin: 0 auto;
		display: flex;
		position: relative;
	}
	.image{
		border: solid 1px ${({ theme }) => theme.colors.gray200};
		height: 100px;
		width: 100px;
		border-radius: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${({ theme }) => theme.colors.gray200};
		margin: 0 auto;
		position: relative;
		overflow: hidden;
	}
	.trash{
		position: absolute;
		right: 0;
		top: 30%;
		color: ${({ theme }) => theme.colors.red};
	}
	.imagemState{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	label{
		width: 100%;
	}
`;
