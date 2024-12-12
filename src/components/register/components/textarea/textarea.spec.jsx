import { render, screen } from '@testing-library/react';
import { Textarea } from '.';

describe('<Textarea/>', () => {
  it('should render Textarea', () => {
    render(<Textarea />);

    const text = screen.getByPlaceholderText(/men/i);

    expect(text).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = render(<Textarea />);

    expect(container).toMatchSnapshot();
  });
});
