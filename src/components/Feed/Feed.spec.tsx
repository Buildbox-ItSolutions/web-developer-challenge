import React from 'react';

import axios from 'axios';

import Feed from '.';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { waitFor, fireEvent } from '@testing-library/dom';

global.URL.createObjectURL = jest.fn(() => 'localhost');

import img from '../../images/delete.png';

describe('Feed component', () => {
  const file = {
    ...new File([img], 'oii.png', { type: 'image/png' }),
    type: 'image/png',
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(10)),
  };

  it('Should start with two posts', async () => {
    const Component = () => <Feed />;

    await act(async () => {
      render(<Component />);
    });

    const posts = screen.getAllByTestId('post');
    expect(posts.length).toBe(2);
  });

  it('After creating post should show new post', async () => {
    const Component = () => <Feed />;

    const { rerender } = render(<Component />);

    const imageUpload = screen.getByTestId('image-upload');
    const nameInput = screen.getByTestId('name-input');
    const messageInput = screen.getByTestId('message-input');

    await act(async () => {
      fireEvent.change(imageUpload, {
        target: {
          files: [file],
        },
      });
    });

    await act(async () => {
      fireEvent.input(nameInput, { target: { value: 'Everton' } });
    });

    await act(async () => {
      fireEvent.input(messageInput, { target: { value: 'Alguma mensagem' } });
    });

    const submitButton = screen.getByTestId('submit-button');

    await act(async () => {
      fireEvent.click(submitButton);
    });

    rerender(<Component />);

    const posts = screen.getAllByTestId('post');
    expect(posts.length).toBe(3);
  });
});
