import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import PostList from '../components/PostList';

const mockStore = configureStore();
const containerRoot = document.getElementById('root');
const initialState = { posts: [{ id: 1, name: 'João', message: 'Olá', photo: 'url' }] };
const store: MockStoreEnhanced<unknown, {}> = mockStore(initialState);

describe('PostList Test', () => {
  afterEach(() => {
    cleanup();
  });

  const { container, getByTestId } = render(
    <Provider store={store}>
      <PostList />
    </Provider>,
    { container: containerRoot ?? undefined }
  );

  it('renderizou o post com sucesso', () => {
    expect(container).toBeInTheDocument();
    expect(getByTestId('post-name')).toHaveTextContent('João');
    expect(getByTestId('post-message')).toHaveTextContent('Olá');
  });

  it('excluiu o post com sucesso', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <PostList />
      </Provider>,
      { container: containerRoot ?? undefined }
    );

    const deleteButton = getByTestId('post-delete-button');
    fireEvent.click(deleteButton);

    await waitFor(() => {
      // Verifica se a exclusão foi despachada
      const actions = store.getActions();
      expect(actions).toContainEqual({ type: 'DELETE_POST', payload: 1 });

      // Verifica se não contém mais o post
      expect(container?.textContent).not.toContain('João');
      expect(container?.textContent).not.toContain('Olá');
    });
  });
});