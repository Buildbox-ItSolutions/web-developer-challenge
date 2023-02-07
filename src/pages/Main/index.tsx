import { Header } from '../../components/Header';
import { CreatePost } from '../../features/posts/CreatePost';
import { PostItem } from '../../features/posts/PostItem';
import { IPost } from '../../models/IPost';
import { useAppSelector } from '../../app/hooks';

import { Container } from './styles';
import { selectPosts } from '../../features/posts/postsSlice';

export function Main() {
  const posts: IPost[] = useAppSelector(selectPosts);

  return (
    <>
      <Container>
        <Header />
        <main>
          <CreatePost />
          {posts.map(post => (
            <PostItem postData={post} key={post.id} />
          ))}
        </main>
      </Container>
    </>
  );
};
