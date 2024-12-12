import React from 'react';

/* Components */
import Inputs from 'components/Inputs';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

/* Images */
import Empty from 'assets/images/empty.png';

/* Styles */
import { Content, ImageContent, Image, ButtonContent, Link } from './styles';

/* Types */
import { PublishPostsProps } from './types';

const PublishPosts: React.FC<PublishPostsProps> = ({
  newPost,
  handleClean,
  handleChange,
  handleAdding,
}) => {
  return (
    <Content>
      <ImageContent>
        <Image alt="Empty" src={Empty} />
      </ImageContent>
      <Inputs
        id="author"
        value={newPost.author}
        placeholder="Digite seu nome"
        handleChange={handleChange}
      />
      <TextArea
        id="description"
        value={newPost.description}
        placeholder="Mensagem"
        handleChange={handleChange}
      />
      <ButtonContent>
        <Link href="#clear" onClick={handleClean}>
          Descartar
        </Link>
        <Button
          disabled={newPost.author === '' || newPost.description === ''}
          onClick={handleAdding}
        />
      </ButtonContent>
    </Content>
  );
};

export default PublishPosts;
