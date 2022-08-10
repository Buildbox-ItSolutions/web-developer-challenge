import { motion } from "framer-motion";
import { memo } from "react";

import Remove from "../../assets/Remove.svg";
import { IPost } from "../../pages/Dashboard";
import { Container } from "./styles";

interface IPostData {
  data: IPost;
  removePost: (post: IPost) => void;
}

export const Post = memo(
  ({ data, removePost }: IPostData) => {
    const { message, name, photo } = data;
    const MotionFlex = motion(Container);

    return (
      <MotionFlex
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        layout
      >
        <div className="content">
          <img src={photo} />
          <div className="description">
            <p>{message}</p>
            <div>
              <span>Enviada por</span>
              <p>{name}</p>
            </div>
          </div>
        </div>
        <div className="align-icon">
          <img
            onClick={() => removePost(data)}
            className="remove-icon"
            src={Remove}
          />
        </div>
      </MotionFlex>
    );
  },
  (next, prev) => next.data === prev.data
);
