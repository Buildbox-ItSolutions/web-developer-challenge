import { Container, ContainerBody, H5, TextContainer } from "./styles";
import logo from "../../assets/images/logo.svg";
import { XIcon } from "../Icons";
import { usePostsStore } from "../../stores/Posts";
import { photoDescription } from "../PostCard/mockLorem";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const FeedCard: React.FC<Props> = () => {
  const { posts, removingPosts, removePost } = usePostsStore((state) => ({
    posts: state.posts,
    removingPosts: state.removingPosts,
    removePost: state.removePost
  }));

  const handleRemovePost = (index: string) => {
    removePost(index)
  }

  return (
    <>
      {posts?.length > 0 && <H5 className="feed">Feed</H5>}
      {posts?.map((post) => (
        <React.Fragment key={post.id}>
          <Container className={removingPosts.includes(post.id) ? 'fade-out' : ''}>
            <button
              type="button"
              onClick={() => handleRemovePost(post.id)}
              className="delete-button">
              <XIcon />
            </button>
            <ContainerBody>
              <img src={post?.urlSmall ? post?.urlSmall : logo} alt="post-image" />
              <TextContainer>
                <p>
                  {post?.description ?? photoDescription.description}
                </p>
                <span>Enviado por:</span>
                <span>
                  {post?.userName ?? 'Anônimo'}
                </span>
              </TextContainer>
            </ContainerBody>
          </Container>
        </React.Fragment>
      ))}
    </>
  )
}
FeedCard.displayName = 'FeedCard';
export type FeedCardProps = Props;
export default FeedCard;
