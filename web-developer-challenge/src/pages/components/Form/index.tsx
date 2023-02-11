//importação react
import React, { useState } from "react";

//importação de hooks do react-query
import { useMutation, useQueryClient } from "react-query";

//importação de components do antd
import { Row, Form } from "antd";

//importação da biblioteca faker pra gerar dados ficcticios
import { faker } from "@faker-js/faker";

//importação da biblioteca sweetalert2 (alertas)
import Alert from "sweetalert2";

//importação dos estilos com o styled-components

import {
  CardContainer,
  Column,
  InputStyles,
  TextAreaStyles,
  FormUpload,
  ButtonUpload,
  ButtonReset,
  BtnContainer,
  UploadInputLabel,
  UploadInput,
  UploadIcon,
  ImageStyle,
  UploadContainer,
  TrashIcon,
} from "./styles";

//importação de services da api ficcticia

import { api } from "@/services/api";

//importação de hooks
import { useFeed } from "@/services/hooks/useFeed";

// regexe para Strings
const regExeString = (value: string) => {
  value = value.replace(/[^a-zA-Z\s]+/g, "");

  return value;
};

const index = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [imgBase64, setImgBase64] = useState("");

  const [form] = Form.useForm();

  const { data } = useFeed();
  const queryClient = useQueryClient();

  const handleInputChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgBase64(reader.result as string);
    };
  };

  const createFeed = useMutation(
    async () => {
      const response = await api.post("/feeds", {
        feed: {
          ...data,
          id: faker.datatype.uuid(),
          name: name,
          comment: comment,
          image: imgBase64,
        },
      });
      return response.data.feed;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("feeds");
      },
    }
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault;

    createFeed.mutate();

    setName("");
    setComment("");
    setImgBase64("");

    Alert.fire({
      title: "Feed enviado com sucesso!",
      icon: "success",
      confirmButtonText: "Ok",
      timer: 2500,
    });
  };

  const resetForm = () => {
    setName("");
    setComment("");
    setImgBase64("");
  };

  const uploadButton = (
    <>
      <UploadInputLabel>
        <UploadIcon size={24} />
        <UploadInput
          type="file"
          accept="image/*,.pdf"
          onChange={handleInputChange}
        />
      </UploadInputLabel>
    </>
  );

  const imgSelected = (
    <UploadContainer>
      <UploadInputLabel>
        <ImageStyle preview={false} src={imgBase64} />

        <UploadInput
          type="file"
          accept="image/*,.pdf"
          onChange={handleInputChange}
        />
      </UploadInputLabel>
      <TrashIcon
        preview={false}
        src="/trash.svg"
        onClick={() => setImgBase64("")}
      />
    </UploadContainer>
  );
  return (
    <>
      <Row>
        <Column xs={24} xl={24}>
          <CardContainer>
            <Form layout="vertical" onFinish={handleSubmit}>
              <FormUpload>{imgBase64 ? imgSelected : uploadButton}</FormUpload>
              <Form.Item>
                <InputStyles
                  placeholder="Digite seu nome"
                  onChange={(e) => {
                    setName(regExeString(e.target.value));
                    form.setFieldsValue({
                      name: regExeString(e.target.value),
                    });
                  }}
                  value={name}
                  required
                />
              </Form.Item>
              <Form.Item>
                <TextAreaStyles
                  placeholder="Mensagem"
                  rows={5}
                  maxLength={170}
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  required
                />
              </Form.Item>
              <BtnContainer>
                <ButtonReset htmlType="button" onClick={resetForm}>
                  Descartar
                </ButtonReset>
                {name && comment !== "" ? (
                  <ButtonUpload htmlType="submit">Publicar</ButtonUpload>
                ) : (
                  <ButtonUpload disabled>Publicar</ButtonUpload>
                )}
              </BtnContainer>
            </Form>
          </CardContainer>
        </Column>
      </Row>
    </>
  );
};

export default index;
