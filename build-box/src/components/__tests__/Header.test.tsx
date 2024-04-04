import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header Component', () => {
	render(<Header />);
	const img = screen.getByRole('img');
	it('should show "buildbox WEB CHALLENGE" image', () => {
		expect(img).toBeInTheDocument();
	});

	it('should have a "src" attribute', () => {
		expect(img).toHaveAttribute('src', '/src/assets/bx-logo.svg');
	});

	it('should have a "alt" attribute', () => {
		expect(img).toHaveAttribute('alt', 'buildbox web challenge logo');
	});
});
