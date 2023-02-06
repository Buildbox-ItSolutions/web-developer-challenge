import { ThemeProvider } from 'styled-components';

import { AppRoutes } from '@config/routes';
import { PostsProvider } from '@global/contexts/PostsContext';

import { ResetCSS, THEME_DEFAULT_TEMPLATE } from '@styles/index';

export default function App() {
  return (
    <PostsProvider>
      <ThemeProvider theme={THEME_DEFAULT_TEMPLATE}>
        <ResetCSS />
        <AppRoutes />
      </ThemeProvider>
    </PostsProvider>
  );
}

// Observação; Peço desculpa pela falta de atenção, criei um repositório no github e fui trabalhando em cima dele, porém depois que eu vi que precisava ter criado um fork do repositório já existe, ou seja o histórico de commit não vai estar disponível mas caso queira ver todos os commits realizados, a seguir o link do repositório.

// https://github.com/viniciusidacruz/buildbox
