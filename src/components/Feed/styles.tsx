import styled from "styled-components"
import theme from '../../styles/theme';
import {SharedImage} from '../../styles/sharedStyles';


export const Container = styled.div`
  width: 516px;
  height: 225px;
  margin: 8px 425px 16px;
  padding: 12px 12px 32px 24px;
  border-radius: 3px;
  border: solid 1px ${theme.colors.grey500};
  background-color: ${theme.colors.grey700};
`;

export const ContainerPhotoMesage = styled.div`
  display: flex;

  p {
    width: 348px;
    height: 80px;
    margin: 24px 12px 24px 32px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
  }
`;