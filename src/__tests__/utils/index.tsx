import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { theme } from '@/theme';
import { ThemeProvider } from 'styled-components';
import rootReducer, { RootState } from '@/reducers';
import { Provider } from 'react-redux';

const StyledProvider: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export const setupForm = (userEventOptions?: Parameters<typeof userEvent.setup>[0]) => {
  const user = userEvent.setup(userEventOptions);

  const file = new File(['🍺'], 'test.png', {
    type: 'image/png',
  });

  const [nameField, messageField, avatarField, buttonSubmit, buttonDiscard]: [
    HTMLInputElement,
    HTMLInputElement,
    HTMLInputElement,
    HTMLButtonElement,
    HTMLButtonElement,
  ] = [
    screen.getByRole('textbox', { name: /name/i }),
    screen.getByRole('textbox', { name: /message/i }),
    screen.getByLabelText(/Upload Avatar/),
    screen.getByRole('button', { name: /Publicar/i }),
    screen.getByRole('button', { name: /Descartar/ }),
  ];

  return {
    user,
    file,
    nameField,
    messageField,
    avatarField,
    changeName: (name: string) => user.type(nameField, name),
    changeMessage: (message: string) => user.type(messageField, message),
    clickButtonUpload: () =>
      user.click(
        screen.getByRole('button', {
          name: /^Upload Image$/,
        }),
      ),
    removeAvatar: () => user.click(screen.getByRole('button', { name: /Remove Avatar Image/ })),
    uploadFile: (newFile = file) => user.upload(avatarField, newFile),
    discardForm: () => user.click(buttonDiscard),
    submitForm: () => user.click(buttonSubmit),
  };
};

type RenderWithStoreOptions = {
  preloadedState?: RootState;
  store?: ReturnType<typeof configureStore>;
};

export function renderWithStore(
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({ reducer: rootReducer, preloadedState }),
    ...renderOptions
  }: RenderWithStoreOptions = {},
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <StyledProvider>
        <Provider store={store}>{children}</Provider>
      </StyledProvider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
