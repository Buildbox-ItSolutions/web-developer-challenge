import styled, { css } from "styled-components";

export const CustomButton = styled.button<{ noBg?: boolean }>`
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  transition-duration: 0.3s;
  width: 98px;
  height: 41px;

  &:disabled {
    color: ${(props) => props.theme.colors.gray.darker};
    background-color: ${(props) => props.theme.colors.disabledBackground};
    cursor: not-allowed;
    &:hover {
      background-color: ${(props) => props.theme.colors.disabledBackground};
    }
  }

  ${(props) =>
    props.noBg
      ? css`
          background-color: transparent;
          text-decoration: underline;
          color: ${(props) => props.theme.colors.gray.lightest};

          &:hover {
            text-decoration: none;
          }
        `
      : css`
          background-color: ${props.theme.colors.primary.main};
          color: #fff;

          &:hover {
            background-color: ${props.theme.colors.primary.dark};
          }
        `}
`;

export const CustomIconButton = styled.button<{ outlined?: boolean }>`
  width: 26px;
  height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  border-radius: 50%;
  background-color: transparent;
  border: none;

  ${(props) =>
    props.outlined && `border: 1px solid ${props.theme.colors.secondary.main}`}

  & svg {
    color: ${(props) => props.theme.colors.secondary.main};
    font-size: 20px;
  }
`;
