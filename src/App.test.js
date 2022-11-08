import { render, screen } from '@testing-library/react';

import App from './App';

test('renders upload file image', () => {
  render(<App />);
  const photoUploadElement = screen.getByAltText(/upload photo/i);
  expect(photoUploadElement).toBeInTheDocument();
});

test('renders upload file input', () => {
  render(<App />);
  const photoUploadElement = screen.getByPlaceholderText(/Upload an Image/i);
  expect(photoUploadElement).toBeInTheDocument();
});

test('renders input name', () => {
  const { container } = render(<App />);
  const inputNameElements = container.querySelector(`input[name="name"]`);
  expect(inputNameElements).toBeInTheDocument();

  const inputNamePlaceholderElement =
    screen.getByPlaceholderText(/Digite seu nome/i);
  expect(inputNamePlaceholderElement).toBeInTheDocument();
});

test('renders textarea description', () => {
  const { container } = render(<App />);
  const textareaDescriptionElements = container.querySelector(
    `textarea[name="description"]`,
  );
  expect(textareaDescriptionElements).toBeInTheDocument();

  const textareaDescriptionPlaceholderElement =
    screen.getByPlaceholderText(/Mensagem/i);
  expect(textareaDescriptionPlaceholderElement).toBeInTheDocument();
});

test('renders reset button', () => {
  const { container } = render(<App />);
  const buttonResetElement = container.querySelector(
    `button[type="button"][data-cy="button-link"]`,
  );
  expect(buttonResetElement).toBeInTheDocument();

  const buttonResetLabelElement = screen.getByText(/Descartar/i);
  expect(buttonResetLabelElement).toBeInTheDocument();
});

test('renders submit button', () => {
  const { container } = render(<App />);
  const buttonSubmitElement = container.querySelector(
    `button[type="button"][data-cy="button-submit"]`,
  );
  expect(buttonSubmitElement).toBeInTheDocument();

  const buttonSubmitHasDisabledElement = container.querySelector(
    `button[type="button"][data-cy="button-submit"][disabled=""]`,
  );
  expect(buttonSubmitHasDisabledElement).toBeInTheDocument();

  const buttonSubmitLabelElement = screen.getByText(/Publicar/i);
  expect(buttonSubmitLabelElement).toBeInTheDocument();
});
