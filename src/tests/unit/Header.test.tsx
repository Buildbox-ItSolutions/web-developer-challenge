import { render, screen } from 'src/tests/test-utils';
import { Header } from 'src/components';

jest.mock('src/assets/images/bx-logo.png', () => 'image.png');

describe('Header Component', () => {
  it('should render logo image', () => {
    render(<Header />);

    const logoImage = screen.getByAltText('buildbox web challenge');
    expect(logoImage).toBeInTheDocument();
  });
});
