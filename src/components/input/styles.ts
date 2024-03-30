import styled from 'styled-components';
import theme from '../../Theme';

export const InputStyled = styled.input`
  width: 444px;
  height: 18px;
  border-radius: 8px;
  border: none;
  background-color: ${theme.colors.greyish_brown_three};
  color: ${theme.colors.white};
  padding: 11px 16px;
  margin-bottom: 11px;
  font-size: 14px;
  line-height: 1.29;
`;

export const TextAreaStyled = styled.textarea`
  width: 444px;
  height: 56px;
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.greyish_brown_three};
  color: ${theme.colors.white};
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.29;
  resize: none;
`;


