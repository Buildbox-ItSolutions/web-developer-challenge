import { Formik, Form, Field } from "formik";
import { Container } from "./Styles/Container.styled";
import { ImgContainer as UserImageContainer } from "../Styles/ImgContainer.styled";
import { PublishButton } from "./Styles/Buttons/PublishBtn/PublishBtn.styled";
import { PublishBtnText } from "./Styles/Buttons/PublishBtn/Text.styled";

import validationSchema from "./Validation/validation.schema";
import { ButtonsContainer } from "./Styles/Buttons/BtnContainer.styled";
import { DiscardButton } from "./Styles/Buttons/DiscardBtn/DiscardBtn.styled";
import { DiscardBtnText } from "./Styles/Buttons/DiscardBtn/Text.styled";
import { FieldContainer } from "./Styles/Fields/FieldContainer.styled";

import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../slices/posts/posts.slice";
import { RemoveUserImgButton } from "./Styles/Buttons/RemoveImgBtn/RemoveUserImgBtn.styled";
import { UserImageSection } from "./Styles/Sections/UserImageSection.styled";
import { CharacterCountMsg } from "./Styles/Fields/CharacterCountMsg.styled";
import { EmptyImage } from "../Styles/EmptyImage.styled";
import { Alert } from "@mui/material";

export interface State extends SnackbarOrigin {
  open: boolean;
}

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
  const [snackbarState, setSnackbarState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = snackbarState;
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

  const publishMessage = (values: any, previewImage: any, isValid: boolean) => {
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
    } else {
      handleOpenSnackbar();
    }
  }

  function removeUserImage() {
    setFileFormatIsValid(false);
    setUserImage(undefined);
  }

  function validatesFileType(fileFormat: string) {
    return ["image/png", "image/jpg", "image/jpeg"].includes(fileFormat);
  }

  function getCharactersCountMessage(message: string) {
    return (
      <CharacterCountMsg>
        {message.length} de {maxMessageSize} caracteres
      </CharacterCountMsg>
    );
  }

  const handleCloseSnackbar = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  const handleOpenSnackbar = () => {
    setSnackbarState({ ...snackbarState, open: true });
  };

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
                    <UserImageContainer
                      filePath={previewImage}
                      filePathCopy={selectedUserImageCopy}
                    >
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        key={vertical + horizontal}
      >
        <Alert severity="error">
          Formato de arquivo não é suportado. Use png, jpg ou jpeg
        </Alert>
      </Snackbar>
    </>
  );
}
