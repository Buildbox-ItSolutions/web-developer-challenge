import styled from 'styled-components';
import theme from '../../Theme';

export const Wrapper  = styled.div`
  display: flex;
  margin-top: 41px;
  width: 564px;
  height: 353px;
  border-radius: 3px;
  background-color: ${theme.colors.box};
  border:1px solid  ${theme.colors.border};
`;

export const FieldsWrapper  = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const ButtonsWrapper  = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  width: 100%;
  height: 41px;

  > button[type=reset] {
    border: none;
    background-color: transparent;
    color: ${theme.colors.link_grey};
    text-decoration: underline;
    text-weigth: bold;
    margin: 0 24px 0 0;
  }

  > button[type=submit] {
    width: 98px;
    height: 41px;
    background-color: ${theme.colors.dark_lime_green};
    color: ${theme.colors.white};
    border-radius: 8px;
    border: none;
    margin: 0;
  }
`;