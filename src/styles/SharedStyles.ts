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

export const ClearButton = styled.button.attrs({
  type: 'button',
  className: 'clear-button',
})`
  height: 17px;
  background: none;
  border: none;
  cursor: pointer;

  font-size: 0.8rm;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  text-decoration: underline;
  color: ${colors.text2};
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
  className: 'submit-button',
})`
  width: 98px;
  height: 41px;

  cursor: pointer;

  padding: 12px 24px;
  border-radius: 8px;
  background: ${colors.button1};

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  border: none;
  color: #fff;
`;
