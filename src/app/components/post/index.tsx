/* eslint-disable jsx-a11y/alt-text */
import { usePost } from '@/hooks';
import {
  Author,
  AuthorLabel,
  CloseButton,
  Container,
  Content,
  Image,
  LoadingCloseButton,
  Message,
} from './styles';
import { PostProps } from './types';

export function Post({ id, message, author, imageURL }: PostProps) {
  const { deletePost, deletingPost } = usePost();

  return (
    <Container>
      {deletingPost ? (
        <LoadingCloseButton />
      ) : (
        <CloseButton onClick={() => deletePost(id)} />
      )}
      <Image $src={imageURL} />
      <Content>
        <Message>{message}</Message>
        <AuthorLabel>Enviado por</AuthorLabel>
        <Author>{author}</Author>
      </Content>
    </Container>
  );
}
