import React from "react";

import {
  AppPostCard,
  PostCardBody,
  PostCardBodyText,
  PostCardFooter,
  PostCardHeader,
  PostCardRoundImage,
  PostCardInfo1,
  PostCardInfo2,
} from "./styles";

import destroy from "../../assets/delete.png";
import destroy2x from "../../assets/delete@2x.png";
import destroy3x from "../../assets/delete@3x.png";
import photoBase from "../../assets/photo-base.png";

import { PostI } from "../../store/modules/types/Post";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/modules/posts/actions";

const PostCard = ({ id, image, author, message }: PostI) => {
  const dispatch = useDispatch();

  const handleDeletePost = (id: number) => {
    dispatch(deletePost(id));
  };

  return (
    <AppPostCard>
      <PostCardHeader>
        <img
          src={destroy}
          alt="Destroy"
          srcSet={`${destroy2x} 2x, ${destroy3x} 3x,`}
          onClick={() => handleDeletePost(id as number)}
        />
      </PostCardHeader>
      <PostCardBody>
        <div>
          <PostCardRoundImage>
            <img src={image ? (image as string) : photoBase} alt="" srcSet="" />
          </PostCardRoundImage>
        </div>
        <PostCardBodyText>{message}</PostCardBodyText>
      </PostCardBody>
      <PostCardFooter>
        <PostCardInfo1>Enviado por</PostCardInfo1>
        <PostCardInfo2>{author}</PostCardInfo2>
      </PostCardFooter>
    </AppPostCard>
  );
};

export default PostCard;
