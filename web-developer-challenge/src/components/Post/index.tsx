import { PostPhoto, StyledPost, PostText, PostTitle, PostName } from "./style";

type PostProps = {
  photo: string;
  name: string;
  message: string;
}

export function Post(props: PostProps) {
  return (
    <StyledPost>
      <PostPhoto>
        <img src={props.photo} alt={props.name} />
      </PostPhoto>
      <div>
        <PostText>
          {props.message}
        </PostText>
        <PostTitle>Enviado por</PostTitle>
        <PostName>{props.name}</PostName>
      </div>
    </StyledPost>
  );
}