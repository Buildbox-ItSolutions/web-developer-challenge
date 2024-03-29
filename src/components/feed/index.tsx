import { useStore } from "@/store";
import { EmptyFeed, FeedContainer, PostContainer, PostsList } from "./styles";
import deleteIcon from "@/assets/icons/delete.svg";
import unknownAvatarImg from "@/assets/images/unknown-avatar.jpeg";
import smileySadIcon from "@/assets/icons/smiley-sad.svg";

export function Feed() {
  const posts = useStore((state) => state.posts);
  const deletePost = useStore((state) => state.deletePost);

  if (!posts.length)
    return (
      <EmptyFeed>
        <img src={smileySadIcon} alt="" />
        <span>Sem posts por enquanto...</span>
      </EmptyFeed>
    );

  return (
    <FeedContainer>
      <h2>Feed</h2>
      <PostsList>
        {posts.map((post) => (
          <PostContainer key={post.id}>
            <button className="delete-btn" onClick={() => deletePost(post.id)}>
              <img src={deleteIcon} alt="" className="delete-icon" />
            </button>
            <img
              src={post.avatarImg || unknownAvatarImg}
              alt=""
              className="avatar-img"
            />
            <div className="texts-container">
              <p>{post.message}</p>

              <div>
                <span>Enviado por</span>
                <strong>{post.name}</strong>
              </div>
            </div>
          </PostContainer>
        ))}
      </PostsList>
    </FeedContainer>
  );
}
