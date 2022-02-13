import { FaWindowClose } from 'react-icons/fa';
import { PostType } from '../../context/PostsContext';
import { usePosts } from '../../hooks/usePosts';
import { PostContainer, PostContent } from './styles';

export const Post = ({ post }: { post: PostType }) => {
  const { posts, setPosts } = usePosts();

  const handleDeletePost = () => {
    const filteredPosts = posts.filter(
      (postItem) => postItem.image !== post.image
    );
    setPosts(filteredPosts);
  };

  return (
    <PostContainer>
      <div className="toDelete">
        <button onClick={handleDeletePost} title="Deletar post">
          <FaWindowClose />
        </button>
      </div>
      <PostContent>
        <picture>
          <img
            src={post.image}
            alt={`Imagem do post do autor ${post.author}`}
          />
        </picture>
        <div className="content">
          <p>{post.text}</p>
          <div className="autor">
            Enviado por
            <span>{post.author}</span>
          </div>
        </div>
      </PostContent>
    </PostContainer>
  );
};
