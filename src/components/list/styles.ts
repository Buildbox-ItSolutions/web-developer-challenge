import styled from 'styled-components';
import theme from '../../Theme';

export const Wrapper  = styled.div`
  display: flex;
  flex-wrap: wrap;  
  margin: 56px auto 40px auto;
  padding: 0;
  height: auto;
  width: 516px;

  > p {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: ${theme.colors.warm_grey_two};
  }
`;

export const PostItem = styled.div`
  display: flex;
  flex-wrap: wrap;  
  border-radius: 3px;
  border: 1px solid  ${theme.colors.border};
  background-color: ${theme.colors.box};
  margin: 0 0 16px 0;
  padding: 12px;
  width: 516px;
`;

export const WrapperDell = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  heigth: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-wrap: no-wrap;  
  margin: 24px 24px 0 24px;
  
  > div > p {
    margin: 0;
    padding-left: 32px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: ${theme.colors.text};
  }

  > div > div {
    margin: 24px 20px 20px 32px;
  }

  > div > div > p:first-child {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: ${theme.colors.text_light};
  }

  > div > div > p:last-child {
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: ${theme.colors.warm_grey_two};
  }
`;


