import React from "react";

import { InputFile, Input, TextArea } from "../index";

import { Container } from "./styles";

const PostForm: React.FC = () => {
  return (
    <Container>
      <InputFile />
      <Input />
      <TextArea />
    </Container>
  );
};

export default PostForm;
