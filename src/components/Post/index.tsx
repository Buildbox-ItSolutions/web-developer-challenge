import * as React from 'react';
import { useTheme } from 'styled-components';

import { ReactComponent as DeleteIcon } from '@/assets/delete.svg';

import { useDisplayImage } from '@/hooks';

import { Body, Container, Content, Header, PostText } from './styled';
import Avatar from '@/components/Avatar';
import Text from '@/components/Text';
import Button from '@/components/Button';

import type { Post as PostType } from '@/types';

type Props = {
  post: PostType;
  handleRemovePost: (id: string) => void;
};

export default function Post({ post, handleRemovePost }: Props) {
  const theme = useTheme();
  const [img, uploader] = useDisplayImage();

  React.useEffect(() => {
    if (post.avatar && post.avatar.length !== 0) {
      uploader(undefined, post.avatar);
    }
  }, [post.avatar, uploader]);

  return (
    <Container>
      <Header>
        <Button
          type="button"
          aria-label="Excluir"
          onClick={() => handleRemovePost(post.id)}
          variant="icon"
        >
          <DeleteIcon />
        </Button>
      </Header>
      <Body>
        <Avatar src={img} name={post.name} />
        <Content>
          <PostText
            fontSize="16px"
            lineHeight="20px"
            color={theme.text.primary}
          >
            {post.message}
          </PostText>
          <Text
            fontSize="12px"
            fontWeight="500"
            lineHeight="16px"
            letterSpacing="0.29px"
            color={theme.black[100]}
          >
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
