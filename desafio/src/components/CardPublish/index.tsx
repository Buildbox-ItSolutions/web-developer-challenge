import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styles'; // Importar estilos do arquivo separado
import IconPublishImg from '../../assets/icons8-update-50.png';

type FormData = {
  name: string;
  message: string;
  image: File | null;
};

type Props = {
  onAddPost: (data: FormData) => void;
};

const CardPublish: React.FC<Props> = ({ onAddPost }) => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const onSubmit = (data: FormData) => {
    onAddPost({ ...data, image: selectedImage });
    reset();
    setSelectedImage(null);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleClickImage = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <S.CardPublishContainer>
      <S.CardPublishWrapper>
        <S.PublishImage
          src={selectedImage ? URL.createObjectURL(selectedImage) : IconPublishImg}
          alt=""
          onClick={handleClickImage}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('image')}
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <S.InputNameContainer>
            <S.InputControl
              {...register('name', { required: true })}
              type="text"
              placeholder="Nome"
            />
          </S.InputNameContainer>
          <S.InputPostContainer>
            <S.TextareaControl
              {...register('message', { required: true })}
              placeholder="Mensagem"
            />
          </S.InputPostContainer>
          <S.ButtonContainer>
            <S.ClearButton type="button" onClick={() => { reset(); setSelectedImage(null); }}>
              Descartar
            </S.ClearButton>
            <S.SubmitButton type='submit'>Publicar</S.SubmitButton>
          </S.ButtonContainer>
        </form>
      </S.CardPublishWrapper>
    </S.CardPublishContainer>
  );
};

export default CardPublish;
