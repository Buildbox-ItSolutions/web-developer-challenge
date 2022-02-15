import { render, screen } from '@testing-library/react';
import { Input } from '.';

describe('<Input/>', () => {
  it('should render Input', () => {
    render(<Input />);

    const input = screen.getByPlaceholderText(/digite/i);

    expect(input).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Input disabled={true} />);

    expect(container).toMatchSnapshot();
  });
});
