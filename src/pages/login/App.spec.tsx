import { screen, render } from '@testing-library/react';
import App from './App';

it('should render login page with email and password fields', () => {
    render(<App />);

    const emailLabel = screen.getByLabelText(/email address/i);
    const passwordLabel = screen.getByLabelText(/password/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
});
