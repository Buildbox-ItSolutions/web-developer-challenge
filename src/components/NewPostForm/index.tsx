import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaImage, FaTrash } from 'react-icons/fa';
import { PostForm, PostImage, Buttons } from './styles';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    image: yup
      .mixed()
      .test(
        'required',
        'Adicione uma imagem válida para seu post.',
        (value) => value && value.length
      )
      .test(
        'fileSize',
        'O tamanho da imagem é muito alta, isso pode prejudicar o desempenho do seu blog.',
        (value) => value && value[0] && value[0].size <= 2000000
      )
      .test(
        'type',
        'O formato do arquivo selecionado não é válido.',
        (value) => {
          return (
            value &&
            value[0] &&
            (value[0].type === 'image/png' ||
              value[0].type === 'image/jpg' ||
              value[0].type === 'image/jpeg')
          );
        }
      ),
    name: yup.string().required('Informe seu nome antes de postar.'),
    text: yup.string().required('Adicione um texto para seu post.'),
  })
  .required();

type InputsType = {
  image: string;
  name: string;
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

  const [currentImage, setCurrentImage] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    if (currentImage) {
      setImageUrl(URL.createObjectURL(currentImage as any));
    }
  }, [currentImage]);

  const handleNewPost: SubmitHandler<InputsType> = (data) => {
    const { image, name, text } = data;
  };

  const resetImageForm = () => {
    setValue('image', '');
    setImageUrl('');
    setCurrentImage('');
  };

  return (
    <PostForm onSubmit={handleSubmit(handleNewPost)}>
      <PostImage>
        {imageUrl && currentImage ? (
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
            onChange: (event) => setCurrentImage(event.target.files[0]),
          })}
        />
      </PostImage>

      <label htmlFor="nome">Nome</label>
      <input id="nome" {...register('name', { required: true })} />
      {<span>{errors.name?.message}</span>}

      <label htmlFor="text">Mensagem</label>
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
            watch('name') && watch('text') && watch('image') && !errors.image
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
