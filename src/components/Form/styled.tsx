import styled from 'styled-components';
import Input from '@/components/Input';
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
