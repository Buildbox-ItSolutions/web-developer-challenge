import React, { useState } from 'react';

/* Layout */
import Layout from 'layout';

/* Components */
import PublishPosts from 'components/PublishPosts';
import Posts from 'components/Posts';

/* Mocks */
import { posts as mock, emptyPost } from 'mocks/posts';

/* Utils */
import { generateIdentifier } from 'utils/identifier';

/* Types */
import { PostsProps } from 'types/posts';

/* Styles */
import { TitleContent, Title } from './styles';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostsProps[]>(mock);
  const [newPost, setNewPost] = useState<PostsProps>(emptyPost);

  const handleDelete = (id: string): void => {
    setPosts((previous) => previous.filter((el) => el.id !== id));
  };

  const handleClean = (): void => {
    setNewPost(emptyPost);
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setNewPost((values: PostsProps) => ({
      ...values,
      id: generateIdentifier(),
      [name]: value,
    }));
  };

  const handleAdding = (): void => {
    setPosts((previous) => [...previous, newPost]);
    handleClean();
  };

  return (
    <Layout>
      <PublishPosts
        newPost={newPost}
        handleClean={handleClean}
        handleChange={handleChange}
        handleAdding={handleAdding}
      />
      <TitleContent>
        <Title>Feed</Title>
      </TitleContent>
      {posts.map((post) => (
        <Posts
          key={post.id}
          id={post.id}
          description={post.description}
          author={post.author}
          image={post.image}
          handleDelete={() => handleDelete(post.id)}
        />
      ))}
    </Layout>
  );
};

export default Home;
