import { useState } from 'react';

const posts = [
	{
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
		author: 'Manuela Oliveira',
		image: '/src/assets/images/photo-base1@2x.png',
		id: '1',
	},
	{
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
		author: 'Manuela Oliveira',
		image: '/src/assets/images/photo-base2@2x.png',
		id: '2',
	},
	{
		message:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
		author: 'Manuela Oliveira',
		image: '/src/assets/images/photo-base3@2x.png',
		id: '3',
	},
];

function useFeed() {
	const [mainPosts, setMainPosts] = useState(posts);

	function deletePost(uuid: string) {
		const filtredPosts = mainPosts.filter((post) => post.id !== uuid);
		setMainPosts(filtredPosts);
	}

	return {
		deletePost,
		mainPosts,
	};
}

export default useFeed;
