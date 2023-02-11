import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Row, Form } from "antd";
import { faker } from "@faker-js/faker";

import {
  CardContainer,
  Column,
  InputStyles,
  TextAreaStyles,
  FormUpload,
  ButtonUpload,
  ButtonReset,
  BtnContainer,
} from "./styles";

import { api } from "@/services/api";
import { useFeed } from "@/services/hooks/useFeed";

const index = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [imgBase64, setImgBase64] = useState("");

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
  };

  const resetForm = () => {
    setName("");
    setComment("");
    setImgBase64("");
  };
  return (
    <>
      <Row>
        <Column xs={24} xl={24}>
          <CardContainer>
            <Form layout="vertical" onFinish={handleSubmit}>
              <FormUpload>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleInputChange}
                />
              </FormUpload>
              <Form.Item>
                <InputStyles
                  placeholder="Digite seu nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </Form.Item>
              <Form.Item>
                <TextAreaStyles
                  placeholder="Deixe seu comentário"
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
                <ButtonUpload htmlType="submit">Publicar</ButtonUpload>
              </BtnContainer>
            </Form>
          </CardContainer>
        </Column>
      </Row>
    </>
  );
};

export default index;
