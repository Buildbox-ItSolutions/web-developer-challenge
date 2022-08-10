import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import styled from "styled-components";
import FormButtons from "./FormButtons";
import FormImage from "./FormImage";
import FormInputs from "./FormInputs";
import { Formik, Form, FormikHelpers, validateYupSchema } from "formik";
import * as yup from "yup";
import { PostType } from "../types/PostType";

const Wrapper = styled(Form)`
  width: 516px;
  min-height: 353px;
  margin: 133px 0 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 769px) {
    width: 400px;
  }

  @media (max-width: 481px) {
    width: 300px;
    margin: 113px 0 36px;
  }

  @media (max-width: 320px) {
    width: 270px;
  }
`;

const INITIAL_IMG = "/image-upload.svg";

const INITIAL: PostType = {
  id: 0,
  name: "",
  message: "",
  imageURL: INITIAL_IMG,
};

const schema = yup.object({
  name: yup.string(),
  message: yup.string(),
  imageUrl: yup.string(),
});

type FormPostProps = {
  setPosts: Dispatch<SetStateAction<PostType[] | null>>;
};

const FormPost = ({ setPosts }: FormPostProps) => {
  const [shouldResetImage, setShouldResetImage] = useState<boolean>(false);

  const onSubmit = useCallback(
    (values: PostType, actions: FormikHelpers<PostType>) => {
      setPosts((currentPosts: PostType[] | null) => {
        if (Array.isArray(currentPosts)) {
          const newId = currentPosts.length;
          const valuesArray = [{ ...values, id: newId }];

          return [...currentPosts, ...valuesArray];
        }

        return [{ ...values, id: 0 }];
      });

      actions.resetForm();
      setShouldResetImage(true);
    },
    []
  );

  return (
    <Formik
      initialValues={INITIAL}
      onSubmit={(values, actions) => onSubmit(values, actions)}
      validationSchema={schema}
    >
      <Wrapper>
        <FormImage
          shouldResetImage={shouldResetImage}
          setShouldResetImage={setShouldResetImage}
        />
        <FormInputs />
        <FormButtons />
      </Wrapper>
    </Formik>
  );
};

export default FormPost;
