import * as S from "./styles";
import deletePost from "../../assets/images/delete.svg";
import { usePosts } from "../../hooks/usePosts";
import Post from "../../types/Post";

export function FeedPost(post: Post) {
  const { removePost } = usePosts();

  return (
    <S.Feed>
      <S.Container data-cy='newPost'>
        <S.ContentWrapper>
          <button data-cy='removePostButton' className="button-remove" onClick={() => removePost(post)}>
            <img src={deletePost} alt='Button for remove post'/>
          </button>
          <S.InfoWrapper>
            <img data-cy='postPicture' className="post-photo" src={post.image} alt={`Image of ${post.author}`}/>
            <div className="post-content">
              <p data-cy='postMsg' >{post.msg}</p>
              <div className="author-wrapper">
                <span>Enviado por</span>
                <p data-cy='postAuthor' >{post.author}</p>
              </div>
            </div>
          </S.InfoWrapper>
        </S.ContentWrapper>
      </S.Container>
    </S.Feed>
  );
}

export default FeedPost;
