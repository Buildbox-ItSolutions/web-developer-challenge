import styled from 'styled-components';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import { AvatarPlaceholder } from '@/components/Avatar';
import Button from '@/components/Button';

import { Error } from '@/types';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.black['500']};
  max-width: 516px;
  min-height: 353px;
  border: 1px solid ${({ theme }) => theme.black['300']};
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

export const FileUploadContainer = styled(AvatarPlaceholder)<Error>`
  margin-bottom: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.black['200']};
  transition: border-color 200ms ease-out;

  ${({ error, theme }) => error && `border-color: ${theme.error}; & [data-name="image"] path { fill: ${theme.error} }`};

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const ImageButton = styled(Button)`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const InputName = styled(Input)`
  margin-bottom: 8px;
`;

export const InputMessage = styled(TextArea)`
  resize: vertical;
  margin-bottom: 8px;
  min-height: 80px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  align-self: end;
`;
