import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Img from "../../assets/img/img.png";
import trash from "../../assets/img/trash.png";
import { createContextGlobal } from "../../context/GlobalContext";

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
    stateFileds,
    valueImg,
    fileImg,
    handleOploadImg,
    removeFileImg,
    handleSubmitPost,
  } = useContext(createContextGlobal);

  return (
    <ContainerFormPost>
      <GridFormPost>
        <GridImgPost>
          {valueImg ? (
            <ImgPostForm width={88} height={88} src={fileImg} alt={fileImg} />
          ) : (
            <RemoveImgForm src={Img} alt={Img} />
          )}

          <InputLabelPost htmlFor="file-selection">
            <InputFilePost
              type="file"
              id="file-selection"
              value={valueImg}
              onChange={handleOploadImg}
            />
          </InputLabelPost>

          {valueImg && (
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
              value={stateFileds.author}
              onChange={handleChangeFiledPost}
            />
          </GridInput>
          <GridInput>
            <TextareaPost
              placeholder="Mensagem"
              name="message"
              value={stateFileds.message}
              onChange={handleChangeFiledPost}
            />
          </GridInput>
          <GridButtonsPost>
            <ButtonsPost
              backgroundColor={"transparent"}
              color={"#5f5f5f"}
              textDecoration={"underline"}
            >
              Descartar
            </ButtonsPost>
            <ButtonsPost
              disabled={
                fileImg && stateFileds.message && stateFileds.author
                  ? false
                  : true
              }
              backgroundColor={"#5f5f5f"}
              color={"#313131"}
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
