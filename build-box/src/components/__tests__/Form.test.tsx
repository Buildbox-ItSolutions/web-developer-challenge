import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import Form from '../Form';
import { useForm } from '../Form/hooks/useForm';

describe('Form Component', () => {
	beforeEach(() => {
		render(<Form />);
	});
	it('should have a "image" input field', () => {
		const imageInput = screen.getByTestId('image-input');
		expect(imageInput).toBeInTheDocument();
	});

	it('should have a "author" input field', () => {
		const authorInput = screen.getByTestId('author-input');
		expect(authorInput).toBeInTheDocument();
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

describe('useForm hook', () => {
	it('should update state values correctly', () => {
		const { result } = renderHook(() => useForm());

		act(() => {
			result.current.setImage('test-image');
			result.current.setAuthor('test-author');
			result.current.setMessage('test-message');
		});

		expect(result.current.image).toBe('test-image');
		expect(result.current.author).toBe('test-author');
		expect(result.current.message).toBe('test-message');
	});

	it('should reset state values when discard is called', () => {
		const { result } = renderHook(() => useForm());

		act(() => {
			result.current.setImage('test-image');
			result.current.setAuthor('test-author');
			result.current.setMessage('test-message');
			// @ts-expect-error discard does not require all types of MouseEvent
			result.current.discard({ preventDefault: () => {} });
		});

		expect(result.current.image).toBe('');
		expect(result.current.author).toBe('');
		expect(result.current.message).toBe('');
	});
});
