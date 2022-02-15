import React from 'react';

import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { fireEvent } from '@testing-library/dom';

global.URL.createObjectURL = jest.fn(() => 'localhost');

import CreatePost from '.';

describe('Feed component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should start with two posts', async () => {
    const onSucessSubmit = jest.fn();
    const Component = () => <CreatePost onSuccessSubmit={onSucessSubmit} />;

    await act(async () => {
      render(<Component />);
    });

    const clearButton = screen.getByTestId('clear-button');
    expect(clearButton).toBeInTheDocument();
  });
});
