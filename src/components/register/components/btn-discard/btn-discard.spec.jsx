import { render, screen } from '@testing-library/react';

import { BtnDiscard } from '.';

describe('<BtnDiscard/>', () => {
  it('should render button', () => {
    render(<BtnDiscard />);

    const button = screen.getByRole('button', { name: /descartar/i });
    expect(button).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<BtnDiscard />);

    expect(container).toMatchSnapshot();
  });
});
