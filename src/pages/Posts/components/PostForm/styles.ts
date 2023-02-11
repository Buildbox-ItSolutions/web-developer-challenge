import styled, { css } from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  width: min-content;
  font-size: 14px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.greyishBrownTwo};
  background-color: ${({ theme }) => theme.colors.blackTwo};
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  display: flex;
  margin: 0 auto 16px;
  width: min-content;
  cursor: pointer;
`;

export const FileInputImage = styled.img<{ hasImage: boolean }>`
  border-radius: 30px;
  width: 88px;
  height: 88px;
  object-fit: cover;
  padding: ${({ hasImage }) => (hasImage ? '0' : '32px')};
  border: ${({ hasImage, theme }) =>
    hasImage ? 'none' : `1px solid ${theme.colors.greyishBrown}`};
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  width: 468px;
  margin-bottom: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.greyishBrown};
  color: ${({ theme }) => theme.colors.white};
`;

export const TextArea = styled.textarea`
  font-family: inherit;
  font-size: inherit;
  width: 468px;
  height: 80px;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 32px;
  border: none;
  background-color: ${({ theme }) => theme.colors.greyishBrown};
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const unstyledButton = css`
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
  cursor: pointer;

  :disabled {
    cursor: default;
  }
`;

export const TrashButton = styled.button`
  ${unstyledButton};
  margin-left: 16px;
`;

export const ResetButton = styled.button`
  ${unstyledButton}
  margin-right: 24px;
  color: ${({ theme }) => theme.colors.greyishBrown};
  text-decoration: underline;
`;

export const SubmitButton = styled.button`
  ${unstyledButton}
  border-radius: 8px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.darkLimeGreen};
  color: ${({ theme }) => theme.colors.white};

  :disabled {
    background-color: ${({ theme }) => theme.colors.brownishGrey};
    color: ${({ theme }) => theme.colors.blackTwo};
  }
`;
