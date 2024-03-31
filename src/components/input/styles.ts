import styled from 'styled-components';
import theme from '../../Theme';

export const InputStyled = styled.input`
  width: 100%;  
  max-width: 468px;
  height: 40px;
  margin: 16px 0 11px 0;
  padding: 11px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${theme.colors.greyish_brown_three};
  color: ${theme.colors.white};
  font-size: 14px;
  line-height: 1.29;
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  max-width: 468px;
  height: 80px;
  margin: 8px 0 0 0;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${theme.colors.greyish_brown_three};
  color: ${theme.colors.white};
  font-size: 14px;
  line-height: 1.29;
  resize: none;

  @media (max-width: 550px) {
    height: 200px;
  }
`;


