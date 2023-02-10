import React, { useState } from 'react';
import { uid } from 'uid';
import imagePlaceholder from '../../../../assets/image-placeholder.png';
import { getBase64 } from '../../../../utils';
import { IPost } from '../../Post.types';

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

  const setValue = (name: string, value: string) =>
    setValues((state) => ({ ...state, [name]: value }));

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.name, e.target.value);

  const onChangeFiles = async (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.name, await getBase64(e.target.files!.item(0)!));

  const reset = () => setValues(initialValues);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post = { ...values, image: values.image!, id: uid() };
    addPost(post);
    reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="image-field">
          <img src={values.image || imagePlaceholder} />
        </label>
        <input
          id="image-field"
          name="image"
          aria-label="campo imagem"
          type="file"
          onChange={onChangeFiles}
        />
      </div>
      <input
        id="createdBy-field"
        name="createdBy"
        aria-label="nome"
        placeholder="Digite seu nome"
        value={values.createdBy}
        onChange={onChangeText}
      />
      <input
        id="createdBy-field"
        name="message"
        aria-label="mensagem"
        placeholder="Mensagem"
        value={values.message}
        onChange={onChangeText}
      />
      <div>
        <button type="button" onClick={reset}>
          Descartar
        </button>
        <button>Publicar</button>
      </div>
    </form>
  );
}

export default PostForm;
