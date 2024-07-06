import { act } from 'react-dom/test-utils';
import { fireEvent, render } from '@testing-library/react';

import { Provider } from '../Main/context';
import Form from '../Form';
import Feed from '../Feed';

describe('Main Provider', () => {
	it('should publish a new post when publish function is called', () => {
		const { getByText, getByTestId } = render(
			<Provider>
				<Form />
				<Feed />
			</Provider>
		);

		act(() => {
			const authorInput = getByTestId('author-input') as HTMLInputElement;
			const messageInput = getByTestId('message-input') as HTMLInputElement;
			fireEvent.input(authorInput, { target: { value: 'test-author' } });
			fireEvent.input(messageInput, { target: { value: 'test-message' } });

			expect(authorInput.value).toBe('test-author');
			expect(messageInput.value).toBe('test-message');
			getByText('Publicar').click();
		});

		expect(getByText('test-message')).toBeInTheDocument();
	});

	it('should publish a new post when publish function is called', () => {
		const { getByText, getByTestId } = render(
			<Provider>
				<Form />
				<Feed />
			</Provider>
		);

		const authorInput = getByTestId('author-input') as HTMLInputElement;
		const messageInput = getByTestId('message-input') as HTMLInputElement;
		act(() => {
			fireEvent.input(authorInput, { target: { value: 'test-author' } });
			fireEvent.input(messageInput, { target: { value: 'test-message' } });

			expect(authorInput.value).toBe('test-author');
			expect(messageInput.value).toBe('test-message');
			getByText('Descartar').click();
		});
		expect(authorInput.value).toBe('');
	});

	it('should delete a post when deletePost function is called', () => {
		const { getByText, getByTestId, getAllByTestId } = render(
			<Provider>
				<Form />
				<Feed />
			</Provider>
		);

		const authorInput = getByTestId('author-input') as HTMLInputElement;
		const messageInput = getByTestId('message-input') as HTMLInputElement;
		act(() => {
			fireEvent.input(authorInput, { target: { value: 'test-author' } });
			fireEvent.input(messageInput, { target: { value: 'test-message' } });

			expect(authorInput.value).toBe('test-author');
			expect(messageInput.value).toBe('test-message');
			getByText('Publicar').click();
		});

		const testMessage = getByText('test-message');

		expect(testMessage).toBeInTheDocument();
		act(() => {
			const deleteButtons = getAllByTestId('delete-button');
			deleteButtons[3].click();
		});
		expect(testMessage).not.toBeInTheDocument();
	});
});
