import delele from "../../../../assets/img/delete.png";
import {
  GridPost,
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
} from "../../../../styles";
import usePublishPost from "../../hooks/usePublishPost";
import { Post } from "../../../../helpers/types";

export default function CreatePost() {
  const { posts, handleClickRemovePost } = usePublishPost();

  return (
    <>
      {posts?.map((post: Post) => {
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
                  <TextSenderPost>{post.author}</TextSenderPost>
                </GridPusblishByWhom>
              </GridTextsPost>
            </GridPostInfo>
          </GridPost>
        );
      })}
    </>
  );
}
