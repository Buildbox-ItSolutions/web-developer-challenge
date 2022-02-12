import styled from 'styled-components';
import { colors } from '../themes/colors';

export const Input = styled.input`
  height: 40px;

  padding: 12px 16px 12px 16px;
  border-radius: 8px;
  background: ${colors.inputsBg};
  border: none;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #fff;
`;

export const TextArea = styled.textarea`
  height: 80px;
  font-size: 14px;
  padding: 12px 16px 12px 16px;
  border-radius: 8px;
  background: ${colors.inputsBg};
  border: none;

  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #fff;
`;
