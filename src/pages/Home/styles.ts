import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #343434;
`;

export const Content = styled.div`
  width: 516px;
  max-width: 90vw;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const CreatePostWrapper = styled.div`
  width: 100%;
  height: 353px;
`;

export const CreatePost = styled.form`
  padding: 24px;

  border: solid 1px #3b3b3b;
  border-radius: 3px;
  margin: auto;
  margin-top: 32px;

  background-color: #313131;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameInput = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const MessageTextArea = styled.div`
  width: 100%;
  height: 80px;

  margin-bottom: 32px;
`;

export const Cancel = styled.div`
  cursor: pointer;
  color: #5f5f5f;
  font-size: 14px;
  text-decoration: underline;
  text-decoration-color: #5f5f5f;
`;

export const CreatePostFooter = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 24px;
  margin-top: 24px;
`;

export const ButtonContainer = styled.div`
  width: 98px;
`;

export const FeedWrapper = styled.div`
  margin-top: 128px;

  width: 100%;
`;

export const Feed = styled.div`
  color: #7a7a7a;
  margin-bottom: 16px;
`;
