import { PostContainer } from "./styles";
import { IoCloseCircleOutline } from "react-icons/io5";

interface IPostData {
  id: number;
  message: string
  name: string;
  img: string;
  onDeletePost: (id: number) => void;
}

export function Post({id, message, name, img, onDeletePost}: IPostData) {
  return (
    <PostContainer>
      <IoCloseCircleOutline className="icon" onClick={() => onDeletePost(id)} />
      <img src={img} alt="avatar" />

      <div>
        <p className="message">{message}</p>
        <p className="sendBy">Enviado por</p>
        <p>{name}</p>
      </div>
    </PostContainer>
  )
}