import * as React from 'react';
import { useTheme } from 'styled-components';

import { ReactComponent as DeleteIcon } from '@/assets/delete.svg';

import { Body, Container, Content, Header, PostText, PostShowMoreText, AvatarContainer } from './styled';
import Avatar from '@/components/Avatar';
import Text from '@/components/Text';
import Button from '@/components/Button';

import type { Post as PostType } from '@/types';

type Props = {
  post: PostType;
  handleRemovePost: (id: string) => void;
};

export default function Post({ post, handleRemovePost }: Props) {
  const needToShowReadMore = post.message.length >= 215;
  const [isReadMore, setisReadMore] = React.useState(needToShowReadMore);
  const theme = useTheme();

  const onRemovePost = () => handleRemovePost(post.id);

  const handleShowReadMore = () => setisReadMore(!isReadMore);

  return (
    <Container>
      <Header>
        <Button type="button" aria-label="Excluir" onClick={onRemovePost} variant="icon">
          <DeleteIcon />
        </Button>
      </Header>
      <Body>
        <AvatarContainer>
          <Avatar includeMediaQuery src={post.avatar} name={post.name} />
        </AvatarContainer>
        <Content>
          <PostText fontSize="16px" readMore={isReadMore} lineHeight="20px" color={theme.text.primary}>
            {isReadMore ? post.message.substring(0, 215) : post.message}
            {needToShowReadMore && (
              <PostShowMoreText as="button" onClick={handleShowReadMore}>
                {isReadMore ? '...ler mais' : ' mostrar menos'}
              </PostShowMoreText>
            )}
          </PostText>

          <Text fontSize="12px" fontWeight="500" lineHeight="16px" letterSpacing="0.29px" color={theme.black[100]}>
            Enviado por
          </Text>
          <Text fontSize="14px" lineHeight="18px">
            {post.name}
          </Text>
        </Content>
      </Body>
    </Container>
  );
}
