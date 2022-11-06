import { Formik, Form, Field } from "formik";
import { Container } from "./Styles/Container.styled";
import { ImgContainer } from "../Styles/ImgContainer.styled";
import { PublishButton } from "./Styles/Buttons/PublishBtn/PublishBtn";
import { PublishBtnText } from "./Styles/Buttons/PublishBtn/Text";

import validationSchema from "./Validation/validation.schema";
import { ButtonsContainer } from "./Styles/Buttons/BtnContainer";
import { DiscardButton } from "./Styles/Buttons/DiscardBtn/DiscardBtn";
import { DiscardBtnText } from "./Styles/Buttons/DiscardBtn/Text";
import { FieldContainer } from "./Styles/Fields/FieldContainer.styled";

import emptyImage from "./../../../img/image.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../slices/posts/posts.slice";

const initialValues = {
  userName: "",
  userMessage: "",
  userImage: emptyImage,
};

export default function Postbox() {
  const [selectedUserImage, setUserImage] = useState();
  const [previewImage, setPreviewImage] = useState(emptyImage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedUserImage) {
      setPreviewImage(emptyImage);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedUserImage);
    setPreviewImage(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedUserImage]);

  const publishMessage = (values: any) => {
    dispatch(addPost(values));
  };

  function imageChanged(e: any) {
    if (!e.target.files || e.target.files.length === 0) {
      setUserImage(undefined);
      return;
    }

    setUserImage(e.target.files[0]);
  }

  return (
    <>
      <Container>
        {/* <ImgContainer type="file" name="postImg" filePath={emptyImage}></ImgContainer> */}
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({ handleReset, values }) => {
            return (
              <>
                <Form>
                  <ImgContainer filePath={previewImage}>
                    <Field
                      type="file"
                      name="postImg"
                      onChange={imageChanged}
                    ></Field>
                  </ImgContainer>

                  <FieldContainer>
                    <Field
                      name="userName"
                      placeholder="Digite seu nome"
                      autoComplete="off"
                    ></Field>
                  </FieldContainer>

                  <FieldContainer>
                    <Field
                      name="userMessage"
                      as="textarea"
                      placeholder="Mensagem"
                      autoComplete="off"
                    ></Field>
                  </FieldContainer>

                  <ButtonsContainer>
                    <DiscardButton type="button" onClick={handleReset}>
                      <DiscardBtnText>Descartar</DiscardBtnText>
                    </DiscardButton>
                    <PublishButton
                      type="button"
                      onClick={() => publishMessage(values)}
                    >
                      <PublishBtnText>Publicar</PublishBtnText>
                    </PublishButton>
                  </ButtonsContainer>
                </Form>
              </>
            );
          }}
        </Formik>
      </Container>
    </>
  );
}
