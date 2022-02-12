import styled from 'styled-components';

import type { Error } from '@/types';
import Button from '@/components/Button';
import FileUpload from '@/assets/file-upload-icon.svg?component';

export const FileUploadIcon = styled(FileUpload)<Error>`
  ${({ error, theme }) =>
    error && `& [data-name="image"] path { fill: ${theme.error} }`}
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
`;

export const TrashButton = styled(Button)`
  position: absolute;
  right: -36px;
`;

export const FileUploadContainer = styled.div<Error>`
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.black['200']};
  transition: border-color 200ms ease-out;

  ${({ error, theme }) => error && `border-color: ${theme.error}`};

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const ImageButton = styled(Button)`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.lg};
`;
