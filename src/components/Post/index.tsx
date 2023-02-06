import React from "react";
import { ReactSVG } from "react-svg";
import { deleteSvg } from "../../assets/svg";
import { usePostContext } from "../../store/PostContext";
import { PostProps } from "../../types/components";

import { Container } from "./styles";

const Post: React.FC<PostProps> = ({
  author,
  imgSource,
  message,
  id,
}: PostProps) => {
  const { deletePost } = usePostContext();

  return (
    <Container>
      <div onClick={() => deletePost(id)} className="delete-svg">
        <ReactSVG src={deleteSvg} />
      </div>

      <div className="content">
        <div>
          <img src={imgSource} />
        </div>

        <div className="post-content">
          <p>{message}</p>

          <div>
            <p className="send-by">Enviado por</p>
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Post;
