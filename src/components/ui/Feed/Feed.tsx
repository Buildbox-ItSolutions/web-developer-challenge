import stores from "../../../stores";
import DeleteIcon from "../../../assets/delete.svg";

import {
  FeedTitle,
  PostContainer,
  PostDeleteContainer,
  PostImage,
  PostImageContainer,
  PostMessage,
  PostNameContainer,
  PostText,
  PostName,
  PostNameSendBy,
  PostContent,
  NoPostText,
} from "./styles";

function Feed() {
  const feedPosts = stores.useFeedStore((state) => state.posts);
  const deletePost = stores.useFeedStore((state) => state.deletePost);

  return (
    <>
      <FeedTitle>Feed</FeedTitle>
      {feedPosts.length > 0 ? (
        feedPosts.map((post, postIndex) => {
          return (
            <PostContainer key={postIndex}>
              <PostDeleteContainer onClick={() => deletePost(postIndex)}>
                <img src={DeleteIcon} />
              </PostDeleteContainer>

              <PostContent>
                <PostImageContainer>
                  <PostImage src={URL.createObjectURL(post.image)} alt="" />
                </PostImageContainer>

                <PostText>
                  <PostMessage>{post.message}</PostMessage>
                  <PostNameContainer>
                    <PostNameSendBy>Enviado por</PostNameSendBy>
                    <PostName>{post.name}</PostName>
                  </PostNameContainer>
                </PostText>
              </PostContent>
            </PostContainer>
          );
        })
      ) : (
        <NoPostText>Nenhum post</NoPostText>
      )}
    </>
  );
}

export default Feed;
