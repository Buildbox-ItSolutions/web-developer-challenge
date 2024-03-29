import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 24px;
  flex-direction: column;
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreatePostContainer = styled.div`
  border-radius: 3px;
  background-color: #313131;
  padding: 24px;
  width: 516px;
  min-height: 353px;
  border: solid 1px #3b3b3b;
`;

export const CreatePostImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreatePostImageAndTrashIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const PreviewImageContainer = styled.img`
  width: 88px;
  height: 88px;
  object-fit: contain;
  border-radius: 36px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.2s;
  }
`;

export const PlaceholderImageContainer = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #4b4b4b;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.2s;
  }
`;

export const ButtonIcon = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    opacity: 0.7;
    transition: 0.2s;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const InputNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

export const InputName = styled.input`
  background-color: #494949;
  border-radius: 8px;
  border: none;
  width: 100%;
  color: #9f9f9f;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
`;

export const TextAreaContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;

  margin-bottom: 32px;

  @media (max-width: 500px) {
    margin-bottom: 16px;
  }
`;

export const TextAreaContent = styled.textarea`
  background-color: #494949;
  resize: none;
  border-radius: 8px;
  border: none;
  width: 100%;
  min-height: 80px;
  color: #9f9f9f;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
`;

export const DiscardText = styled.p`
  text-decoration: underline;
  color: #5f5f5f;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  line-height: 18px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`;

export const ButtonPublish = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 18px;
  border-radius: 8px;
  transition: 0.4s;
  background-color: #71bb00;
  color: #ffffff;
  
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    opacity: 0.7;
  }

  &:disabled {
    background-color: #5f5f5f;
    color: #313131;
    cursor: not-allowed;
    transition: 0.2s;
  }

`;

export const PublishText = styled.p`
  
`
