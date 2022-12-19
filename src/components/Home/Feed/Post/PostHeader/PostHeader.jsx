import { useContext } from "react";
import { useDispatch } from "react-redux";
// import { useDeletePostApiMutation } from "../../../../../api/apiSlice";
import { removePost } from "../../../../../slices/posts/posts.slice";
import { PostContext } from "../../Feed";
import { DeleteBtn } from "./Styles/DeleteBtn.styled";

export const PostHeader = (props) => {
  const { setExpanded } = props;
  const post = useContext(PostContext);
  // const [deletePostApi] = useDeletePostApiMutation();
  const dispatch = useDispatch();

  function handleDelete() {
    setExpanded(false);
    setTimeout(() => {
      // deletePostApi(post.id);
      dispatch(removePost(post.id));
    }, 700);
  }

  return (
    <>
      <DeleteBtn onClick={handleDelete}></DeleteBtn>
    </>
  );
};
