import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePosts } from '../../hooks/usePosts';
import { ImageResizer } from '../../utils/imageResizer';
import * as yup from 'yup';
import { PostForm, PostImage, Buttons } from './styles';
import { FaImage, FaTrash } from 'react-icons/fa';

const schema = yup
  .object()
  .shape({
    image: yup
      .mixed()
      .test(
        'required',
        'Adicione uma imagem válida para seu post.',
        (value) => value && value.length
      ),
    author: yup.string().required('Informe seu nome antes de postar.'),
    text: yup.string().required('Adicione um texto para seu post.'),
  })
  .required();

type InputsType = {
  image: string;
  author: string;
  text: string;
};

export const NewPostForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<InputsType>({ resolver: yupResolver(schema) });
  const [imageUrl, setImageUrl] = useState<string>('');
  const { setPosts } = usePosts();

  const resetImageForm = () => {
    setValue('image', '');
    setImageUrl('');
  };

  const handleNewPost: SubmitHandler<InputsType> = ({
    image,
    author,
    text,
  }) => {
    const newPost = { image, author, text };

    setPosts((prevPosts) => [...prevPosts, { ...newPost }]);

    resetImageForm();
    reset();
  };

  const handleImageSelect = async (event: Event) => {
    const urlImage = await ImageResizer(event);

    if (typeof urlImage !== 'string') {
      return;
    }
    setValue('image', urlImage);
    setImageUrl(urlImage);
  };

  return (
    <PostForm onSubmit={handleSubmit(handleNewPost)}>
      <PostImage>
        {imageUrl ? (
          <>
            <picture>
              <img src={imageUrl} alt="Imagem para o ser postada." />
            </picture>
            <button onClick={resetImageForm}>
              <FaTrash />
            </button>
          </>
        ) : (
          <label htmlFor="image">
            <FaImage />
          </label>
        )}
        <p>{errors.image?.message}</p>
        <input
          id="image"
          type="file"
          accept=".jpg, .jpeg, .png"
          {...register('image', {
            onChange: handleImageSelect,
          })}
        />
      </PostImage>

      <label htmlFor="nome">Nome *</label>
      <input id="nome" {...register('author', { required: true })} />
      {<span>{errors.author?.message}</span>}

      <label htmlFor="text">Mensagem *</label>
      <textarea id="text" {...register('text', { required: true })} />
      {<span>{errors.text?.message}</span>}

      <Buttons>
        <button
          onClick={() => {
            resetImageForm();
            reset();
          }}
        >
          Descartar
        </button>

        <button
          type="submit"
          disabled={
            watch('author') && watch('text') && watch('image') && !errors.image
              ? false
              : true
          }
        >
          Publicar
        </button>
      </Buttons>
    </PostForm>
  );
};
