import { colors } from '../../themes/colors';
import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'create-post' })`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${colors.cardBackground};
  border: solid 1px ${colors.border};
  border-radius: 3px;
  padding: 24px;

  max-width: 100%;

  width: 516px;
`;

export const AddImageContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const AddNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0 8px;
  width: 100%;
  input {
    width: 100%;
  }
`;
