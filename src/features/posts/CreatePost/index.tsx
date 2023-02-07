import { ChangeEvent, useEffect, useState } from 'react';

import { Button } from '../../../components/Button';
import { TextArea } from '../../../components/TextArea';
import { Input } from '../../../components/Input';
import { ImageInput } from '../../../components/ImageInput';

import { useAppDispatch } from '../../../app/hooks';
import { IPreviewImage } from '../../../models/IPreviewImage';

import deleteIcon from '../../../assets/icons/trash.svg';

import { Container } from './styles';
import { createPost } from '../postsSlice';

export function CreatePost() {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<IPreviewImage>();

  const [getTypeButton, setTypeButton] = useState<'disabled' | 'primary'>(
    'disabled',
  );
  const [getMsgNameField, setMsgNameField] = useState<boolean>(false);
  const [getMsgMessageField, setMsgMessageField] = useState<boolean>(false);

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

  function verifyInputValue(field: string, value: string) {
    if (field === 'name') {
      setName(value);
    } else if (field === 'message') {
      setMessage(value);
    }
  }

  useEffect(() => {
    if (name.length > 0 && message.length > 0) {
      setTypeButton('primary');

      setMsgMessageField(false);
      setMsgNameField(false);
    } else {
      setTypeButton('disabled');

      if (name.length > 0) {
        setMsgNameField(false);
      }
      if (message.length > 0) {
        setMsgMessageField(false);
      }
    }
  }, [name, message]);

  function verifyOnBlur(field: string) {
    if (field === 'name') {
      if (name.length <= 0) {
        setMsgNameField(true);
      } else {
        setMsgNameField(false);
      }
    }
    if (field === 'message') {
      if (message.length <= 0) {
        setMsgMessageField(true);
      } else {
        setMsgMessageField(false);
      }
    }
  }

  function handleSubmit() {
    const post = {
      name: name,
      message: message,
      previewImage: previewImage,
      image: image,
    };

    dispatch(createPost(post));

    setName('');
    setMessage('');
    setPreviewImage(undefined);
    setImage(undefined);
  }

  function dischargeData() {
    setName('');
    setMessage('');
    setPreviewImage(undefined);
    setImage(undefined);
  }

  return (
    <>
      <Container>
        <div className="preview-image">
          <ImageInput
            onChange={handleSelectImage}
            getPreviewImage={previewImage}
          />
          <button type="button" onClick={() => removeImage()}>
            <img src={deleteIcon} alt="Excluir Imagem" />
          </button>
        </div>

        <Input
          placeholder="Digite seu nome"
          id="name"
          value={name}
          getMsgNameField={getMsgNameField}
          onChange={e => verifyInputValue(e.target.id, e.target.value)}
          onBlur={e => verifyOnBlur(e.target.id)}
        />

        <TextArea
          placeholder="Mensagem"
          id="message"
          value={message}
          getMsgMessageField={getMsgMessageField}
          onChange={e => verifyInputValue(e.target.id, e.target.value)}
          onBlur={e => verifyOnBlur(e.target.id)}
        />

        <div className="buttons">
          <Button typeButton="secondary" onClick={dischargeData}>
            Descartar
          </Button>

          <Button typeButton={getTypeButton} onClick={handleSubmit}>
            Publicar
          </Button>
        </div>
      </Container>
    </>
  );
};
