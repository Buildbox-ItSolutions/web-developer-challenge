import styled, { css } from "styled-components";

import { FiTrash } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  gap: 24px;
`;

export const Content = styled.div`
  width: 88px;
  height: 88px;
  border: solid 1px #4b4b4b;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TrashBin = styled(FiTrash)`
  position: absolute;
  left: calc(100% + 32px);
  color: #d65923;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

type ImageProps = {
  hasValue: boolean;
};

export const Image = styled.img<ImageProps>`
  object-fit: contain;

  ${({ hasValue }) =>
    hasValue
      ? css`
          width: 24px;
          height: 24px;
        `
      : css`
          width: 88px;
          height: 88px;
          border-radius: 36px;
        `}
`;
