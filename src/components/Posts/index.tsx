import React from 'react';

/* Images */
import Cancel from 'assets/images/delete.png';

/* Types */
import { PostsProps } from 'types/posts';

/* Styles */
import {
  Content,
  Delete,
  Wrapper,
  Image,
  Description,
  Sent,
  Author,
} from './styles';

const Posts: React.FC<PostsProps> = ({
  id,
  description,
  author,
  image,
  handleDelete,
}) => {
  return (
    <Content>
      <Delete onClick={handleDelete}>
        <img alt="Delete" src={Cancel} />
      </Delete>
      <Wrapper>
        <Image alt={id} src={image} />
        <div>
          <Description>{description}</Description>
          <Sent>Enviado por</Sent>
          <Author>{author}</Author>
        </div>
      </Wrapper>
    </Content>
  );
};

export default Posts;
