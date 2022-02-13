import { colors } from '../../themes/colors';
import styled from 'styled-components';

export const Container = styled.form.attrs({
  className: 'create-post',
})`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px 0 8px;
  width: 100%;
  input {
    width: 100%;
  }
`;

export const AddMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  textarea {
    width: 100%;
  }
`;

export const BottomButtonsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 32px;
`;

export const ButtonsContainer = styled.div`
  .clear-button {
    margin-right: 24px;
  }
`;
