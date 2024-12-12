import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  border: 0;
  border-radius: 8px;
  width: 468px;
  height: 80px;
  margin: 8px 0 30px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  color: white;
  background-color: ${(props) => props.theme.colors.input};
  ::placeholder {
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: ${(props) => props.theme.colors.font};
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ErrorInputTextArea = styled("p")`
  color: #f00;
  font-size: 0.8rem;
  width: 100%;
  max-width: 468px;
  margin: 0.1px 0 0 0;
  padding-left: 1rem;
`;
