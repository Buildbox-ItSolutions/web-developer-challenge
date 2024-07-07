import { render, screen } from "@testing-library/react";
import Form from "./form";
import userEvent from "@testing-library/user-event";

describe('form component', () => {
    beforeEach(() => {
        render(<Form />);        
    })

    it('should return error if email field is not filled', async () => {
        const passwordInput = screen.getByTestId('password');
        
        await userEvent.type(passwordInput, 'F$_34f*reFi');
        expect(passwordInput).toHaveValue('F$_34f*reFi');

        const submitBtn = screen.getByRole('button', { name: /login now/i })
        await userEvent.click(submitBtn);

        const errorElement = screen.queryByText(/woops, something is wrong, try again later!/i);
        expect(errorElement).toBeInTheDocument();
    });

    it('should return error if password field is not filled', async () => {
        const emailPassword = screen.getByTestId('email');
        
        await userEvent.type(emailPassword, 'thiago@gmail.com');
        expect(emailPassword).toHaveValue('thiago@gmail.com');

        await userEvent.click(screen.getByRole('button', { name: /login now/i }));

        const errorElement = screen.queryByText(/woops, something is wrong, try again later!/i);
        expect(errorElement).toBeInTheDocument();
    });
});
