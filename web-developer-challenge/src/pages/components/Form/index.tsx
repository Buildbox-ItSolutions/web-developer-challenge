import React, { useState } from "react";
import { useMutation } from "react-query";
import { Row, Form } from "antd";
import { QueryClient } from "react-query";
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

const queryClient = new QueryClient();

const index = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);

  const createFeed = useMutation(async () => {
    const response = await api.post("/feeds", {
      feed: {
        id: faker.datatype.uuid,
        name: name,
        comment: comment,
        image: image,
      },

      onSuccess: () => {
        queryClient.cancelQueries("feeds");
        queryClient.invalidateQueries("feeds");
      },
    });
  });

  const handleInputChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault;

    createFeed.mutate();

    setName("");
    setComment("");
    setImage(null);
  };

  const resetForm = () => {
    setName("");
    setComment("");
    setImage(null);
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
