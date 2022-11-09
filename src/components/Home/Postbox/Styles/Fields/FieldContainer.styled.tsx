import styled from "styled-components";
import { gray_300, gray_50 } from "../../../../../styles/colors/colors";

export const FieldContainer = styled.div`
  & input,
  & textarea {
    border-radius: 8px;
    background-color: ${gray_300};
    width: 100%;
    font-size: 14px;
    font-family: Helvetica;
    margin: 16px 0 0px;
    padding: 12px 16px 11px 16px;
    max-width: -webkit-fill-available;
    color: white;
    outline: none;
    border: none;
    resize: none;

    &::placeholder {
      width: 101px;
      height: 17px;
      font-size: 14px;
      font-family: Helvetica;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: normal;
      text-align: left;
      color: ${gray_50};
    }
  }

  & textarea {
    min-height: 100px;
  }
`;
