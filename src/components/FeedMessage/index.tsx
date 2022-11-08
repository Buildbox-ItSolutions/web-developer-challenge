import { useCallback } from 'react';

import deleteImage from '@assets/delete.png';
import { useMessage } from '@hooks/message';

import * as S from './styles';

type PropFeedMessage = {
  id?: string;
  name: string;
  description: string;
  image?: string;
};

export const FeedMessage = ({
  id = '',
  image,
  name,
  description,
}: PropFeedMessage) => {
  const { removeMessage } = useMessage();

  const handleDeleteMessage = useCallback(
    (id: string) => {
      removeMessage(id);
    },
    [id],
  );

  return (
    <S.Container data-cy="feed-card">
      <S.DeleteFeed onClick={() => handleDeleteMessage(id)}>
        <img src={deleteImage} alt="delete" />
      </S.DeleteFeed>
      <S.Card>
        <S.MessageGroup>
          <S.ImageUser src={image} alt="user" />
          <div>
            <S.Message data-cy="feed-card-description">{description}</S.Message>
            <S.SentBy>Enviado por</S.SentBy>
            <S.Author data-cy="feed-card-author">{name}</S.Author>
          </div>
        </S.MessageGroup>
      </S.Card>
    </S.Container>
  );
};
