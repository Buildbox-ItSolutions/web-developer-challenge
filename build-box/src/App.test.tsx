import { render, screen } from '@testing-library/react';

import App from './App';

it('should have a tag "header"', () => {
	render(<App />);
	const header = screen.getByRole('banner');
	expect(header).toBeInTheDocument();
});
