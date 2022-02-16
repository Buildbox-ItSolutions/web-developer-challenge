import React from 'react';

import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

global.URL.createObjectURL = jest.fn(() => 'localhost');

import Header from '.';

describe('Header component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should have logo', async () => {
    const Component = () => <Header />;

    await act(async () => {
      render(<Component />);
    });

    const image = screen.getByAltText('BX Logo');
    expect(image).toBeInTheDocument();
  });
});
