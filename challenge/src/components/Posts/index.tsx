import { PostBox, DeleteIcon, PostContent, PostTextBox } from "./style";
import Delete from '../../assets/delete.svg'
import UserImage from '../../assets/user-image.png'
import { PostsData } from "../../context/PostsContext";
import { useState, useEffect } from "react";

interface PostsProps {
  posts: PostsData[];
  setPosts: React.Dispatch<React.SetStateAction<PostsData[]>>;
  deletePost: (
    id: number,
    posts: PostsData[],
    setPost: React.Dispatch<React.SetStateAction<PostsData[]>>,
  ) => void;
  createdPost: number | null;
}

const Posts = ({
  posts,
  setPosts,
  deletePost,
  createdPost
}: PostsProps) => {
  const [fade, setFade] = useState<number | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (createdPost) {
      setShouldAnimate(true);
      setTimeout(() => {
        setShouldAnimate(false);
      }, 850); // Duração da animação
    }
  }, [createdPost]);

  const handleDelete = (id: number) => {
    setFade(id);
    setTimeout(() => {
      deletePost(id, posts, setPosts);
      setFade(null);
    }, 1000);
  };

  return (
    <>
      {posts.map((p: PostsData) => {
        return (
          <PostBox
            key={p.id}
            style={{
              opacity: (p.id === createdPost || p.id === fade) ? '0' : '1',
              transform: (shouldAnimate && p.id !== createdPost) ? 'translateY(100%)' : (fade !== null && fade !== p.id) ? 'translateY(-100%)' : 'none',
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
            }}
          >
            <DeleteIcon onClick={() => handleDelete(p.id)}>
              <img src={Delete} alt="" />
            </DeleteIcon>
            <PostContent>
              <img src={UserImage} alt="" />
              <PostTextBox>
                <p>{p.text}</p>
                <h3>Enviado por</h3>
                <h2>{p.name}</h2>
              </PostTextBox>
            </PostContent>
          </PostBox>
        );
      })}
    </>
  );
}

export default Posts;
