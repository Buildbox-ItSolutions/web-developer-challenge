import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.card};
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;

  &.disabled {
    background-color: ${(props) => props.theme.colors.disabled};
  }
  &.primary {
    background-color: ${(props) => props.theme.colors.button};
    color: #fff;
  }

  &.primary:hover {
    background: #94c34c;
    transition: 0.5s;
    cursor: pointer;
  }

  &.secondary {
    background-color: ${(props) => props.theme.colors.card};
    color: ${(props) => props.theme.colors.font};
    text-decoration: underline;
    color: #5f5f5f;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #5f5f5f;
    padding: 0 0 1px;
  }

  &.secondary:hover {
    background: ${(props) => props.theme.colors.card};
    transition: 0.5s;
    cursor: pointer;
  }
`;
