import '@testing-library/jest-dom';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPost from './FormPost';
import { act } from 'react';


describe('<FormPost Component/>', () => {
    const mockAddPost = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        render(<FormPost onAddPost={mockAddPost}/>);
    })
    
    const mockName = 'João';
    const mockMessage = 'Mensagem de teste';
    const mockPost = {
        name: mockName,
        message: mockMessage,
        picture: '',
    }

    it('deve renderizar o botão de adicionar avatar', () => {
        const btnAddAvatar = screen.getByTestId('btn-add-avatar');

        expect(btnAddAvatar).toBeVisible();
    })

    it('deve renderizar o input de arquivo, porém não deve estar visível', () => {
        const inputFile = screen.getByTestId('input-file');

        expect(inputFile).toBeInTheDocument();
        expect(inputFile).not.toBeVisible();
    })

    it('deve renderizar renderizar o input de nome com o placeholder correto', () => {
        const inputName = screen.getByTestId('input-name');

        expect(inputName).toBeVisible();
        expect(inputName).toHaveAttribute('placeholder', 'Digite seu nome');
    })

    it('deve renderizar renderizar o input de mensagem com o placeholder correto', () => {
        const inputMessage = screen.getByTestId('input-message');

        expect(inputMessage).toBeVisible();
        expect(inputMessage.tagName.toLowerCase()).toBe('textarea')
        expect(inputMessage).toHaveAttribute('placeholder', 'Mensagem');
    })

    it('deve renderizar o botão de publicar com o texto correto', () => {
        const btnSubmit = screen.getByTestId('btn-submit');
        
        expect(btnSubmit).toBeVisible();
        expect(btnSubmit).toHaveTextContent('Publicar')
    })

    it('deve renderizar o botão de descartar com o texto correto', () => {
        const btnDiscard = screen.getByTestId('btn-discard');

        expect(btnDiscard).toBeVisible();
        expect(btnDiscard).toHaveTextContent('Descartar')
    })

    it('deve chamar onAddPost com os dados quando o formulário for submetido', async () => {
        const inputName = screen.getByTestId('input-name');
        const inputMessage = screen.getByTestId('input-message');
        const btnSubmit = screen.getByTestId('btn-submit');

        await act(async () => {
            await userEvent.type(inputName, mockName);
            await userEvent.type(inputMessage, mockMessage);
            userEvent.click(btnSubmit);
        })

        await waitFor(() => {
            expect(mockAddPost).toHaveBeenCalledWith(mockPost);
        })
    })
});