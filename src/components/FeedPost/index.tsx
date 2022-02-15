import * as S from "./styles";
import deletePost from "../../assets/images/delete.svg";
import { usePosts } from "../../hooks/usePosts";
import Post from "../../types/Post";

export function FeedPost(post: Post) {
  const { removePost } = usePosts();

  return (
    <S.Feed>
      <S.Container>
        <S.ContentWrapper>
          <button className="button-remove" onClick={() => removePost(post)}>
            <img src={deletePost} alt='Button for remove post'/>
          </button>
          <S.InfoWrapper>
            <img className="post-photo" src={post.image} alt={`Image of ${post.author}`}/>
            <div className="post-content">
              <p>{post.msg}</p>
              <div className="author-wrapper">
                <span>Enviado por</span>
                <p>{post.author}</p>
              </div>
            </div>
          </S.InfoWrapper>
        </S.ContentWrapper>
      </S.Container>
    </S.Feed>
  );
}

export default FeedPost;
