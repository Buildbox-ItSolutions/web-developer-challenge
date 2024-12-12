/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, SetStateAction } from "react";
import {
  Author,
  ButtonRemove,
  Container,
  ImageItem,
  SendBy,
} from "./styled-components/styles";
import deleteIcon from "@/app/presentation/assets/icons/delete.svg";
import { Post } from "@/app/interfaces/post.interface";
export interface PostItemInterface {
  itemPosted: Post;
  key: number;
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
}

const PostItem: React.FC<PostItemInterface> = ({
  itemPosted,
  key,
  posts,
  setPosts,
}) => {
  const removeItem = async (id: string) => {
    try {
      await fetch(`/api.buildbox.itsolutions.test/posts/${id}`, {
        method: "DELETE",
      });
      const removedPost = posts.filter((item) => {
        return item.id !== id;
      });
      setPosts(removedPost);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container>
        <ButtonRemove onClick={() => removeItem(itemPosted.id as string)}>
          <img src={deleteIcon} alt="Excluir" />
        </ButtonRemove>
        <div className="post__data">
          <ImageItem src={itemPosted.urlx} alt="Excluir" />
          <div className="message-and-author">
            {itemPosted.message.length >= 190 ? (
              <p>{itemPosted.message.slice(0, 190) + "..."}</p>
            ) : (
              <p>{itemPosted.message}</p>
            )}

            <SendBy>Enviado por</SendBy>
            <Author>{itemPosted.name}</Author>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PostItem;
