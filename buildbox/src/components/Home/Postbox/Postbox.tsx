import { Formik, Form, Field } from "formik";
import { Container } from "./Styles/Container.styled";
import { ImgContainer } from "./Styles/ImgContainer.styled";
import { PublishButton } from "./Styles/Buttons/PublishBtn/PublishBtn";
import { PublishBtnText } from "./Styles/Buttons/PublishBtn/Text";

import validationSchema from "./Validation/validation.schema";
import { ButtonsContainer } from "./Styles/Buttons/BtnContainer";
import { DiscardButton } from "./Styles/Buttons/DiscardBtn/DiscardBtn";
import { DiscardBtnText } from "./Styles/Buttons/DiscardBtn/Text";
import { FieldContainer } from "./Styles/Fields/FieldContainer.styled";

import emptyImage from "./../../../../img/image.png";

const initialValues = {
  userName: "",
  userMessage: "",
};

const publishMessage = () => {
  console.log("AAAAAA");
};

export default function Postbox() {
  return (
    <>
      <Container>
        <ImgContainer filePath={emptyImage}></ImgContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {() => {
            return (
              <>
                <Form>
                  <FieldContainer>
                    <Field
                      name="userName"
                      placeholder="Digite seu nome"
                    ></Field>
                  </FieldContainer>

                  <FieldContainer>
                    <Field
                      name="userMessage"
                      as="textarea"
                      placeholder="Mensagem"
                    ></Field>
                  </FieldContainer>

                  <ButtonsContainer>
                    <DiscardButton>
                      <DiscardBtnText>Descartar</DiscardBtnText>
                    </DiscardButton>
                    <PublishButton type="button" onClick={publishMessage}>
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
