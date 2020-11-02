import React from "react";
import { PostsTypes } from "../../../../GlobalStates/stores/posts/reducer";
import { FeedController } from "../../controllers/feedController";
import ExitIcon from "../../../../assets/delete.svg";
import Avatar from "../../../../assets/avatar.png";

import {
  Container,
  Post,
  Content,
  SendBy,
  ImageAvatar,
  Message,
  Exit,
  ListPost,
} from "./styles";

const Feed: React.FC<{ feedController: FeedController }> = ({
  feedController,
}) => {
  return (
    <Container>
      <span>Feed</span>
      <ListPost>
        {feedController.posts.map((post: PostsTypes, index: number) => (
          <Post key={index}>
            <Exit
              title="Deletar Post"
              onClick={() => feedController.handleDeletePost(index)}
            >
              <img src={ExitIcon} alt="" />
            </Exit>
            <ImageAvatar src={post.image.length === 0 ? Avatar : post.image} />
            <Content>
              <Message>{post.message}</Message>
              <SendBy>
                <span>Enviado por:</span>
                <span id="name">{post.name}</span>
              </SendBy>
            </Content>
          </Post>
        ))}
      </ListPost>
    </Container>
  );
};

const Wrapper: React.FC = () => {
  const feedController = new FeedController();
  return <Feed feedController={feedController} />;
};
export { Wrapper as Feed };
