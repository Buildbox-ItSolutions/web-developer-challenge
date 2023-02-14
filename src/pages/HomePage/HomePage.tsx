import React from "react";
import { Feed } from "../../components/Feed/Feed";
import { Form } from "../../components/Form/Form";

import * as S from "./style";

export const HomePage = () => {
  return (
    <S.Container>
      <Form />
      <Feed />
    </S.Container>
  );
};
