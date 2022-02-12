import styled from 'styled-components';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Text from '@/components/Text';
import TextArea from '@/components/TextArea';

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

export const AvatarContainer = styled.div`
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.black['200']};
  transition: border-color 200ms ease-out;

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

export const Error = styled(Text)`
  font-size: 12px;
  margin-bottom: 8px;
  align-self: flex-start;
`;
