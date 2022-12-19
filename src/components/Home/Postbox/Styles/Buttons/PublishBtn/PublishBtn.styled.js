import styled from "styled-components";
import { gray_100, gray_400 } from "../../../../../../styles/colors/colors";

export const PublishButton = styled.button`
  @media (max-width: 905px) {
    margin: 0;
    margin-top: 15px;
  }
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #71bb00;
  border: 1px solid ${gray_400};
  cursor: pointer;
  color: white;
  transition: background-color 0.2s;
  &:disabled {
    cursor: not-allowed;
    background-color: ${gray_100};
    & span {
      color: ${gray_400};
    }
  }
`;
