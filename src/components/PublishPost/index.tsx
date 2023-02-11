import { useContext } from "react";
import delele from "../../assets/img/delete.png";
import {
  ContainerPost,
  GridPost,
  TextFeedPost,
  HeaderRemovePost,
  ButtonRemovePost,
  GridImgPublish,
  GridPostInfo,
  ImgPublishPost,
  TextoPublishPost,
  GridTextsPost,
  TextNamePost,
  TextSenderPost,
  GridPusblishByWhom,
  RemoveImgPublishPost,
} from "../../styles";

import { createContextGlobal } from "../../context/GlobalContext";
import { Type } from "../../helpers";
import usePublishPost from "../../hooks/usePublishPost";
export default function PublishPost() {
  const { posts, handleClickRemovePost } = usePublishPost();
  return (
    <ContainerPost>
      {posts.length > 1 && <TextFeedPost>Feed</TextFeedPost>}
      {posts?.map((post: any) => {
        return (
          <GridPost key={post.id}>
            <HeaderRemovePost>
              <ButtonRemovePost onClick={() => handleClickRemovePost(post.id)}>
                <RemoveImgPublishPost src={delele} alt={delele} />
              </ButtonRemovePost>
            </HeaderRemovePost>
            <GridPostInfo>
              <GridImgPublish>
                <ImgPublishPost src={post.fileImg} alt={post.fileImg} />
              </GridImgPublish>
              <GridTextsPost>
                <TextoPublishPost>{post.message}</TextoPublishPost>
                <GridPusblishByWhom>
                  <TextNamePost>Enviado por</TextNamePost>
                  <TextSenderPost>Manuela Oliveira</TextSenderPost>
                </GridPusblishByWhom>
              </GridTextsPost>
            </GridPostInfo>
          </GridPost>
        );
      })}
    </ContainerPost>
  );
}
