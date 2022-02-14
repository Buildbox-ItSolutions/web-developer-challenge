import React from 'react';
import { deleteFeed } from '../../services/feedServices';
import { Feed } from '../../types/feed';
import DeleteButton from '../DeleteButton';

import {
  Container,
  ContentContainer,
  DeleteButtonContainer,
  MessageContainer,
  PhotoContainer,
  PhotoImg,
  SendByContainer,
} from './styles';

type Props = {
  id: number;
  photoUrl?: string | null;
  message: string;
  name: string;
  afterClickDelete: (feed: Feed[]) => void;
};

const Post: React.FC<Props> = ({
  photoUrl,
  name,
  message,
  id,
  afterClickDelete,
}) => {
  const onClick = () => {
    deleteFeed(id).then((feed) => {
      afterClickDelete(feed);
    });
  };

  return (
    <Container>
      <DeleteButtonContainer>
        <DeleteButton onClick={onClick} />
      </DeleteButtonContainer>
      <ContentContainer>
        <PhotoContainer>
          <PhotoImg src={photoUrl || ''} alt={`foto do ${name}`} />
        </PhotoContainer>
        <MessageContainer>
          <p>{message}</p>
          <SendByContainer>
            <small>Enviado por</small>
            <span>{name}</span>
          </SendByContainer>
        </MessageContainer>
      </ContentContainer>
    </Container>
  );
};

export default Post;
