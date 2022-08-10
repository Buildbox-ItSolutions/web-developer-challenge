import { useFormikContext } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { PostType } from "../types/PostType";

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 32px;
  box-sizing: border-box;
`;

const PublishButton = styled("button")<{ isPostEnabled: boolean }>`
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  object-fit: contain;
  border-radius: 8px;
  background-color: ${({ isPostEnabled }) =>
    isPostEnabled ? "#71bb00" : "#5f5f5f"};
  border: none;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: ${({ isPostEnabled }) => (isPostEnabled ? "#fff" : "#313131")};
  cursor: ${({ isPostEnabled }) => (isPostEnabled ? "pointer" : "auto")};

  &:hover {
    background: ${({ isPostEnabled }) =>
      isPostEnabled ? "#82cc00" : "#5f5f5f"};
    box-shadow: ${({ isPostEnabled }) =>
      isPostEnabled ? "2px 2px 2px #111" : "none"};
  }
`;

const DiscardButton = styled.button`
  margin: 12px 0 12px;
  background: none;
  border: none;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #5f5f5f;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #7f7f7f;
  }
`;

const FormButtons = () => {
  const { values, setFieldValue } = useFormikContext<PostType>();

  const [isPostEnabled, setIsPostEnabled] = useState<boolean>(true);

  useEffect(() => {
    setIsPostEnabled(!!values.message && !!values.name);
  }, [values]);

  const clearFields = useCallback(() => {
    setFieldValue("name", "");
    setFieldValue("message", "");
  }, [setFieldValue]);

  return (
    <ButtonsWrapper>
      <DiscardButton type="button" onClick={clearFields}>
        Descartar
      </DiscardButton>
      <PublishButton
        type="submit"
        isPostEnabled={isPostEnabled}
        disabled={!isPostEnabled}
      >
        Publicar
      </PublishButton>
    </ButtonsWrapper>
  );
};

export default FormButtons;
