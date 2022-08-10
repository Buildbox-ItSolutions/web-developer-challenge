import { useFormikContext } from "formik";
import React from "react";
import styled from "styled-components";
import { PostType } from "../types/PostType";

const Wrapper = styled.div`
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Name = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #494949;
  border: none;
  margin-bottom: 8px;
  color: #fff;
`;

const Message = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-height: 80px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #494949;
  border: none;
  color: #fff;
`;

const FormInputs = () => {
  const { values, handleChange } = useFormikContext<PostType>();

  return (
    <Wrapper>
      <Name
        id="name"
        name="name"
        type="text"
        placeholder="Digite seu nome"
        value={values.name}
        onChange={handleChange}
      />
      <Message
        id="message"
        name="message"
        placeholder="Mensagem"
        value={values.message}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default FormInputs;
