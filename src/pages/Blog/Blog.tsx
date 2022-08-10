import { useState } from "react";
import { PostForm } from "../../components";
import mockedPosts from "./posts";
import { Post as IPost } from "../../models/Post";

import Post from "./components/Post/Post";
import { Content, Feed, FeedTitle } from "./styles";

const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>(mockedPosts);

  const removePost = (id: number) => {
    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

  const publishPost = (post: IPost) => {
    setPosts([
      post,
      ...posts,
    ]);
  };

  const renderPost = (post: IPost) => (
    <Post
      key={`post-${post.id}`}
      post={post}
      removePost={removePost}
    />
  );

  return (
    <Content>
      <PostForm onPublish={publishPost} />
      <Feed>
        <FeedTitle>Feed</FeedTitle>
        {posts.map(renderPost)}
      </Feed>
    </Content>
  )
};

export default Blog;
