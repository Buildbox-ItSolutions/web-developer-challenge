/* eslint-disable jsx-a11y/alt-text */
import { usePost } from '@/hooks';
import {
  Author,
  AuthorLabel,
  CloseButton,
  Container,
  Content,
  Image,
  Message,
} from './styles';
import { PostProps } from './types';

export function Post({ id, message, author }: PostProps) {
  const { deletePost } = usePost();

  return (
    <Container>
      <CloseButton onClick={() => deletePost(id)} />
      <Image />
      <Content>
        <Message>{message}</Message>
        <AuthorLabel>Enviado por</AuthorLabel>
        <Author>{author}</Author>
      </Content>
    </Container>
  );
}
