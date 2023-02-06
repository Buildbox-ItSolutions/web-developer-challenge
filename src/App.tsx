import React, { useState } from "react";
import { Trash } from "phosphor-react";
import { Container, Header, Post, PostHeader, PostList } from "./style";

interface Post {
  name: string;
  message: string;
  photo: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts([...posts, post]);
  };

  const removePost = (index: number) => {
    setPosts(posts.filter((post, i) => i !== index));
  };

  return (
    <Container>
      <Header>
        Post-it's
        <PostHeader>Add Post</PostHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            addPost({
              name: formData.get("name") as string,
              message: formData.get("message") as string,
              photo: formData.get("photo") as string,
            });
          }}
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="message">Mesage:</label>
          <textarea id="message" name="message" />
          <label htmlFor="photo">photo:</label>
          <input type="file" id="photo" name="photo" />
          <button type="submit">Add</button>
        </form>
      </Header>
      {posts.map((post, index) => (
        <Post key={index}>
          <h1>{post.name}</h1>
          <p>{post.message}</p>
          <img src={post.photo} alt={post.name} />
          <button onClick={() => removePost(index)}>
            <Trash size={24} />
          </button>
        </Post>
      ))}
    </Container>
  );
};

export default App;
