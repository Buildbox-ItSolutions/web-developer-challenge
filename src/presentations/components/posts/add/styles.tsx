import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 516px;
  height: 353px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
`;

export const Image = styled.picture`
  img {
    width: 88px;
    height: 88px;
    object-fit: contain;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 468px;
  height: 40px;
  margin: 16px 0 8px;
  // padding: 12px 351px 11px 16px;
  border-radius: 8px;
  background-color: #494949;
  color: #b9b9b9;

  ::placeholder {
    color: #9f9f9f;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 468px;
  height: 40px;
  margin: 16px 0 8px;
  // padding: 12px 351px 11px 16px;
  border-radius: 8px;
  background-color: #494949;
  color: #b9b9b9;

  ::placeholder {
    color: #9f9f9f;
  }
`;

export const Button = styled.button`
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #5f5f5f;
`;

export const GroupButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
