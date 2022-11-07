import styled from "styled-components";

export const FieldContainer = styled.div`
  & input,
  & textarea {
    border-radius: 8px;
    background-color: #494949;
    width: 100%;
    font-size: 14px;
    font-family: Helvetica;
    margin: 16px 0 8px;
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
      color: #9f9f9f;
    }
  }

  & textarea {
    min-height: 80px;
  }
`;
