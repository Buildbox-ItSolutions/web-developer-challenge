import styled, { css } from "styled-components";

type LabelProps = {
  $url?: string;
};
export const Label = styled.label<LabelProps>`
  ${({ $url }) => css`
    min-width: 88px;
    min-height: 88px;
    padding: 32px;
    object-fit: contain;
    border-radius: 36px;
    border: solid 1px rgba(75, 75, 75);

    background: url(${$url ? $url : "./image.svg"});
    background-size: ${$url ? "cover" : ""};
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    &:hover {
      border: solid 1px rgb(255 252 252);
    }
  `}
`;

export const InputImageStyle = styled.input.attrs({
  type: "file",
  accept: "image/*",
})`
  display: none;
`;
