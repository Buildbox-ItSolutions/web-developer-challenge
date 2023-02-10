import {
  render,
  waitForElementToBeRemoved,
  cleanup,
  screen,
  fireEvent,
} from '@testing-library/react';
import Posts from '.';

afterEach(() => {
  cleanup();
});

describe('posts page', () => {
  it('renders without crashing', () => {
    render(<Posts />);

    expect(screen.getByText(/feed/i)).toBeInTheDocument();
  });

  it('adds a post to the list', () => {
    const FILE = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    render(<Posts />);

    fireEvent.change(screen.getByLabelText(/campo imagem/i), { target: { files: [FILE] } });
    fireEvent.change(screen.getByRole('textbox', { name: /nome/i }), {
      target: { value: 'Renan' },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /mensagem/i }), {
      target: { value: 'message test' },
    });
    fireEvent.click(screen.getByRole('button', { name: /publicar/i }));

    expect(screen.getByText(/enviado por/i)).toBeInTheDocument();
    expect(screen.getByText(/renan/i)).toBeInTheDocument();
    expect(screen.getByText(/message test/i)).toBeInTheDocument();
  });
  it('deletes a post from the list', async () => {
    const FILE = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    render(<Posts />);

    fireEvent.change(screen.getByLabelText(/campo imagem/i), { target: { files: [FILE] } });
    fireEvent.change(screen.getByRole('textbox', { name: /nome/i }), {
      target: { value: 'Renan' },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /mensagem/i }), {
      target: { value: 'post deletado' },
    });
    fireEvent.click(screen.getByRole('button', { name: /publicar/i }));
    fireEvent.click(screen.getByRole('button', { name: /deletar post/i }));

    expect(screen.queryByText(/post deletado/i)).not.toBeInTheDocument();
  });
});
