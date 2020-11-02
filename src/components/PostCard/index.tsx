import React from "react";
import {
  AppPostCard,
  PostCardBody,
  PostCardBodyText,
  PostCardFooter,
  PostCardHeader,
  PostCardRoundImage,
  PostCardInfo1,
  PostCardInfo2
} from "./styles";

import destroy from "../../assets/delete.png";
import destroy2x from "../../assets/delete@2x.png";
import destroy3x from "../../assets/delete@3x.png";
import photoBase from "../../assets/photo-base.png";

export interface PostI {
  image?: string;
  author?: string;
  message?: string;
}

const PostCard = ({ image, author, message }: PostI) => {
  return (
    <AppPostCard>
      <PostCardHeader>
        <img
          src={destroy}
          alt="Destroy"
          srcSet={`${destroy2x} 2x, ${destroy3x} 3x,`}
        />
      </PostCardHeader>
      <PostCardBody>
        <PostCardRoundImage>
          <img src={photoBase} alt="" srcSet="" />
        </PostCardRoundImage>
        <PostCardBodyText>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus perspiciatis possimus! Deserunt nulla voluptatibus exercitationem corrupti aspernatur cum ratione voluptatem architecto. Quasi, veritatis provident!
        </PostCardBodyText>
      </PostCardBody>
      <PostCardFooter>
        <PostCardInfo1>Enviado por</PostCardInfo1>
        <PostCardInfo2>Vinicius Lima</PostCardInfo2>
      </PostCardFooter>
    </AppPostCard>
  );
};

export default PostCard;
