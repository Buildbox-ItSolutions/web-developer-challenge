import React, { ChangeEvent, useContext } from "react";
import Img from "../../assets/img/img.png";
import trash from "../../assets/img/trash.png";
import { createContextGlobal } from "../../context/GlobalContext";
import { Type } from "../../helpers";
import useFormCreate from "../../hooks/useFormCreate";
import {
  ContainerFormPost,
  GridFormPost,
  InputPost,
  RemoveImgForm,
  FormPost,
  GridButtonsPost,
  ButtonsPost,
  TextareaPost,
  GridImgPost,
  InputFilePost,
  InputLabelPost,
  ButtonRemoveImgPost,
  GridInput,
  ImgPostForm,
} from "../../styles";
export default function FormCreatePost() {
  const {
    handleChangeFiledPost,
    handleSubmitPost,
    discardPorts,
    removeFileImg,
    state,
  } = useFormCreate();

  return (
    <ContainerFormPost>
      <GridFormPost>
        <GridImgPost>
          {state.fields.valueImg ? (
            <ImgPostForm
              width={88}
              height={88}
              src={state.fileImg}
              alt={state.fileImg}
            />
          ) : (
            <RemoveImgForm src={Img} alt={Img} />
          )}

          <InputLabelPost htmlFor="file-selection">
            <InputFilePost
              type="file"
              id="file-selection"
              name="valueImg"
              value={state.fields.valueImg}
              onChange={handleChangeFiledPost}
            />
          </InputLabelPost>

          {state.fields.valueImg && (
            <ButtonRemoveImgPost onClick={removeFileImg}>
              <RemoveImgForm src={trash} alt={trash} />
            </ButtonRemoveImgPost>
          )}
        </GridImgPost>
        <FormPost onSubmit={handleSubmitPost}>
          <GridInput>
            <InputPost
              placeholder="Digite seu nome"
              name="author"
              value={state.fields.author}
              onChange={handleChangeFiledPost}
            />
          </GridInput>
          <GridInput>
            <TextareaPost
              placeholder="Mensagem"
              name="message"
              value={state.fields.message}
              onChange={handleChangeFiledPost}
            />
          </GridInput>
          <GridButtonsPost>
            <ButtonsPost
              onClick={discardPorts}
              type="button"
              backgroundColor={"transparent"}
              color={"#5f5f5f"}
              textDecoration={"underline"}
            >
              Descartar
            </ButtonsPost>
            <ButtonsPost
              disabled={
                state.fields.valueImg &&
                state.fields.message &&
                state.fields.author
                  ? false
                  : true
              }
              backgroundColor={
                state.fields.valueImg &&
                state.fields.message &&
                state.fields.author
                  ? "#71bb00"
                  : "#5f5f5f"
              }
              color={
                state.fields.valueImg &&
                state.fields.message &&
                state.fields.author
                  ? "#ffffff"
                  : "#313131"
              }
              type="submit"
            >
              Publicar
            </ButtonsPost>
          </GridButtonsPost>
        </FormPost>
      </GridFormPost>
    </ContainerFormPost>
  );
}
