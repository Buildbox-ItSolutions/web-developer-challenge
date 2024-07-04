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
