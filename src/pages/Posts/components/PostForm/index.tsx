import React, { useState } from 'react';
import { uid } from 'uid';
import imagePlaceholder from '../../../../assets/image-placeholder.png';
import trashIcon from '../../../../assets/trash-icon.svg';
import { getBase64 } from '../../../../utils';
import { IPost } from '../../Post.types';
import {
  ButtonsWrapper,
  FileInput,
  FileInputImage,
  FileInputLabel,
  Form,
  Input,
  ResetButton,
  SubmitButton,
  TextArea,
  TrashButton,
} from './styles';

interface IForm extends Pick<IPost, 'createdBy' | 'message'> {
  image: string | null;
}

type Props = {
  addPost: (post: IPost) => void;
};

const initialValues: IForm = {
  createdBy: '',
  message: '',
  image: null,
};

function PostForm({ addPost }: Props) {
  const [values, setValues] = useState<IForm>(initialValues);

  const isValid = Object.values(values).every((value) => !!value);
  const hasImage = !!values.image;

  const reset = () => setValues(initialValues);
  const setValue = <T extends keyof IForm>(name: T, value: IForm[T]) =>
    setValues((state) => ({ ...state, [name]: value }));

  const removeImage = () => setValue('image', null);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValue(e.target.name as keyof IForm, e.target.value);

  const onChangeFiles = async (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.name as keyof IForm, await getBase64(e.target.files![0]!));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post = { ...values, image: values.image!, id: uid() };
    addPost(post);
    reset();
  };

  return (
    <Form onSubmit={onSubmit}>
      <FileInputLabel htmlFor="image-field">
        <FileInputImage hasImage={hasImage} src={values.image || imagePlaceholder} />
        {hasImage && (
          <TrashButton type="button" onClick={removeImage} aria-label="remover imagem">
            <img alt="Lixeira" src={trashIcon} />
          </TrashButton>
        )}
      </FileInputLabel>
      <FileInput
        accept=".jpg, .jpeg, .png"
        id="image-field"
        name="image"
        aria-label="campo imagem"
        type="file"
        onChange={onChangeFiles}
      />
      <Input
        id="createdBy-field"
        name="createdBy"
        aria-label="nome"
        placeholder="Digite seu nome"
        value={values.createdBy}
        onChange={onChangeText}
      />
      <TextArea
        id="createdBy-field"
        name="message"
        aria-label="mensagem"
        placeholder="Mensagem"
        value={values.message}
        onChange={onChangeText}
      />
      <ButtonsWrapper>
        <ResetButton type="button" onClick={reset}>
          Descartar
        </ResetButton>
        <SubmitButton disabled={!isValid}>Publicar</SubmitButton>
      </ButtonsWrapper>
    </Form>
  );
}

export default PostForm;
