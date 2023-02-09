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
} from "../../styles";

export default function PublishPost() {
  return (
    <ContainerPost>
      <TextFeedPost>Feed</TextFeedPost>
      <GridPost>
        <HeaderRemovePost>
          <ButtonRemovePost>
            <ImgPublishPost src={delele} alt={delele} />
          </ButtonRemovePost>
        </HeaderRemovePost>
        <GridPostInfo>
          <GridImgPublish>
            <ImgPublishPost src={logo} alt={logo} />
          </GridImgPublish>
          <GridTextsPost>
            <TextoPublishPost>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mattis ligula vel velit scelerisque iaculis. Nam mattis justo id
              orci commodo, eu tempus purus cursus.
            </TextoPublishPost>
            <GridPusblishByWhom>
              <TextNamePost>Enviado por</TextNamePost>
              <TextSenderPost>Manuela Oliveira</TextSenderPost>
            </GridPusblishByWhom>
          </GridTextsPost>
        </GridPostInfo>
      </GridPost>
      <GridPost>
        <HeaderRemovePost>
          <ButtonRemovePost>
            <ImgPublishPost src={delele} alt={delele} />
          </ButtonRemovePost>
        </HeaderRemovePost>
        <GridPostInfo>
          <GridImgPublish>
            <ImgPublishPost src={logo} alt={logo} />
          </GridImgPublish>
          <GridTextsPost>
            <TextoPublishPost>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mattis ligula vel velit scelerisque iaculis.
            </TextoPublishPost>
            <GridPusblishByWhom>
              <TextNamePost>Enviado por</TextNamePost>
              <TextSenderPost>Manuela Oliveira</TextSenderPost>
            </GridPusblishByWhom>
          </GridTextsPost>
        </GridPostInfo>
      </GridPost>
    </ContainerPost>
  );
}
