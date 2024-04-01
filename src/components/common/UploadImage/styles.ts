import styled, { css } from 'styled-components';

export const UploadImageRoot = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadImageContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8.8rem;
  height: 8.8rem;

  overflow: hidden;

  cursor: pointer;

  ${({
    theme: {
      borderRadius,
      colors: { uploadButton },
    },
  }) => css`
    border-radius: ${borderRadius.uploadButton};
    border: 1px solid ${uploadButton.border};
  `}
`;

export const ImgStyled = styled.img<{ $hasFileSelected?: boolean }>`
  ${({ $hasFileSelected: hasFileSelected }) =>
    hasFileSelected &&
    css`
      width: 100%;
      object-fit: contain;
    `}
`;

export const InputStyled = styled.input`
  display: none;
`;

export const RemoveButton = styled.button`
  position: absolute;

  right: calc(50% - 8.6rem);

  background-color: transparent;
  border: none;
  outline: none;
`;
