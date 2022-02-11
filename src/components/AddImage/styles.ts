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
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  svg {
    margin-bottom: 10px;
    width: 60px;
    height: 60px;
  }
`;
