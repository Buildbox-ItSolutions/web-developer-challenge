import styled from "styled-components";

export const StyledInput = styled.input`
  width: 468px;
  height: 40px;
  padding-right: 20px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.input};
  padding-left: 20px;
  color: white;
  border: none;

  ::placeholder {
    width: 120px;
    height: 17px;
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

export const ErrorInput = styled("p")`
  color: #f00;
  font-size: 0.8rem;
  width: 100%;
  max-width: 468px;
  margin: 0.2rem 0 0 0;
  padding-left: 1rem;
`;
