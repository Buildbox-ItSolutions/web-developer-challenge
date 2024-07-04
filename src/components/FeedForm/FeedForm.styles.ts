import styled from "styled-components";

export const FeedFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 320px;
  padding: 16px 32px;
  box-sizing: border-box;
  background-color: #242424;
  border: 1px solid #474747;
`;

export const InputImg = styled.input`
  margin-bottom: 24px;
`;

export const InputName = styled.input`
  margin-bottom: 8px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const TextareaMessage = styled.textarea`
  margin-bottom: 8px;
  width: 100%;
  height: 90px;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  box-sizing: border-box;
  font-family: sans-serif;
  resize: none;
`;

export const ActionContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  margin-top: 24px;
`;

export const DiscardButton = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
  margin-right: 8px;
`;

export const PublishButton = styled.button`
  border-radius: 8px;
  border: none;
  padding: 12px 24px;
`;
