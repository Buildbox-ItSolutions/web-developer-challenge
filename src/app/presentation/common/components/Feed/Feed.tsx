import { LoadPosts } from "@/app/domain/usecases/loadPostList";
import { Post } from "@/app/interfaces/post.interface";
import { usePosts } from "@/app/presentation/modules/contexts/postItem";
import React, { useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem";

export interface FeedInterface {
  loadPost: LoadPosts;
}

const Feed: React.FC<FeedInterface> = ({ loadPost }) => {
  const { onGetFromToggle, getFromToggle } = usePosts();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const handleLoadPosts = async () => {
      try {
        const result = await loadPost.load();

        setPosts(result.posts);
      } catch (error) {
        console.log(error);
      }
    };
    handleLoadPosts();
  }, [getFromToggle]);
  onGetFromToggle(false);
  return (
    <>
      {posts.map((itemPosted, index) => {
        return (
          <PostItem
            key={index}
            itemPosted={itemPosted}
            posts={posts}
            setPosts={setPosts}
          />
        );
      })}
    </>
  );
};

export default Feed;
