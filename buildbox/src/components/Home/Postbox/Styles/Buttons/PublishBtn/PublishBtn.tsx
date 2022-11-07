import styled from "styled-components";

export const PublishButton = styled.button`
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #71bb00;
  border: 1px solid #313131;
  cursor: pointer;
  color: white;
  transition: background-color 0.2s;
  &:disabled {
    background-color: #5f5f5f;
    & span {
      color: #313131;
    }
  }
`;
