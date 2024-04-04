import { render, screen } from '@testing-library/react';

import Form from '../Form';

describe('Form Component', () => {
	beforeEach(() => {
		render(<Form />);
	});
	it('should have a "image" input field', () => {
		const imageInput = screen.getByTestId('image-input');
		expect(imageInput).toBeInTheDocument();
	});

	it('should have a "name" input field', () => {
		const nameInput = screen.getByTestId('name-input');
		expect(nameInput).toBeInTheDocument();
	});

	it('should have a "message" input field', () => {
		const messageInput = screen.getByTestId('message-input');
		expect(messageInput).toBeInTheDocument();
	});

	it('should have a "discard" button', () => {
		const discardButton = screen.getByTestId('discard-button');
		expect(discardButton).toBeInTheDocument();
	});

	it('should have a "publish" button', () => {
		const publishButton = screen.getByTestId('publish-button');
		expect(publishButton).toBeInTheDocument();
	});
});
