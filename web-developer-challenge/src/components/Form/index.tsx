import { useContext, MouseEvent, useEffect, useState } from 'react';
import Context from '../../context/Context';
import * as S from './styles';

export function Form() {
  const { userName, setUserName } = useContext(Context);
  const { userMessage, setUserMessage } = useContext(Context);
  const { imgProfile, setImgProfile } = useContext(Context);
  const { feed, setFeed } = useContext(Context);

  const hasName = userName !== undefined && userName.length !== 0;
  const hasMessage = userMessage !== undefined && userMessage.length !== 0;

  function onClickDiscard(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    setUserMessage('');
    setUserName('');
  }

  function onClickPublish(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    const newMessage = { imgProfile, userName, userMessage };
    setFeed([newMessage, ...(feed || [])]);
    setUserMessage('');
  }

  return (
    <S.Container>
      <S.Form>
        <S.InputName
          type='text'
          value={userName}
          placeholder='Digite seu nome'
          onChange={({ target }) => setUserName(target.value)}
        />

        <S.InputText
          value={userMessage}
          placeholder='Mensagem'
          onChange={({ target }) => setUserMessage(target.value)}
        />

        <S.ButtonsContainer>
          <S.DiscardButton type='button' onClick={onClickDiscard}>
            Descartar
          </S.DiscardButton>
          <S.PublishButton
            type='submit'
            onClick={onClickPublish}
            disabled={!hasName || !hasMessage}
          >
            Publicar
          </S.PublishButton>
        </S.ButtonsContainer>
      </S.Form>
    </S.Container>
  );
}
