import { render, screen } from '@testing-library/react';

import Post from '../Post';

describe('Post Component', () => {
	beforeEach(() => {
		const postMock = {
			message:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
			author: 'Manuela Oliveira',
			image: '/src/assets/images/photo-base1@2x.png',
			id: '1',
		};
		render(
			<Post
				author={postMock.author}
				message={postMock.message}
				image={postMock.image}
				uuid={postMock.id}
			/>
		);
	});

	it('should have a "delete" button', () => {
		const deleteButton = screen.getByTestId('delete-button');
		expect(deleteButton).toBeInTheDocument();
	});

	it('should have a "image" displayed', () => {
		const imagePost = screen.getByTestId('image-post');
		expect(imagePost).toBeInTheDocument();
	});

	it('should have a "message" displayed', () => {
		const messagePost = screen.getByTestId('message-post');
		expect(messagePost).toBeInTheDocument();
	});

	it('should have the "author" displayed', () => {
		const authorPost = screen.getByTestId('author-post');
		expect(authorPost).toBeInTheDocument();
	});
});
