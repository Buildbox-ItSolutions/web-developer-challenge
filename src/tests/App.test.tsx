import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import DataProvider from '../context/DataProvider';
import { mockData } from '../mock/mockData';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Teste da minha página Home', () => {
  it('Ver se tudo no Header retorna corretamente', () => {
    renderWithRouter(
      <DataProvider>
        <App />
      </DataProvider>,
    );
    const titleHeader = screen.getByRole('heading', {
      name: /trybe news/i,
    });
    const buttonImgMoon = screen.getByTestId('DarkModeOutlinedIcon');
    const linkFavorite = screen.getByRole('link', {
      name: /favorites/i,
    });
    expect(titleHeader).toBeInTheDocument();
    expect(buttonImgMoon).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });
  it('Se ao clicar no Link Favorites e direcionado para a página favorites', async () => {
    const { user } = renderWithRouter(
      <DataProvider>
        <App />
      </DataProvider>,
    );
    const linkFavorite = screen.getByRole('link', {
      name: /favorites/i,
    });
    await user.click(linkFavorite);
    const textFavorite = screen.getByTestId('title-favorites');
    expect(textFavorite).toBeInTheDocument();
  });
  it('Testar a alternância do modo claro/escuro', async () => {
    const { user } = renderWithRouter(
      <DataProvider>
        <App />
      </DataProvider>,
    );
    const buttonImgMoon = screen.getByTestId('DarkModeOutlinedIcon');
    await user.click(buttonImgMoon);
    const body = document.querySelector('body');
    if (body) {
      const computedStyle = window.getComputedStyle(body);
      const backgroundColor = computedStyle.getPropertyValue('background-color');
      const isDarkMode = backgroundColor === '#0e0e0e';
      expect(isDarkMode).toBe(false);
    } else {
      fail('Body não encontrado');
    }
  });
  it('Testar a função de API IBGE com um mock', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockData,
    } as Response;
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    renderWithRouter(
      <DataProvider>
        <App />
      </DataProvider>,
    );
    expect(mockFetch).toHaveBeenCalled();
    expect(mockFetch).toHaveBeenCalledWith('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
  });
});
