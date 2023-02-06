import { PostsLayout, CreatePostForm, PostsList } from "_components";

import { usePosts } from "./usePosts";

export const Posts = () => {
  const { createPost, posts, removePost } = usePosts();
  return (
    <PostsLayout>
      <CreatePostForm onSubmit={createPost} />
      <PostsList removePost={removePost} posts={posts} />
    </PostsLayout>
  );
};
