import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { PostForm } from "src/components";
import mockedPosts from "./posts";
import { Post as IPost } from "src/models/Post";

import Post from "./components/Post/Post";
import { Content, Feed, FeedTitle } from "./styles";

const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>(mockedPosts);
  const transitions = useTransition(posts, {
    from: { opacity: 0,transform: 'translate3d(0,-150px,0)', marginTop: '-200px' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)', marginTop: '0px' },
    leave: { opacity: 0, transform: 'translate3d(0,-150px,0)', marginTop: '-200px' },
    config: { duration: 250 },
  })

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
        {transitions((props, item: IPost) => (
          <animated.div style={props}>
            {renderPost(item)}
          </animated.div>
        ))}
      </Feed>
    </Content>
  )
};

export default Blog;
