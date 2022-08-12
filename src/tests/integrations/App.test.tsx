import { render, screen, waitFor } from 'src/tests/test-utils';
import App from "src/App/App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it('should render the post form', async () => {
    const user = userEvent.setup();
    render(<App />);

    const file = new File(['hello'], 'hello.png', {type: 'image/png'})
    const name = 'Obi-Wan';
    const text = 'There are many ways to lead. You just have to find yours.';

    const nameField = screen.getByPlaceholderText(/digite seu nome/i);
    const textField = screen.getByPlaceholderText(/mensagem/i);
    const imageField = screen.getByLabelText(/adicionar imagem/i);
    const publishButton = screen.getByText(/publicar/i);

    expect(publishButton).toBeDisabled();

    await waitFor(() => user.type(nameField, name));
    await waitFor(() => user.type(textField, text));
    await waitFor(() => user.upload(imageField, file));

    await waitFor(() => expect(publishButton).toBeEnabled());

    expect(screen.getByDisplayValue(name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(text)).toBeInTheDocument();
  });
});
