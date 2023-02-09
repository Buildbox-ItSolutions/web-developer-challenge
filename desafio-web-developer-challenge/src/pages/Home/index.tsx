import { Post, PostProps } from "../../components/Post";
import { Sidebar } from "../../components/SideBar";
import { HomeContainer } from "./styles";
import { dbPosts } from "../../services/db";
import { useCallback, useState } from "react";
import { IPosts } from "../../interface/IPosts";

export function Home() {
  const [newPosts, setNewPosts] = useState<IPosts[]>(dbPosts)

  const removePost = useCallback((id: string) => {
    const post = newPosts.filter((newPosts) => newPosts.id !== id);
    setNewPosts(post);
  }, [newPosts]);

  return (
    <HomeContainer>
      <Sidebar setNewPosts={setNewPosts} />
      {newPosts.map((post) => (
        <Post
          key={post.id}
          post={post}
          handleRemovePost={removePost}
        />
      ))}
    </HomeContainer>
  )
}