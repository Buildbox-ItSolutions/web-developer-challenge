import { colors } from './../../themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 88px;

  border-radius: 36px;
  border: 1px solid ${colors.border2};

  input {
    display: none;
  }
`;

export const LabelContainer = styled.label`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  border-radius: 36px;
  border: 1px solid ${colors.border2};

  .fill {
    width: 88px;
    height: 88px;

    border-radius: 36px;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  margin-left: 16px;
  cursor: pointer;
`;
