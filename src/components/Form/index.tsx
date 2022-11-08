import { memo, useEffect, useRef, useState } from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import TextArea from '@components/TextArea';
import UploadImage from '@components/UploadImage';
import { Message } from '@contexts/MessageContext';
import { useMessage } from '@hooks/message';

import * as S from './styles';

export const Form = memo(() => {
  const { addMessage } = useMessage();
  const [formValidated, setFormValidated] = useState(false);
  const [message, setMessage] = useState<Message>({
    name: '',
    description: '',
  });
  const uploadImageRef = useRef<any>();

  useEffect(() => {
    setFormValidated(false);
    if (message.name.length > 0 && message.description.length > 0) {
      setFormValidated(true);
    }
  }, [message]);

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setMessage({ ...message, [name]: value });
  };

  const handleSendMessage = () => {
    if (!formValidated) return;
    if (!message?.name || !message?.description) return;

    const body = {
      ...message,
      image: uploadImageRef.current.getFile(),
    };
    addMessage(body);
    setMessage({ name: '', description: '' });
    uploadImageRef.current.setFile(null);
  };

  const deleteMessage = () => {
    setMessage({ description: '', name: '' });
  };

  return (
    <S.Container>
      <UploadImage ref={uploadImageRef} />
      <Input
        name="name"
        value={message?.name}
        placeholder="Digite seu nome"
        onChange={handleInputs}
        cy="input-name"
      />

      <TextArea
        name="description"
        value={message?.description}
        placeholder="Mensagem"
        rows={3}
        onChange={handleInputs}
      />

      <S.ContainerButtons>
        <Button label="Descartar" typeButton="link" onClick={deleteMessage} />
        <Button
          label="Publicar"
          onClick={handleSendMessage}
          typeButton="submit"
          disabled={!formValidated}
        />
      </S.ContainerButtons>
    </S.Container>
  );
});
