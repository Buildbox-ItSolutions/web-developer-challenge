import React from 'react';

import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

global.URL.createObjectURL = jest.fn(() => 'localhost');

import CreatePost from '.';

describe('Create post component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should have clear button', async () => {
    const onSucessSubmit = jest.fn();
    const Component = () => <CreatePost onSuccessSubmit={onSucessSubmit} />;

    await act(async () => {
      render(<Component />);
    });

    const clearButton = screen.getByTestId('clear-button');
    expect(clearButton).toBeInTheDocument();
  });
});
