import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { deleteFeed } from '../../services/feedServices';
import { colors } from '../../themes/colors';
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
  const [isDeleating, setIsDeleating] = useState(false);
  const onClick = () => {
    setIsDeleating(true);
    deleteFeed(id)
      .then((feed) => {
        afterClickDelete(feed);
      })
      .finally(() => {
        setIsDeleating(false);
      });
  };

  return (
    <Container>
      <DeleteButtonContainer>
        {isDeleating ? (
          <ClipLoader color={colors.text} />
        ) : (
          <DeleteButton onClick={onClick} />
        )}
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
