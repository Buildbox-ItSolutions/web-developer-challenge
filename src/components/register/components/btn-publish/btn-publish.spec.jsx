import { render, screen } from '@testing-library/react';
import { BtnPublish } from '.';

describe('<BtnPublish/>', () => {
  it('should BtnPublish render', () => {
    render(<BtnPublish disabled={true} />);

    const button = screen.getByRole('button', { name: /publicar/i });
    expect(button).toBeInTheDocument();
  });

  it('should be disabled when disable is true', () => {
    render(<BtnPublish disabled={true} />);

    const button = screen.getByRole('button', { name: /pu/i });

    expect(button).toBeDisabled();
  });

  it('should match snapshot', () => {
    const { container } = render(<BtnPublish disabled={true} />);

    expect(container).toMatchSnapshot();
  });
});
