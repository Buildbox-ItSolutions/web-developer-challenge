import { PostCard, PostContent, RemoveButton } from "_components";
import { Body, Header } from "./styles";
import { Post } from "_types";

interface PublishedPostProps extends Post {
  onRemove: () => any;
}

export const PublishedPost = ({
  message,
  name,
  photo,
  onRemove,
}: PublishedPostProps) => {
  return (
    <PostCard marginTop={8} marginBottom={8} padding={0}>
      <Header>
        <RemoveButton onClick={onRemove} />
      </Header>
      <Body>
        <PostContent photo={photo} message={message} name={name} />
      </Body>
    </PostCard>
  );
};
