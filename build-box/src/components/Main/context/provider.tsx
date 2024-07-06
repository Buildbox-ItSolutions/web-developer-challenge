'use client';

import React, { useState } from 'react';
import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Post {
	author: string;
	image: string;
	message: string;
	id: string;
}

interface ContextData {
	mainPosts: Post[];
	setPosts: (post: Post[]) => void;
	deletePost: (uuid: string) => void;
	publish: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		image: string,
		author: string,
		message: string
	) => void;
}

export const Context = createContext({} as ContextData);

const initialPosts = [
	{
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
		author: 'Manuela Oliveira',
		image: '/src/assets/images/photo-base1@2x.png',
		id: 'e0ca4059-1e05-4572-a5d1-a458a315f03d',
	},
	{
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
		author: 'Manuela Oliveira',
		image: '/src/assets/images/photo-base2@2x.png',
		id: '8264c9a7-57de-4708-b800-1eb6fa388462',
	},
	{
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
		author: 'Manuela Oliveira',
		image: '/src/assets/images/photo-base3@2x.png',
		id: 'f46bcd05-2b1e-4b83-8a48-8a6b0a643c40',
	},
];

export function Provider({ children }: { children: React.ReactNode }) {
	const [posts, setPosts] = useState(initialPosts);

	function deletePost(uuid: string) {
		const filteredPosts = posts.filter((post) => post.id !== uuid);
		setPosts(filteredPosts);
	}

	function publish(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		image: string,
		author: string,
		message: string
	) {
		e.preventDefault();

		setPosts([...posts, { image, author, message, id: uuidv4() }]);
	}

	return (
		<Context.Provider
			value={{
				mainPosts: posts,
				setPosts,
				deletePost,
				publish,
			}}
		>
			{children}
		</Context.Provider>
	);
}
