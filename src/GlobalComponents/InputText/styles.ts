import styled from "styled-components";

type PropsContainer = {
  height: string;
};
export const Container = styled.div<PropsContainer>`
  flex: 1;
  padding: 5px;

  input {
    width: 468px;
    height: ${(props) => props.height};
    border-radius: 8px;
    background-color: #494949;
    color: #fff;
    border: none;
    padding: 10px;

    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    white-space: pre;

    @media (max-width: 560px) {
      max-width: 400px;
    }

    @media (max-width: 400px) {
      max-width: 250px;
    }
  }
`;
