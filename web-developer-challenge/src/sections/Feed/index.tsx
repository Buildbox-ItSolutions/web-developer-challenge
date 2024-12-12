import { useCallback, useContext, useState } from 'react';
import Context from '../../context/Context';
import close from '../../assets/close.svg';
import * as S from './styles';

export function Feed() {
  const { feed, setFeed } = useContext(Context);

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const remove = (index: number) => {
    if (feed !== undefined) {
      feed.splice(index, 1);
      setFeed(feed);
      forceUpdate();
    }
  };

  return (
    <>
      {feed !== undefined &&
        feed.map(({ imgProfile, userName, userMessage }, index) => (
          <S.Container key={index}>
            <S.AvatarContainer>
              <S.Avatar src={imgProfile} alt='Imagem de perfil' />
            </S.AvatarContainer>

            <S.TextContainer>
              <S.Message>{userMessage}</S.Message>
              <S.Field>Enviado por</S.Field>
              <S.Name>{userName}</S.Name>
            </S.TextContainer>
            <S.CloseButton type='button' onClick={() => remove(index)}>
              <S.Close src={close} />
            </S.CloseButton>
          </S.Container>
        ))}
    </>
  );
}
