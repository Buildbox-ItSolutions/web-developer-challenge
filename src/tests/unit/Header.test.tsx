import { render, screen } from '../../tests/test-utils';
import { Header } from '../../components';

jest.mock('../../assets/images/bx-logo.png', () => 'image.png');

describe('Header Component', () => {
  it('should render logo image', () => {
    render(<Header />);

    const logoImage = screen.getByAltText('buildbox web challenge');
    expect(logoImage).toBeInTheDocument();
  });
});
