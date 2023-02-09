import Img from "../../assets/img/img.png";
import trash from "../../assets/img/trash.png";

import {
  ContainerFormPost,
  GridFormPost,
  InputPost,
  ImgPublishPost,
  FormPost,
  GridButtonsPost,
  ButtonsPost,
  TextareaPost,
  GridImgPost,
  InputFilePost,
  InputLabelPost,
  ButtonRemoveImgPost,
  GridInput,
} from "../../styles";
export default function FormCreatePost() {
  return (
    <ContainerFormPost>
      <GridFormPost>
        <GridImgPost>
          <InputLabelPost htmlFor="file-selection" />
          <ImgPublishPost src={Img} alt={Img} />
          <InputFilePost type="file" id="file-selection" />
          <ButtonRemoveImgPost>
            <ImgPublishPost src={trash} alt={trash} />
          </ButtonRemoveImgPost>
        </GridImgPost>

        <FormPost
          onSubmit={(e: React.ChangeEvent<HTMLFormElement>) =>
            e.preventDefault()
          }
        >
          <GridInput>
            <InputPost placeholder="Digite seu nome" />
          </GridInput>
          <GridInput>
            <TextareaPost placeholder="Mensagem" />
          </GridInput>
          <GridButtonsPost>
            <ButtonsPost
              backgroundColor={"transparent"}
              color={"#5f5f5f"}
              textDecoration={"underline"}
            >
              Descartar
            </ButtonsPost>
            <ButtonsPost backgroundColor={"#5f5f5f"} color={"#313131"}>
              Publicar
            </ButtonsPost>
          </GridButtonsPost>
        </FormPost>
      </GridFormPost>
    </ContainerFormPost>
  );
}
