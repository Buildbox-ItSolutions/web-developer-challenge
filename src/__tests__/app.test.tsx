import {
  renderWithProviders,
  setupForm,
  screen,
  waitFor,
} from '@/__tests__/utils';

import App from '@/App';

test('should render app', () => {
  const { container } = renderWithProviders(<App />);

  expect(container).not.toBeNull();
});

test('should add/remove post', async () => {
  renderWithProviders(<App />);

  const { changeName, changeMessage, submitForm, user } = setupForm();

  expect(screen.queryByRole('article')).not.toBeInTheDocument();

  const name = 'Igor';
  const message = 'Beer is so good!';

  await changeName(name);
  await changeMessage(message);

  expect(screen.getByRole('form')).toHaveFormValues({
    name,
    message,
  });

  await submitForm();

  expect(screen.getByRole('article')).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /Excluir/i }));

  expect(screen.queryByRole('article')).not.toBeInTheDocument();
});

test('should add new post with avatar', async () => {
  renderWithProviders(<App />);

  const {
    changeName,
    changeMessage,
    uploadFile,
    submitForm,
    file,
    avatarField,
  } = setupForm();

  expect(screen.queryByRole('article')).not.toBeInTheDocument();

  const name = 'Igor';
  const message = 'Beer is so good!';

  await changeName(name);
  await changeMessage(message);
  await uploadFile();

  await waitFor(() => screen.getByLabelText(/Remove Avatar Image/));

  expect(avatarField.files).toHaveLength(1);
  expect(avatarField.files?.item(0)).toStrictEqual(file);
  expect(screen.getByRole('form')).toHaveFormValues({
    name,
    message,
  });

  await submitForm();

  await waitFor(() => screen.getByRole('article'));

  expect(screen.getByRole('article')).toBeInTheDocument();
});
