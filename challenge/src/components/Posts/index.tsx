import { PostBox, DeleteIcon, PostContent, PostTextBox } from "./style";
import Delete from '../../assets/delete.svg'
import UserImage from '../../assets/user-image.png'
import { PostsData } from "../../context/PostsContext";

interface PostsProps {
  posts: PostsData[],
  setPosts: React.Dispatch<React.SetStateAction<PostsData[]>>,
  deletePost: (
    id: number, 
    posts: PostsData[], 
    setPost: React.Dispatch<React.SetStateAction<PostsData[]>>,
    ) => void,
}

const Posts = ({
  posts,
  setPosts,
  deletePost,
}: PostsProps) => {
  return (
    <>
      {posts.map((p: PostsData) =>
        <PostBox>
          <DeleteIcon onClick={() => deletePost(p.id, posts, setPosts)}>
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
      )}
    </>
  )
}

export default Posts;