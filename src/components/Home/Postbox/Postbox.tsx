import { Formik, Form, Field } from "formik";
import { Container } from "./Styles/Container.styled";
import { ImgContainer as UserImageContainer } from "../Styles/ImgContainer.styled";
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
import { RemoveUserImgButton } from "./Styles/Buttons/RemoveImgBtn/RemoveUserImgBtn.styled";
import { UserImageSection } from "./Styles/Sections/UserImageSection.styled";
import { CharacterCountMsg } from "./Styles/Fields/CharacterCountMsg.styled";
import { EmptyImage } from "../Styles/EmptyImage.styled";

const initialValues = {
  userName: "",
  userMessage: "",
  userImage: "",
};

export default function Postbox() {
  const maxMessageSize: string = "250";
  const maxUserNameSize: string = "50";

  const [selectedUserImage, setUserImage] = useState();
  const [selectedUserImageCopy, setUserImageCopy] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [fileFormatIsValid, setFileFormatIsValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedUserImage) {
      setPreviewImage("");
      return;
    }

    const objectUrl = URL.createObjectURL(selectedUserImage);
    setPreviewImage(objectUrl);
    setUserImageCopy(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedUserImage]);

  const publishMessage = (values: any, previewImage: any, isValid: any) => {
    if (isValid) {
      dispatch(addPost({ ...values, userImage: previewImage }));
    }
  };

  function imageChanged(e: any) {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    if (validatesFileType(e.target.files[0].type)) {
      setFileFormatIsValid(true);
      setUserImage(e.target.files[0]);
    }
  }

  function removeUserImage() {
    setFileFormatIsValid(false);
    setUserImage(undefined);
  }

  function validatesFileType(fileFormat: string) {
    return ["image/png", "image/svg", "image/jpeg"].includes(fileFormat);
  }

  function getCharactersCountMessage(message: string) {
    return (
      <CharacterCountMsg>
        {message.length} de {maxMessageSize} caracteres
      </CharacterCountMsg>
    );
  }

  return (
    <>
      <Container>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({ handleReset, values, isValid, dirty }) => {
            return (
              <>
                <Form>
                  <UserImageSection>
                    <UserImageContainer filePath={previewImage} filePathCopy={selectedUserImageCopy}>
                      <EmptyImage></EmptyImage>
                      {selectedUserImage && (
                        <RemoveUserImgButton
                          type="button"
                          title="Clique para alterar a imagem do usuário"
                          aria-label="Clique para remover a imagem do usuário"
                          onClick={removeUserImage}
                        ></RemoveUserImgButton>
                      )}
                      <Field
                        type="file"
                        name="userImage"
                        title="Clique para alterar a imagem do usuário"
                        aria-label="Clique para alterar a imagem do usuário"
                        onChange={(e: any) => {
                          imageChanged(e);
                        }}
                      ></Field>
                    </UserImageContainer>
                  </UserImageSection>

                  <FieldContainer>
                    <Field
                      name="userName"
                      placeholder="Digite seu nome"
                      autoComplete="off"
                      maxLength={maxUserNameSize}
                      spellCheck="false"
                    ></Field>
                  </FieldContainer>

                  <FieldContainer>
                    <Field
                      name="userMessage"
                      as="textarea"
                      placeholder="Mensagem"
                      autoComplete="off"
                      maxLength={maxMessageSize}
                      spellCheck="false"
                    ></Field>
                    <div>
                      {getCharactersCountMessage(values["userMessage"])}
                    </div>
                  </FieldContainer>

                  <ButtonsContainer>
                    <DiscardButton
                      type="button"
                      onClick={(e: any) => {
                        handleReset(e);
                        removeUserImage();
                      }}
                    >
                      <DiscardBtnText>Descartar</DiscardBtnText>
                    </DiscardButton>
                    <PublishButton
                      type="button"
                      onClick={() =>
                        publishMessage(values, previewImage, isValid)
                      }
                      disabled={
                        !isValid ||
                        !dirty ||
                        !selectedUserImage ||
                        !fileFormatIsValid
                      }
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
