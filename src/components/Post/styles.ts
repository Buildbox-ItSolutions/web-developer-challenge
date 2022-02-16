import { colors } from './../../themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 516px;
  max-width: 100%;

  padding: 12px 12px 32px 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: ${colors.cardBackground};
`;

export const DeleteButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 24px;
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const PhotoContainer = styled.div`
  margin-right: 32px;
`;

export const PhotoImg = styled.img`
  width: 88px;
  height: 88px;

  border-radius: 36px;
`;

export const MessageContainer = styled.div`
  margin-right: 24px;
  p {
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: ${colors.text};
  }
`;

export const SendByContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 24px;

  small {
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    color: ${colors.text2};
  }

  span {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: ${colors.text3};
  }
`;
