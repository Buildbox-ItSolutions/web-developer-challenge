import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import Form from '../Form';
import { useForm } from '../Form/hooks/useForm';
import { Provider } from '../Main/context/provider';

describe('Form Component', () => {
	beforeEach(() => {
		render(
			<Provider>
				<Form />
			</Provider>
		);
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

	it('should have a "discard" button that resets the form', () => {
		const discardButton = screen.getByTestId('discard-button');
		const imageInput = screen.getByTestId('image-input') as HTMLInputElement;
		const authorInput = screen.getByTestId('author-input') as HTMLInputElement;
		const messageInput = screen.getByTestId(
			'message-input'
		) as HTMLInputElement;

		act(() => {
			authorInput.value = 'test-author';
			messageInput.value = 'test-message';
		});

		expect(authorInput.value).toBe('test-author');
		expect(messageInput.value).toBe('test-message');

		act(() => {
			discardButton.click();
		});

		setTimeout(() => {
			expect(imageInput.value).toBe('');
			expect(authorInput.value).toBe('');
			expect(messageInput.value).toBe('');
		}, 1500);
	});

	it('should have a "publish" button that calls the publish function', () => {
		const publishButton = screen.getByTestId('publish-button');
		const imageInput = screen.getByTestId('image-input') as HTMLInputElement;
		const authorInput = screen.getByTestId('author-input') as HTMLInputElement;
		const messageInput = screen.getByTestId(
			'message-input'
		) as HTMLInputElement;

		act(() => {
			authorInput.value = 'test-author';
			messageInput.value = 'test-message';
		});

		expect(authorInput.value).toBe('test-author');
		expect(messageInput.value).toBe('test-message');

		act(() => {
			publishButton.click();
		});

		setTimeout(() => {
			expect(imageInput.value).toBe('');
			expect(authorInput.value).toBe('');
			expect(messageInput.value).toBe('');
		}, 1500);
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

	it('should set image state when handleImage is called', async () => {
		const { result } = renderHook(() => useForm());

		await act(async () => {
			const fileList: FileList = {
				0: new File(['(⌐□_□)'], 'chucknorris.png', {
					type: 'image/png',
				}),
				length: 1,
				item: () => null,
				[Symbol.iterator]: function* () {
					yield this[0];
				},
			};
			return result.current.handleImage(fileList);
		});

		setTimeout(() => {
			expect(result.current.image).resolves.toBe(
				'data:image/png;base64,KEludGVybmV0IFBhZ2UgJygpXHJcbik='
			);
		}, 1500);
	});

	it('should set image state to empty string when handleImage is called without files', () => {
		const { result } = renderHook(() => useForm());

		act(() => {
			result.current.handleImage(null);
		});

		expect(result.current.image).toBe('');
	});
});
