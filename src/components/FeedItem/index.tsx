import React, { useState } from 'react';
import deleteIcon from '../../assets/delete.png';
import { useFeed } from '../../contexts/Feed';
import { Post } from '../../Interfaces/Post';
import AnimatedContainer from '../AnimatedContainer';
import {
  Container,
  ContentContainer,
  ImageContainer,
  Label,
  Message,
  Name,
  DeleteIcon,
} from './styles';

const FeedItem = ({ name, message, thumbUrl, _id }: Post) => {
  const [isRemoved, setIsRemoved] = useState<boolean>(false);

  const { removePost } = useFeed();
  const handleDelete = () => {
    if (_id) {
      setIsRemoved(true);
      removePost(_id);
    }
  };

  return (
    <AnimatedContainer show={!isRemoved}>
      <Container>
        <DeleteIcon
          onClick={handleDelete}
          src={deleteIcon}
          alt="Delete post button"
        />

        <ContentContainer>
          <ImageContainer src={`${thumbUrl}?key=${_id}`} />
          <div>
            <Message>{message} </Message>
            <Label>Enviado por</Label>
            <Name>{name}</Name>
          </div>
        </ContentContainer>
      </Container>
    </AnimatedContainer>
  );
};

export default FeedItem;
