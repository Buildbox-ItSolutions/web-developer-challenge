import styled from "styled-components";

type PropsContainer = {
  height: string;
};
export const Container = styled.div<PropsContainer>`
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  textarea {
    width: 468px;
    height: ${(props) => props.height};
    border: none;
    border-radius: 8px;
    background-color: #494949;
    color: #fff;
    padding: 10px;
    resize: none;
    @media (max-width: 560px) {
      max-width: 400px;
    }
    @media (max-width: 400px) {
      max-width: 250px;
    }
  }
`;
