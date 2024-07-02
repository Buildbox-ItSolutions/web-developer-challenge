/* eslint-disable jsx-a11y/alt-text */
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

export function Post({ message, author }: PostProps) {
  return (
    <Container>
      <CloseButton />
      <Image />
      <Content>
        <Message>{message}</Message>
        <AuthorLabel>Enviado por</AuthorLabel>
        <Author>{author}</Author>
      </Content>
    </Container>
  );
}
