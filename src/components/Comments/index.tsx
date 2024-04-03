import { XCircle } from "@phosphor-icons/react";
import { Box, CommentsContainer } from "./style";

type CommentProps = {
  id:number;
  content:string;
  user:string;
  source:string;
  onDelete: (commentId: number)=> void;
}

export const Comments = ({content,user,source,onDelete,id}:CommentProps) => {
  return (
      <CommentsContainer>
        <button onClick={() => onDelete(id)}>
          <XCircle size={20} />
        </button>
        <img src={source} alt="" />
        <Box>
          <p>{content}</p>
          <footer>
            <small>Enviado por</small>
            <span>{user}</span>
          </footer>
        </Box>
      </CommentsContainer>
  );
};
