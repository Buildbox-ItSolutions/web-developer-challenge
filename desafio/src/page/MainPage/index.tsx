import { useState } from "react";
import CardPublish from "../../components/CardPublish";
import Post from "../../components/Post";
import './styles.css'

const MainPage = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const addPost = (data: any) => {
    setPosts([...posts, data]); 
  };

  const deletePost = (index: number) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <>
      <CardPublish onAddPost={addPost} />
      <div className="feed-container">
        <p>Feed</p>
        {posts.map((post, index) => (
          <Post key={index} post={post} onDelete={() => deletePost(index)} />
        ))}
      </div>
    </>
  );
};

export default MainPage;
