import deleteIcon from '../../../../assets/delete-icon.svg';
import { IPost } from '../../Post.types';
import {
  Card,
  CardBody,
  CardImage,
  CreatedBy,
  CreatedByTitle,
  DeleteButton,
  ListTitle,
  ListWrapper,
} from './styles';

type Props = {
  posts: IPost[];
  deletePost: (postId: string) => void;
};

function PostList({ posts, deletePost }: Props) {
  const list = posts.map((post) => {
    const handleClick = () => deletePost(post.id);

    return (
      <Card key={post.id}>
        <DeleteButton type="button" aria-label="deletar post" onClick={handleClick}>
          <img src={deleteIcon} />
        </DeleteButton>
        <CardBody>
          <CardImage src={post.image} />
          <div>
            <p>{post.message}</p>
            <CreatedByTitle>Enviado por</CreatedByTitle>
            <CreatedBy>{post.createdBy}</CreatedBy>
          </div>
        </CardBody>
      </Card>
    );
  });

  return (
    <ListWrapper>
      <ListTitle>Feed</ListTitle>
      {posts.length > 0 ? list : <p>Publique um post para o ver aqui</p>}
    </ListWrapper>
  );
}

export default PostList;
