import styled from "styled-components";

const PostListContainer = styled.div`
  width: 516px;
  height: auto;
  margin: 50px auto 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 20px auto;
    padding: 26px;
  }
`;

const Button = styled.button`
  width: auto;
  height: auto;
  margin-left: 1.5rem;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const PhotoUpload = styled.label`
  position: relative;
  width: 5.5rem;
  height: 5.5rem;
  margin-bottom: 20px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 36px;
  border: solid 1px #3b3b3b;
`;

const PhotoInput = styled.input`
  display: none;
`;

const PhotoPreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const PhotoPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UploadIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const OtherImage = styled.img<{ photoURL?: string | null }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  height: auto;
  display: ${({ photoURL }) => (photoURL ? "none" : "block")};
`;

const DeleteButton = styled(Button) <{ photoURL?: string | null }>`
  position: absolute;
  top: 22.5%;
  right: 46.5%;
  transform: translate(50%, -50%);
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: ${({ photoURL }) => (photoURL ? "block" : "none")};

  @media screen and (min-width: 320px) and (max-width: 568px) {
    width: 1.25rem;
    top: 11.2rem;
    left: 55%;
  }

  @media screen and (min-width: 569px) and (max-width: 768px) {
    width: 1.25rem;
    top: 23.5%;
    left: 53%;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 1.25rem;
    top: 27%;
    left: 52%;
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    width: 1.25rem;
    top: 28%;
    left: 51.6%;
  }

  @media screen and (min-width: 1441px) and (max-width: 1680px) {
    width: 1.25rem;
    top: 23.5%;
    left: 51.6%;
  }

  @media screen and (min-width: 1681px) {
    width: 1.25rem;
    top: 22.5%;
    left: 51.3%;
  }
`;

const InputField = styled.input`
  width: 31rem;
  height: 1.5rem;
  margin: 0.6rem 0 0.5rem;
  padding: 13px;
  border-radius: 8px;
  background-color: #494949;
  border: none;
  font-size: 1rem;
  color: #ffffff;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const MessageField = styled.textarea`
  width: 31rem;
  height: 4.5rem;
  margin: 0.3rem 1.5rem;
  padding: 13px;
  border-radius: 8px;
  background-color: #494949;
  border: none;
  resize: none;
  font-size: 1rem;
  color: #ffffff;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 2rem;
`;

const ButtonDescartar = styled(Button)`
  color: #5f5f5f;
  text-decoration: underline;
  font-family: Roboto;
  font-size: 0.885rem;
  letter-spacing: 1px;
  text-align: center;
`;

const ButtonPublicar = styled(Button) <{ isFilled: boolean }>`
  width: 6.13rem;
  height: 2.563rem;
  padding: 0.79rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ isFilled }) => (isFilled ? "#71bb00" : "#5f5f5f")};
  color: ${({ isFilled }) => (isFilled ? "#ffffff" : "#313131")};
  cursor: ${({ isFilled }) => (isFilled ? "pointer" : "not-allowed")};
  font-size: 0.875rem;
  &:disabled {
    background-color: #5f5f5f;
    color: #313131;
    cursor: not-allowed;
  }
`;

export {
  PostListContainer,
  DeleteButton,
  PhotoUpload,
  PhotoInput,
  PhotoPreviewContainer,
  PhotoPreview,
  UploadIcon,
  OtherImage,
  InputField,
  MessageField,
  ButtonContainer,
  ButtonDescartar,
  ButtonPublicar,
};
