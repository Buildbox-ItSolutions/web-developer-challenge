import PostForm from '@/components/Form';
import { screen, waitFor, setupForm, renderWithStore } from '@/__tests__/utils';

const handleAddPost = jest.fn();

function setup(setupOptions?: Parameters<typeof setupForm>[0]) {
  renderWithStore(<PostForm />);
  const form = setupForm(setupOptions);

  return {
    ...form,
  };
}

test('should display a error when value is invalid', async () => {
  const { submitForm } = setup();

  await submitForm();

  expect(await screen.findAllByRole('alert')).toHaveLength(2);

  expect(handleAddPost).not.toBeCalled();
});

test('should display a error when name is not filled', async () => {
  const { changeMessage, submitForm } = setup();

  await changeMessage('Hello world!');

  await submitForm();

  expect(await screen.findByRole('alert')).toBeInTheDocument();
  expect(handleAddPost).not.toBeCalled();
});

test('should display a error when message is not filled', async () => {
  const { changeName, submitForm } = setup();
  await changeName('Hello World!');

  await submitForm();

  expect(await screen.findByRole('alert')).toBeInTheDocument();
  expect(handleAddPost).not.toBeCalled();
});

test('should display a error when upload file with invalid type', async () => {
  const { avatarField, submitForm, changeMessage, changeName, uploadFile } = setup({ applyAccept: false });

  const file = new File(['Hello World!'], 'test.txt', {
    type: 'text/plain',
  });

  await changeName('Igor');
  await changeMessage('Hello world!');
  await uploadFile(file);

  await submitForm();

  expect(avatarField.files).toHaveLength(1);
  expect(avatarField.files?.item(0)).toStrictEqual(file);

  expect(await screen.findByRole('alert')).toBeInTheDocument();

  expect(handleAddPost).not.toBeCalled();
});

test('should upload avatar', async () => {
  const { file, uploadFile, clickButtonUpload, avatarField } = setup();

  await clickButtonUpload();
  await uploadFile();

  await waitFor(() => screen.findByRole('button', { name: /Remove Avatar Image/ }));

  expect(avatarField.files).toHaveLength(1);
  expect(avatarField.files?.item(0)).toStrictEqual(file);
});

test('should remove avatar', async () => {
  const { file, avatarField, uploadFile, removeAvatar } = setup();

  await uploadFile();

  await waitFor(() => screen.findByRole('button', { name: /Remove Avatar Image/ }));

  expect(avatarField.files).toHaveLength(1);
  expect(avatarField.files?.item(0)).toStrictEqual(file);

  await removeAvatar();

  expect(avatarField.files).toHaveLength(0);
  expect(avatarField.files?.item(0)).toBeNull();
});

test('should clear all fields when press discard', async () => {
  let { nameField, avatarField, messageField, changeName, changeMessage, uploadFile, discardForm, file } = setup();

  const user = 'Igor';
  const message = 'Hello world!';

  await changeName(user);

  await changeMessage(message);

  await uploadFile();

  expect(nameField).toHaveValue(user);
  expect(messageField).toHaveValue(message);
  expect(avatarField.files).toHaveLength(1);
  expect(avatarField.files?.[0]).toStrictEqual(file);
  expect(avatarField.files?.item(0)).toStrictEqual(file);
  expect(avatarField).not.toBeInTheDocument();

  await discardForm();

  avatarField = screen.getByLabelText<HTMLInputElement>(/Upload Avatar/);

  expect(nameField).toHaveValue('');
  expect(messageField).toHaveValue('');
  expect(avatarField.files).toHaveLength(0);
  expect(avatarField.files?.[0]).toBeUndefined();
  expect(avatarField.files?.item(0)).toBeNull();
});

test('should clear all fields when submit', async () => {
  let { nameField, messageField, avatarField, changeName, changeMessage, uploadFile, submitForm, file } = setup();
  const user = 'Igor';
  const message = 'Brew is soo good!';

  await changeName(user);
  await changeMessage(message);
  await uploadFile();

  expect(nameField).toHaveValue(user);
  expect(messageField).toHaveValue(message);
  expect(avatarField.files).toHaveLength(1);
  expect(avatarField.files?.item(0)).toStrictEqual(file);

  await submitForm();

  avatarField = screen.getByLabelText(/Upload Avatar Image/);

  expect(nameField).toHaveValue('');
  expect(messageField).toHaveValue('');
  expect(avatarField.files).toHaveLength(0);
  expect(avatarField.files?.item(0)).toBeNull();
});
