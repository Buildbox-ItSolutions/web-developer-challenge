import deleteIcon from "../../assets/images/delete-icon.svg";
import { database, remove, ref, child } from "../../services/firebase";
import { UseAuth } from "../../hooks/UseAuth";

import {
  VisualizePost,
  VisualizePostContent,
  DeleteIconDiv,
  DeleteIconButton,
  PostAvatar,
  PostText,
  Text,
  PostInformation,
} from "./styles";

type PostType = {
  content: string;
  author: {
    name: string;
    avatar: string;
    uid: string;
  };
  _id: string;
};

export const Posts = ({ content, author, _id }: PostType) => {
  const postRef = ref(database);
  const { user } = UseAuth();
  function deletePost(_id: string, uid: string) {
    if (uid === user?.id) {
      remove(child(postRef, `build-box/posts/${_id}`));
    } else {
      alert("Você só pode excluir seus próprios posts!");
    }
    return;
  }
  return (
    <VisualizePost>
      <VisualizePostContent>
        <DeleteIconDiv>
          <DeleteIconButton onClick={() => deletePost(_id, author.uid)}>
            <img src={deleteIcon} alt="Ícone de Deletar" />
          </DeleteIconButton>
        </DeleteIconDiv>
        <PostAvatar>
          <img src={author.avatar} alt="Avatar do Usuário" />
        </PostAvatar>
        <PostText>
          <Text>{content}</Text>
        </PostText>
        <PostInformation>
          <span>Enviado por</span>
          <h4>{author.name}</h4>
        </PostInformation>
      </VisualizePostContent>
    </VisualizePost>
  );
};
