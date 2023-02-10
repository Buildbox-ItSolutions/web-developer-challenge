import { useContext } from "react";
import delele from "../../assets/img/delete.png";
import logo from "../../assets/img/img.png";
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

export default function PublishPost() {
  const { handleClickRemovePost, posts } = useContext(createContextGlobal);

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
