import React, { ChangeEvent, useCallback, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Dropzone from "components/Dropzone";
import Header from "components/Header";
import PostProps from "components/interface/PostProps";
import Post from "components/Post";

import trash from "../../assets/icons/trash.svg";

import prePosts from "./prePosts";
import {
	ButtonGroup,
	Discard,
	Feed,
	Form,
	GroupImage,
	InputMessage,
	InputName,
	PainelBuildbox,
	Publish,
	Title,
	Trash,
} from "./styles";

const Home = () => {
	const [posts, setPosts] = useState<PostProps[]>(prePosts);

	const [name, setName] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [photo, setPhoto] = useState<File>();

	const removeElement = useCallback((id: string) => {
		const newPosts = posts.filter((post) => post.id !== id);
		setPosts(newPosts);
	}, [posts]);

	const handleName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	}, []);

	const handleMessage = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setMessage(event.target.value);
		},
		[]
	);

	const clearForm = useCallback(() => {
		setName("");
		setMessage("");
		setPhoto(undefined);
	}, []);

	const removeImage = useCallback(() => {
		setPhoto(undefined);
	}, []);

	const isSubmittable = useCallback(() => {
		return !!(name && message && photo);
	}, [name, message, photo]);

	const handleSubmit = useCallback(
		(event: ChangeEvent<HTMLFormElement>) => {
			event.preventDefault();

			if (!name || !message || !photo) {
				return;
			}

			const post: PostProps = {
				id: uuidv4(),
				message: message,
				photo: URL.createObjectURL(photo),
				name: name,
			};

			setPosts([...posts, post]);
			clearForm();
		},
		[name, message, photo, posts, clearForm]
	);

	return (
		<PainelBuildbox>
			<Header />

			<Form onSubmit={handleSubmit}>
				<GroupImage>
					<Dropzone onFileUploaded={setPhoto} photo={photo} />
					{photo && (
						<Trash
							src={trash}
							alt='Remover foto'
							onClick={removeImage}
						/>
					)}
				</GroupImage>

				<InputName
					type='text'
					name='name'
					placeholder='Digite seu nome'
					value={name}
					onChange={handleName}
				/>

				<InputMessage
					type='text'
					name='message'
					placeholder='Mensagem'
					value={message}
					onChange={handleMessage}
				/>

				<ButtonGroup>
					<Discard onClick={clearForm}> Descartar </Discard>
					<Publish type='submit' active={isSubmittable()}>
						Publicar
					</Publish>
				</ButtonGroup>
			</Form>

			{posts.length > 0 && (
				<Feed>
					<Title>Feed</Title>
					{posts.map((post) => (
						<Post
							key={post.id}
							element={post}
							removeElement={removeElement}
						/>
					))}
				</Feed>
			)}

		</PainelBuildbox>
	);
};

export default Home;
