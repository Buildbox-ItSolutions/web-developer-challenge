import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { Button } from '../../../components/Button';
import { TextArea } from '../../../components/TextArea';
import { Input } from '../../../components/Input';
import { ImageInput } from '../../../components/ImageInput';

import { useAppDispatch } from '../../../app/hooks';
import { IPreviewImage } from '../../../models/IPreviewImage';

import deleteIcon from '../../../assets/icons/trash.svg';

import { Container } from './styles';
import { createPost } from '../postsSlice';
import { Toast } from '../../../components/Toast';

export function CreatePost() {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<IPreviewImage>();

  const [typeButton, setTypeButton] = useState<'disabled' | 'primary'>(
    'disabled',
  );

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const selectedImage = event.target.files.item(0);

      if (selectedImage) {
        setImage(selectedImage);

        const selectedImagePreview = {
          name: selectedImage.name,
          url: URL.createObjectURL(selectedImage),
        };

        setPreviewImage(selectedImagePreview);
      }
    }
  }

  function removeImage() {
    setImage(undefined);
    setPreviewImage(undefined);
  }

  useEffect(() => {
    if (name && message) {
      setTypeButton('primary');
    } else {
      setTypeButton('disabled');
    }
  }, [name, message]);

  function dischargeData() {
    setName('');
    setMessage('');
    setPreviewImage(undefined);
    setImage(undefined);
  }

  function handleSubmit() {
    const post = {
      name: name,
      message: message,
      previewImage: previewImage,
      image: image,
    };

    dispatch(createPost(post));

    dischargeData();

    toast.success(
      <Toast
        type="success" 
        title="Poste Criado" 
        message="Sua postagem foi realizada com sucesso, continue enviando mais postagens!" 
      />
    );
  }

  return (
    <>
      <Container>
        <div className="preview-image">
          <>
            <ImageInput
              onChange={handleSelectImage}
              getPreviewImage={previewImage}
            />
            
            {image || previewImage ? 
              <button type="button" onClick={() => removeImage()}>
                <img src={deleteIcon} alt="Excluir Imagem" />
              </button> 
              : null
            }
          </>
        </div>

        <Input
          placeholder="Digite seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <TextArea
          placeholder="Mensagem"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />

        <div className="buttons">
          <Button typeButton="secondary" onClick={dischargeData}>
            Descartar
          </Button>

          <Button typeButton={typeButton} onClick={handleSubmit}>
            Publicar
          </Button>
        </div>
      </Container>
    </>
  );
};
