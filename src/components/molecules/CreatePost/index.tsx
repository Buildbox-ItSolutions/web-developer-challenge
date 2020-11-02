import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createPost } from 'store/ducks/posts/actions';

import { PhotoInput, Input, Textarea, Button } from 'components/atoms';

import { PreviewImage } from 'models/PreviewImage';
import { Container } from './styles';

import deleteIcon from '../../../assets/icons/trash.svg';

const CreatePost: React.FC = () => {
  const dispatch = useDispatch();

  const [getName, setName] = useState<string>('');
  const [getMessage, setMessage] = useState<string>('');
  const [getImage, setImage] = useState<File>();
  const [getPreviewImage, setPreviewImage] = useState<PreviewImage>();

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
    if (getName.length > 0 && getMessage.length > 0) {
      setTypeButton('primary');

      setMsgMessageField(false);
      setMsgNameField(false);
    } else {
      setTypeButton('disabled');

      if (getName.length > 0) {
        setMsgNameField(false);
      }
      if (getMessage.length > 0) {
        setMsgMessageField(false);
      }
    }
  }, [getName, getMessage]);

  function verifyOnBlur(field: string) {
    if (field === 'name') {
      if (getName.length <= 0) {
        setMsgNameField(true);
      } else {
        setMsgNameField(false);
      }
    }
    if (field === 'message') {
      if (getMessage.length <= 0) {
        setMsgMessageField(true);
      } else {
        setMsgMessageField(false);
      }
    }
  }

  function handleSubmit() {
    const data = {
      name: getName,
      message: getMessage,
      previewImage: getPreviewImage,
      image: getImage,
      likes: 0,
    };

    dispatch(createPost(data));

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
          <PhotoInput
            onChange={handleSelectImage}
            getPreviewImage={getPreviewImage}
          />
          <button type="button" onClick={() => removeImage()}>
            <img src={deleteIcon} alt="Excluir Imagem" />
          </button>
        </div>
        <Input
          placeholder="Digite seu nome"
          id="name"
          value={getName}
          getMsgNameField={getMsgNameField}
          onChange={e => verifyInputValue(e.target.id, e.target.value)}
          onBlur={e => verifyOnBlur(e.target.id)}
        />
        <Textarea
          placeholder="Mensagem"
          id="message"
          value={getMessage}
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

export default CreatePost;
